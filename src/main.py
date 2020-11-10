# pip install -r .\requirements.txt
import json
from flask import Flask, request, jsonify
from flask_restful import Api, Resource

from vector import sim
from text import clean_text, create_freq_count, count_freq
from files import file_to_string, get_filenames, Document

app = Flask(__name__)
api = Api(app)


# Routes

@app.route("/search", methods=["POST"])
def search_documents():

    query = request.get_json()["query"]

    docs = {
        "list": [Document(filename).__dict__ for filename in get_filenames()],
        "query": query
    }

    return jsonify(docs)


@app.route("/doc/<string:filename>", methods=["GET"])
def get_document(filename):

    doc = Document(filename)

    return jsonify(
        {"doc":
            {
                "title": doc.title,
                "content": doc.content
            }
         })


# Run server

PORT = 5000
if __name__ == "__main__":
    app.run(host="localhost", port=PORT, debug=True)

# d1 = file_to_string(".\\dokumen\\dokumen1.txt")

# t1 = "   Hello            test test one two    one    "

# print(clean_text(d1))

# d1 = [2, 3, 5]
# d2 = [3, 7, 1]
# q = [0, 0, 2]


# print(sim(q, d1))
# print(sim(q, d2))
