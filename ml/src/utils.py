import numpy as np


def nargmax2d(arr: np.array, n: int) -> np.array:
    return (-arr).argsort(axis=-1)[:, :n]


def get_name_year_imdb_id(result):
    name_year = result["movie_name"]
    imdb_id = result["imdb_id"]
    name, year = name_year.split("_")

    return name, int(year), imdb_id
