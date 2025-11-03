from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from sentence_transformers import SentenceTransformer
import constants as c
from search import find_best_matches, find_n_best_matches
import utils as u
from typing import Literal, Any
from search_OA_api import movieSuggestion
import omdb_api as o

app = Flask(__name__)
CORS(app)  # Allow requests from React

ML_BACKEND: Literal["OAI", "QWEN_EMBED"] = "OAI"

if ML_BACKEND == "QWEN_EMBED":
    database = pd.read_pickle(c.DATABASE_PATH)
    model = SentenceTransformer(c.MODEL_NAME)
    N = 10  # Hard coded


@app.route("/api/query_best_match", methods=["POST"])
def query_best_match():
    data = request.json
    text = data.get("text", "")  # här ligger användarens query
    result = find_best_matches([text, ""], database, model)
    name, year, imdb_id = u.get_name_year_imdb_id(result.iloc[0])
    return jsonify({"name": name, "year": year, "imdb_id": imdb_id})


@app.route("/api/query_n_best_matches", methods=["POST"])
def query_n_best_matches():
    data = request.json
    print(f"DEBUG: type of data: {type(data)}, data: {data}")
    text = data.get("text", "")  # här ligger användarens query
    extra_user_input = interpret_extra_user_input(data)  # if hasSetLevels else None
    match ML_BACKEND:
        case "QWEN_EMBED":
            result = find_n_best_matches(N, [text, ""], database, model)[0]
            return jsonify(
                [
                    {"name": match[0], "year": match[1], "imdb_id": match[2]}
                    for match in result
                ]
            )
        case "OAI":
            result = movieSuggestion(
                text, c.LLM_SYSTEM_PROMPT, extra_user_input=extra_user_input
            ).split("\n")
            full_results = o.get_info(result)
            return jsonify(full_results)


def interpret_extra_user_input(user_input: dict[str, Any]) -> dict[str, Any]:
    hasSetLevels = user_input["hasSetLevels"]

    interpreted_input = dict()
    interpreted_input["selectedTopics"] = user_input["selectedTopics"]
    interpreted_input["selectedVibes"] = user_input["selectedVibes"]
    interpreted_input["selectedGenres"] = user_input["selectedGenres"]
    interpreted_input["selectedMoods"] = user_input["selectedMoods"]
    interpreted_input["hasSetLevels"] = hasSetLevels
    if hasSetLevels:
        if user_input["energyLevel"] >= 75:
            interpreted_input["energyLevel"] = c.VERY_HIGH_ENERGY
        elif user_input["energyLevel"] >= 50:
            interpreted_input["energyLevel"] = c.HIGH_ENERGY
        elif user_input["energyLevel"] >= 25:
            interpreted_input["energyLevel"] = c.LOW_ENERGY
        else:
            interpreted_input["energyLevel"] = c.VERY_LOW_ENERGY

        if user_input["attentionLevel"] >= 75:
            interpreted_input["attentionLevel"] = c.VERY_HIGH_ATTENTION
        elif user_input["attentionLevel"] >= 50:
            interpreted_input["attentionLevel"] = c.HIGH_ATTENTION
        elif user_input["attentionLevel"] >= 25:
            interpreted_input["attentionLevel"] = c.LOW_ATTENTION
        else:
            interpreted_input["attentionLevel"] = c.VERY_LOW_ATTENTION

    return interpreted_input


if __name__ == "__main__":
    app.run(debug=True, port=5000)
