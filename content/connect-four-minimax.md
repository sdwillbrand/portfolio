---
date: 2024-01-19
title: Connect Four with Minimax
imageUrl: /Connect-Four.png
description: Implementing a Connect Four game using the Minimax algorithm
keywords: python, minimax
---
# Connect Four with Minimax

For a while I have been interested in learning how the Minimax algorithm works.

I wanted to use a simple example just to get started.

## TL;DR

Here is the [result](https://gist.github.com/sdwillbrand/79cae18f1dfa5d28a0dcc6458f5cb71f)

## Requirements

- python=3.12.1
- numpy

I have used [conda](https://docs.conda.io/projects/conda/en/stable/) to handle different python environments. Create an environment and activate to get started with python.

To install ``numpy``:

```bash
conda install numpy
```

## Setup: Connect Four

We are going to define some constants.

```python
# Constants
PLAYER_TOKEN = 1
AI_TOKEN = 2
ROW_COUNT = 6
COLUMN_COUNT = 7
```

These will come in handy later on.

Now create a class.

```python
class ConnectFour:
    def __init__(self):
        self.board = np.zeros((ROW_COUNT, COLUMN_COUNT), dtype=int)
        self.game_over = False
        self.turn = 0  # 0 for player, 1 for AI
        self.winner = -1
```
