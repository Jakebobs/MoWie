from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from sentence_transformers import SentenceTransformer
import constants as c
from search import find_best_matches, find_n_best_matches
import utils as u
from typing import Literal
from search_OA_api import movieSuggestion

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
    text = data.get("text", "")  # här ligger användarens query
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
            result = movieSuggestion(text, c.LLM_SYSTEM_PROMPT).split("\n")
            return jsonify(
                [{"name": match, "year": 0, "imdb_id": 0, "genre": "hej" "imdb_rating": 0, "rt_rating": 0} for match in result]
            )


if __name__ == "__main__":
    app.run(debug=True, port=5000)
