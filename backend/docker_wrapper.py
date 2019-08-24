#!/usr/bin/env python

import docker
import random
import string
import timeago
import datetime
import dateutil.parser

from .config import Config


class DockerWrapper(object):
    @staticmethod
    def _get_uptime(container):
        started_at = dateutil.parser.parse(container.attrs['State']['StartedAt'])
        return timeago.format(started_at, datetime.datetime.now(dateutil.tz.tzutc()))

    @staticmethod
    def _get_container_info(container):
        return {
            'name': container.name.replace(Config.CONTAINER_PREFIX, ''),
            'uptime': DockerWrapper._get_uptime(container),
            'id': container.id,
        }

    @staticmethod
    def _is_webcaas_container(container):
        return container.labels.get('webcaas', '') == 'true'

    @staticmethod
    def get_active_containers():
        client = docker.from_env()
        result = []

        for container in client.containers.list():
            if DockerWrapper._is_webcaas_container(container):
                result.append(DockerWrapper._get_container_info(container))

        return result

    @staticmethod
    def run_container(container_name):
        client = docker.from_env()
        result = { 'error': None, 'container': None }

        if isinstance(container_name, list):
            container_name = container_name[0]

        try:
            container = client.containers.run('ubuntu', 'bash',
                detach=True,
                stdin_open=True,
                remove=True,
                name=Config.CONTAINER_PREFIX + container_name,
                labels={
                    'webcaas': 'true',
                }
            )
        except Exception as e:
            result['error'] = str(e)
            return result

        result['container'] = DockerWrapper._get_container_info(container)
        return result

    @staticmethod
    def stop_container(container_id):
        result = { 'error': None }
        client = docker.from_env()

        container = None
        try:
            container = client.containers.get(container_id)
        except Exception as e:
            result['error'] = 'Container wasn\'t found'
            return result

        if not DockerWrapper._is_webcaas_container(container):
            result['error'] = 'This is not a WebCaaS container'
            return result

        container.stop(timeout=0)

        return result