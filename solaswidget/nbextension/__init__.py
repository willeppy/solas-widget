#!/usr/bin/env python
# coding: utf-8


def _jupyter_nbextension_paths():
    return [
        {
            "section": "notebook",
            "src": "nbextension/static",
            "dest": "solaswidget",
            "require": "solaswidget/extension",
        }
    ]
