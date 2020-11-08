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


def dic_to_vector(dic):
    vector = [dic[k] for k in dic.keys()]
    return vector


# ct1 = clean_text(text1)

# v = create_freq_count(ct1)

# d1 = count_freq(ct1, v)

# v1 = dic_to_vector(d1)

# print(d1)

# print(v1)
