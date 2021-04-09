import requests
import json
from requests.auth import HTTPBasicAuth


class ServerConnection:
    def __init__(self, url):
        self.url = url

    def get_quiz(self, quiz, jwt_token):
        headers = {"content-type": "application/json", "connection": "keep-alive", "Authorization": "JWT " + jwt_token[1]}
        get_request = requests.get(self.url + "quiz/" + quiz, headers=headers).json()

        return get_request

    def post_quiz(self, quiz, user, question_dict):
        headers = {"content-type": "application/json", "connection": "keep-alive"}
        payload = {"user": user, "question_dict": question_dict}
        request = requests.post(self.url + "quiz/" + quiz, data=json.dumps(payload), headers=headers).json()

        return request

    def delete_quiz(self, quiz):
        headers = {"content-type": "application/json", "connection": "keep-alive"}
        delete_request = requests.delete(self.url + quiz, headers=headers)

        delete_request = delete_request.json()

        json.loads(delete_request)
        return delete_request['message']

    def put(self, quiz, add_or_remove, question, user):
        headers = {"content-type": "application/json", "connection": "keep-alive"}
        if add_or_remove == "add_question":
            payload = {add_or_remove: "True", "user": user, "question_added": question}
            put_request = requests.put(self.url + "quiz/" + quiz, data=json.dumps(payload), headers=headers).json()
        elif add_or_remove == "remove_question":
            payload = {add_or_remove: "True", "user": user, "question_removed": question}
            put_request = requests.put(self.url + "quiz/" + quiz, data=json.dumps(payload), headers=headers).json()

        return put_request['message']

    def get_quizzes(self):
        headers = {"content-type": "application/json", "connection": "keep-alive"}
        get_request = requests.get(self.url + "quizzes", headers=headers).json()

        return get_request['quizzes']

    def register(self, user, password):
        headers = {"content-type": "application/json", "connection": "keep-alive"}
        payload = {"password": password}
        register = requests.post(self.url + "user/" + user, headers=headers, data=json.dumps(payload)).json()

        register_message = register["message"]
        return register_message

    def auth(self, user, password):
        headers = {"content-type": "application/json", "connection": "keep-alive"}
        payload = {"username": user, "password": password}
        auth = requests.post(self.url + "auth", data=json.dumps(payload), headers=headers).json()

        return auth["access_token"]

    def update_percentage(self, quiz_name, percentage, user):
        headers = {"content-type": "application/json", "connection": "keep-alive"}
        payload = {"percentage": percentage, "quiz_name": quiz_name}
        update = requests.put(self.url + "user/" + user, headers=headers, data=json.dumps(payload)).json()

        return update

    def get_stats(self, username):
        headers = {"content-type": "application/json", "connection": "keep-alive"}
        get_request = requests.get(self.url + "user/" + username, headers=headers).json()

        return get_request
