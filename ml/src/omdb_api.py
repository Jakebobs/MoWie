import requests as r
from dotenv import load_dotenv
import os
from typing import List, Any
from pprint import pprint

os.environ.pop("OMDB_API_KEY", None)
load_dotenv()
apikey = os.getenv("OMDB_API_KEY")


class MovieNotFoundError(ValueError):
    pass


def get_info(results: List[str]) -> List[dict[str, Any]]:
    final_results = []
    for title in results:
        try:
            final_results.append(_query_api(title))
        except MovieNotFoundError:
            continue

    return final_results

    # [_query_api(title) for title in results]


def _query_api(title: str) -> dict[str, Any]:
    req = r.get(f"http://www.omdbapi.com/?apikey={apikey}&t={title}")
    try:
        result = req.json()
    except:
        raise MovieNotFoundError("placeholder")
    if not result["Response"] or result["Response"] == "False":
        raise MovieNotFoundError("No movie found")
    try:
        result["name"] = result["Title"]
    except KeyError as e:
        pprint(result)
        raise KeyError("custom" + e)
    result["year"] = result["Year"]
    result["imdb_id"] = result["imdbID"]
    result["genre"] = result["Genre"]
    result["description"] = result["Plot"]
    result["imdb_rating"] = result["imdbRating"]
    if result["Ratings"] != []:
        try:
            result["rt_rating"] = result["Ratings"][1]["Value"]
        except IndexError:
            result["rt_rating"] = "N/A"
    else:
        result["rt_rating"] = "N/A"

    return result

    # a run of the mill action movie
