#!/usr/bin/env python3
"""Sum of a list of floats and integers."""
from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Sum of a list of floats and integers."""
    return float(sum(mxd_lst))
