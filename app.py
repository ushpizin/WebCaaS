#!/usr/bin/env python

import os
from flask import Flask, render_template

import backend.config


app = Flask(__name__)


@app.route("/", defaults={'path': ''})
@app.route("/<path:path>")
def index(path):
    return render_template('index.html', config=backend.config)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True)
