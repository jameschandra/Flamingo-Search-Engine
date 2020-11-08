# pip install -r .\requirements.txt
from flask import Flask, request
from flask_restful import Api, Resource

from vector import sim
from text import clean_text, create_freq_count, count_freq
from files import file_to_string

app = Flask(__name__)
api = Api(app)


class Document(Resource):
    def get(self):
        return {"data": "hellowrodl"}

    def post(self):
        data = request.get_json()
        print(data)
        return data


api.add_resource(Document, "/doc")


if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)

# d1 = file_to_string(".\\dokumen\\dokumen1.txt")

# t1 = "   Hello            test test one two    one    "

# print(clean_text(d1))

# d1 = [2, 3, 5]
# d2 = [3, 7, 1]
# q = [0, 0, 2]


# print(sim(q, d1))
# print(sim(q, d2))
