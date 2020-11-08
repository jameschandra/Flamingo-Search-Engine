import math


def dot(v1, v2):
    n = len(v1)
    result = 0
    for i in range(n):
        result += (v1[i] * v2[i])

    return result


def norm(v):
    result = 0
    for el in v:
        result += el**2

    return math.sqrt(result)


def sim(v1, v2):
    n1 = norm(v1)
    n2 = norm(v2)

    return (dot(v1, v2)/(n1*n2))
