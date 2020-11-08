import os

cur_path = os.path.dirname(__file__)


def file_to_string(file_path):
    data = ""
    exact_path = os.path.relpath(file_path, cur_path)
    with open(exact_path, "r") as file:
        data = file.read(). replace("\n", " ")

    return data
