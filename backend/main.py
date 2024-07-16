from fastapi import FastAPI, HTTPException
import json
import os
from trie import Trie

# Initialize FastAPI app
app = FastAPI()

# Load data from JSON file into Trie
script_dir = os.path.dirname(__file__)  # Absolute directory path of the script
rel_path = 'data.json'
abs_file_path = os.path.join(script_dir, rel_path)

trie = Trie()

with open(abs_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)
    for item in data:
        trie.insert(item['term'].lower())

# Endpoint to perform search


@app.get("/search")
async def perform_search(query: str):
    if len(query) < 4:
        raise HTTPException(
            status_code=400)

    results = trie.search_prefix(query.lower())
    if not results:
        raise HTTPException(status_code=404, detail="No results found")

    return {"results": results}
