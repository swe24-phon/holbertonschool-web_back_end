#!/usr/bin/env python3

"""Type-annotated function make_multiplier that takes a float multiplier as
argument and returns a function that multiplies a float by multiplier."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Type-annotated function make_multiplier that takes a float multiplier
    as argument and returns a function that multiplies a float by multiplier."""

    def multiply(n: float) -> float:
        """Type-annotated function that multiplies a float by multiplier."""
        return n * multiplier
    return multiply
