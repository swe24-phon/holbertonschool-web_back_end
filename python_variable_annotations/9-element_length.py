#!/usr/bin/env python3
"""
This function takes a list of strings and returns a list of
tuples containing the string and its length."""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples containing the string and
    its length for each string in the input list."""
    return [(i, len(i)) for i in lst]
