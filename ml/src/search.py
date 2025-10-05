import pandas as pd
from sentence_transformers import SentenceTransformer
import numpy as np
from typing import List
import constants as c
import utils as u


def find_best_matches(
    queries: List[str], database: pd.DataFrame, model: SentenceTransformer
) -> pd.DataFrame:
    if len(queries) < 2:
        raise ValueError(
            f"queries must be at least two elements long, {queries} is not"
        )

    similarity = _get_similarity(queries, database, model)

    best_matches = similarity.argmax(1)

    return database.iloc[best_matches.tolist(), [0, 1]]


def find_n_best_matches(
    n: int, queries: List[str], database: pd.DataFrame, model: SentenceTransformer
) -> pd.DataFrame:
    if len(queries) < 2:
        raise ValueError(
            f"queries must be at least two elements long, {queries} is not"
        )

    similarity = _get_similarity(queries, database, model)
    n_best_matches = u.nargmax2d(similarity, n)

    return [
        [database.iloc[row, [0, 1]] for col in row][0]
        .apply(u.get_name_year_imdb_id, axis=1)
        .tolist()
        for row in n_best_matches.tolist()
    ]


def get_model():
    return SentenceTransformer(c.MODEL_NAME)


def get_database():
    return pd.read_pickle(c.DATABASE_PATH)


def _get_similarity(
    queries: List[str], database: pd.DataFrame, model: SentenceTransformer
):
    query_embeddings = model.encode(
        queries,
        prompt=c.MODEL_PROMPT,
    )
    summaries_embeddings = np.stack(database["summary_embedding"].to_numpy())

    return model.similarity(query_embeddings, summaries_embeddings)


if __name__ == "__main__":
    queries = [
        "Dark gritty horror movie with gruesome death",
        "Horror movie",
        "Extremely scary movie",
        "Sci-fi mystery dark fairy tale",
        "movie with a vibe of Peaky Blinders or Money Heist",
        "I am very tired and my brain is tired so suggest me something that is lightweight or doesnt require using brain/not think",
        "Happy/sad etc",
        "I want a Rom-Com movie",
        "We want cozy",
    ]
    database = pd.read_pickle(c.DATABASE_PATH)
    model = SentenceTransformer(c.MODEL_NAME)
    print(find_best_matches(queries, database, model))
    print("\nN\n")
    print(find_n_best_matches(1, queries, database, model))
