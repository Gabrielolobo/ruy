from fastapi import FastAPI, HTTPException
from typing import List
import json
import os

# Initialize FastAPI app
app = FastAPI()

# Absolute path to data.json
script_dir = os.path.dirname(__file__)  # Absolute directory path of the script
rel_path = 'data.json'
abs_file_path = os.path.join(script_dir, rel_path)

# Load data from JSON file
with open(abs_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# Temporary search algorithm


def search(query: str) -> List[str]:
    results = [item['term']
               for item in data if query.lower() in item['term'].lower()]
    return results

# Endpoint to perform search


@app.get("/search")
async def perform_search(query: str):
    results = search(query)
    if not results:
        raise HTTPException(status_code=404, detail="No results found")
    return {"results": results}
