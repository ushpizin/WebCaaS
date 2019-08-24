#!/usr/bin/env python

import os
import json
import httplib
from flask import Flask, render_template, request, abort

import backend.config
from backend.docker_wrapper import DockerWrapper


app = Flask(__name__)
app.url_map.strict_slashes = False


@app.route("/rest/containers/list")
def list_containers():
    return json.dumps(DockerWrapper.get_active_containers())


@app.route("/rest/containers/run", methods=['post'])
def run_container():
    result = DockerWrapper.run_container(**request.form)

    status = httplib.OK
    if result['error'] is not None:
        status = httplib.BAD_REQUEST

    return json.dumps(result), status


@app.route("/rest/containers/stop/<name>")
def stop_container(name):
    result = DockerWrapper.stop_container(name)

    status = httplib.OK
    if result['error'] is not None:
        status = httplib.BAD_REQUEST

    return json.dumps(result), status


@app.route("/rest/<path:path>")
def invalid_rest_api(path):
    abort(httplib.BAD_REQUEST)


@app.route("/", defaults={'path': ''})
@app.route("/<path:path>")
def index(path):
    return render_template('index.html', config=backend.config)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True)
