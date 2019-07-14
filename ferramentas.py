# -*- coding: UTF-8 -*-
"""

-> Todas minhas ferramentas de Python para otimizar as coisas;

l_. Luca Negrette ._l

"""


def sum_of_arrays(*args):
    """
    Sum of the numbers in a box [], {}, ()
    Ex:
        arr = [2, 1, 5]
        arr2 = [1, 5, 7]
        print(sum_of_array(*arr, *arr2))

    * The arguments must be numeric

    :param args: array, tuple, collect
    :return: return sum(*args)
    """
    return sum(args)

