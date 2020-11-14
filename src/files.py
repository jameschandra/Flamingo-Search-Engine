import os

from text import clean_text

CURRENT_PATH = os.path.dirname(__file__)
DOCUMENT_DIRECTORY = "documents_test"
# ALLOWED_EXTENSIONS = ['txt', 'html']


def file_to_string(file_path):
    data = ""
    exact_path = os.path.relpath(file_path, CURRENT_PATH)
    with open(exact_path, "r", encoding="utf8") as file:
        data = file.read().replace("\n", " ")

    return data


def get_filenames():
    return os.listdir(DOCUMENT_DIRECTORY)


# def allowed_file(filename):
#     return ('.' in filename) and (filename.split('.')[1] in ALLOWED_EXTENSIONS)
# # source https://roytuts.com/python-flask-rest-api-file-upload/


class Document:
    def __init__(self, filename):
        self.filename = filename
        self.title = (filename.split("."))[0]
        self.content = file_to_string(
            f".\\{DOCUMENT_DIRECTORY}\\{self.filename}")
        self.term_freq = {}
        self.similarity = 0
        self.length = len(clean_text(self.content))
        # self.first_sentence =


# files = get_filenames()
# documents = []

# for filename in files:
#     documents.append(Document(filename))

# print(documents[0].content)

# for document in documents:
#     print(f"Filename = {document.filename}")
#     print(f"Title = {document.title}")

#     print()
