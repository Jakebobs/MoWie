import pandas as pd
from sentence_transformers import SentenceTransformer
import numpy as np
from typing import List
import constants as c


def find_best_matches(
    queries: List[str], database: pd.DataFrame, model: SentenceTransformer
) -> pd.DataFrame:
    if len(queries) < 2:
        raise ValueError(
            f"queries must be at least two elements long, {queries} is not"
        )
    query_embeddings = model.encode(
        queries,
        prompt=c.MODEL_PROMPT,
    )
    summaries_embeddings = np.stack(database["summary_embedding"].to_numpy())

    similarity = model.similarity(query_embeddings, summaries_embeddings)

    best_matches = similarity.argmax(1)

    return database.iloc[best_matches.tolist(), [0, 1]]


if __name__ == "__main__":
    queries = [
        "A thrilling and awe-inspiring space movie with time travel and big ideas and a lot of emotion. Betrayal, sacrifice, love.",
        "A movie questioning the nature of reality. The protagonist goes up against a seemingly insurmountable force, but somehow prevails. Hopeful.",
        "A movie about a character selflessly making unthinkable sacrifices to achieve a higher goal.",
        "A movie about a character selflessly making unthinkable sacrifices to achieve a higher goal. The fate of the universe is at stake.",
        "A dark movie where evil wins. All hope is lost. Gloomy.",
        "A movie about an underdog overcoming obstacles and succeeding in the face of adversity. I want to get really warm and fuzzy inside.",
        "An inspirational movie where a character is tested but does not violate his principles. The ends do not justify the means.",
    ]
    database = pd.read_pickle(c.DATABASE_PATH)
    model = SentenceTransformer(c.MODEL_NAME)
    print(find_best_matches(queries, database, model))
