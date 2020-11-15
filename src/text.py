from Sastrawi.StopWordRemover.StopWordRemoverFactory import StopWordRemoverFactory
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory

import string

factory_stopwrods = StopWordRemoverFactory()
stopwords = factory_stopwrods.get_stop_words()

factory_stemmer = StemmerFactory()
stemmer = factory_stemmer.create_stemmer()


def clean_text(text):

    # removing punctuation
    for c in string.punctuation:
        text = text.replace(c, "")

    # removing excessive whitespace
    text = " ".join(text.split())

    # text to array of word
    words = text.split()

    # removing stopwords
    words = [word for word in words if word not in stopwords]

    # stemming word in query
    words = [stemmer.stem(word) for word in words]

    return words


def get_first_sentence(text):
    firstsentence = ""
    i = 0
    while(text[i] not in [".", "!", "?"]):
        firstsentence += text[i]
        i += 1
    firstsentence += text[i]

    return firstsentence


def create_freq_count(words):
    freq_count = {}
    for word in words:
        if word not in freq_count:
            freq_count[word] = 0

    return freq_count


def count_freq(words, dic):
    for word in words:
        if word in dic:
            dic[word] += 1

    return dic


def term_freq(docs):
    result = [{} for doc in docs]
    for i in range(len(result)):
        words = clean_text(docs[i])
        for word in words:
            for j in range(len(result)):
                if j == i:
                    if word not in result[j]:
                        result[j][word] = 1
                    else:
                        result[j][word] += 1
                else:
                    if word not in result[j]:
                        result[j][word] = 0

    return result


def dict_to_vector(dic):
    vector = [dic[k] for k in dic.keys()]
    return vector
