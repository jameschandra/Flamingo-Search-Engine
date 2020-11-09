import os

CURRENT_PATH = os.path.dirname(__file__)
DOCUMENT_DIRECTORY = "documents"


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


# files = get_filenames()
# documents = []

# for filename in files:
#     documents.append(Document(filename))

# print(documents[0].content)

# for document in documents:
#     print(f"Filename = {document.filename}")
#     print(f"Title = {document.title}")

#     print()
