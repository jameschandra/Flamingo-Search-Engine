import nltk
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize
import string

nltk.download('punkt')
nltk.download('stopwords')

ps = PorterStemmer()
stop_words = set(stopwords.words("english"))


def clean_text(text):

    # removing punctuation
    for c in string.punctuation:
        text = text.replace(c, "")

    text = " ".join(text.split())

    words = word_tokenize(text)

    # removing stopwords
    words = [word for word in words if word not in stop_words]

    # stemming word in query
    words = [ps.stem(word) for word in words]

    return words


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


# doc1 = "Test test one one two"
# doc2 = "Test one three four five"
# doc3 = "four five one two nine"

# docs = [doc1, doc2, doc3]

# term_freq = term_freq_docs(docs)

# print(term_freq)

# print(clean_text(str(doc1)))

# ct1 = clean_text(text1)

# v = create_freq_count(ct1)

# d1 = count_freq(ct1, v)

# v1 = dic_to_vector(d1)

# print(d1)

# print(v1)
