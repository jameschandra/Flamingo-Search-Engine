import json
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename

from vector import sim
from text import clean_text, create_freq_count, count_freq, term_freq, dict_to_vector
from files import file_to_string, get_filenames, Document, DOCUMENT_DIRECTORY

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = DOCUMENT_DIRECTORY
CORS(app)


# Routes

@app.route("/search", methods=["POST"])
def search_documents():

    query = request.get_json()["query"]
    print(query)

    res = {
        "docs": [Document(filename).__dict__ for filename in get_filenames()],
        "query": {
            "input": query,
            "term_freq": []
        }
    }

    freq = term_freq([doc["content"] for doc in res["docs"]] + [query])

    for i in range(len(freq)):
        if i == len(freq) - 1:
            res["query"]["term_freq"] = freq[i]
        else:
            res["docs"][i]["term_freq"] = freq[i]

    for doc in res["docs"]:
        doc["similarity"] = sim(dict_to_vector(
            res["query"]["term_freq"]), dict_to_vector(doc["term_freq"]))

    res["docs"] = sorted(
        res["docs"], key=lambda k: k["similarity"], reverse=True)

    return jsonify(res)


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


@app.route("/upload-file", methods=["POST"])
def upload_file():
    file = request.files['file']
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))

    return jsonify({'message': 'File uploaded succesfully'})
# source https://roytuts.com/python-flask-rest-api-file-upload/


# Run server


PORT = 5000
if __name__ == "__main__":
    app.run(host="localhost", port=PORT, debug=True)
