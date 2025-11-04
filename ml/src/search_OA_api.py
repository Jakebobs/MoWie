from openai import OpenAI
from dotenv import load_dotenv
import os
import constants as c

os.environ.pop("OPENAI_API_KEY", None)
load_dotenv()
apikey = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=apikey)


def validate_oa_response(response: str) -> bool:
    if response in c.REJECTIONS:
        return True
    rlist = response.split("\n")
    return len(rlist) == 10


def movieSuggestion(
    userPrompt, systemPrompt, model="gpt-5-mini", extra_user_input: dict = None
):
    print(f"DEBUG: model is {model}")
    prompt = parse(userPrompt, extra_user_input)
    print(f"DEBUG: prompt is {prompt}")
    response = client.responses.create(
        model=model,
        input=[
            {
                "role": "system",
                "content": systemPrompt,
            },
            {"role": "user", "content": prompt},
        ],
        service_tier="priority",
        reasoning={"effort": "minimal"},
    )

    return response.output_text


def parse(userprompt, extraUserInput: dict = None):
    if extraUserInput is None:
        return userprompt

    if userprompt == 0:
        userprompt = ""

    topicSubStr = (
        "I would like the movie to cover one of these topics: "
        + ", ".join(extraUserInput["selectedTopics"])
        + ". "
        if extraUserInput["selectedTopics"] != []
        else ""
    )

    vibesSubStr = (
        "I would like the movie to have one of these vibes: "
        + ", ".join(extraUserInput["selectedVibes"])
        + ". "
        if extraUserInput["selectedVibes"] != []
        else ""
    )

    genresSubStr = (
        "I would like the movie to be of one of these genres: "
        + ", ".join(extraUserInput["selectedGenres"])
        + ". "
        if extraUserInput["selectedGenres"] != []
        else ""
    )

    moodSubStr = (
        "I would like the movie to have one of these moods: "
        + ", ".join(extraUserInput["selectedMoods"])
        + ". "
        if extraUserInput["selectedMoods"] != []
        else ""
    )

    energyAttentionSubStr = (
        f"Additionally, {extraUserInput['energyLevel']} And {extraUserInput['attentionLevel']}"
        if extraUserInput["hasSetLevels"]
        else ""
    )

    return (
        userprompt
        + f"{' Also, ' if userprompt != '' and (topicSubStr != '' or vibesSubStr != '' or genresSubStr != '' or moodSubStr != '' or energyAttentionSubStr != '') else ''}{topicSubStr}{vibesSubStr}{genresSubStr}{moodSubStr}{energyAttentionSubStr}"
    )


if __name__ == "__main__":
    print(
        movieSuggestion(
            "whimsical magical mystery with female lead",
            "Suggest a movie that is completely opposite to the user query",
        )
    )
