from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from sentence_transformers import SentenceTransformer
import constants as c
from search import find_best_matches

app = Flask(__name__)
CORS(app)  # Allow requests from React

database = pd.read_pickle(c.DATABASE_PATH)
model = SentenceTransformer(c.MODEL_NAME)


@app.route("/api/query", methods=["POST"])
def query():
    data = request.json
    text = data.get("text", "")  # här ligger användarens query
    result = find_best_matches([text, ""], database, model)
    name_year = result["movie_name"].iloc[0]
    imdb_id = result["imdb_id"].iloc[0]
    name, year = name_year.split("_")
    return jsonify({"name": name, "year": int(year), "imdb_id": imdb_id})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
