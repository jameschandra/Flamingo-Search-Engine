import os

from text import clean_text

CURRENT_PATH = os.path.dirname(__file__)
DOCUMENT_DIRECTORY = "documents_test"


def file_to_string(file_path):
    data = ""
    exact_path = os.path.relpath(file_path, CURRENT_PATH)
    with open(exact_path, "r") as file:
        data = file.read()  # . replace("\n", " ")

    return data


def get_filenames():
    return os.listdir(DOCUMENT_DIRECTORY)


class Document:
    def __init__(self, filename):
        self.filename = filename
        self.title = (filename.split("."))[0]
        self.content = file_to_string(
            f".\\{DOCUMENT_DIRECTORY}\\{self.filename}")
        self.term_freq = {}
        self.similarity = 0
        self.length = len(clean_text(self.content))


# files = get_filenames()
# documents = []

# for filename in files:
#     documents.append(Document(filename))

# print(documents[0].content)

# for document in documents:
#     print(f"Filename = {document.filename}")
#     print(f"Title = {document.title}")

#     print()
