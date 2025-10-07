from openai import OpenAI
from dotenv import load_dotenv
import os

os.environ.pop("OPENAI_API_KEY", None)
load_dotenv()
apikey = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=apikey)


def movieSuggestion(userPrompt, systemPrompt, model="gpt-5-nano"):
    prompt = parse(userPrompt)
    response = client.responses.create(
        model=model,
        input=[
            {
                "role": "system",
                "content": systemPrompt,
            },
            {"role": "user", "content": prompt},
        ],
    )

    return response.output_text


def parse(userprompt):
    return userprompt


if __name__ == "__main__":
    print(
        movieSuggestion(
            "whimsical magical mystery with female lead",
            "Suggest a movie that is completely opposite to the user query",
        )
    )
