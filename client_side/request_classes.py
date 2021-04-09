from client_side.server_connection import ServerConnection
import json


class Requests:
    def __init__(self, url):
        self.connection = ServerConnection(url)

    def login(self, username, password):
        jwt_token = self.connection.auth(username, password)
        return jwt_token

    def sign_up(self, username, password):
        sign_up = self.connection.register(username, password)
        return sign_up

    def get_quiz(self, jwt_token, quiz_name):
        request = self.connection.get_quiz(quiz_name, jwt_token)

        return request

    def post_quiz(self, quiz, question_dict, user):
        request = self.connection.post_quiz(quiz, user, question_dict)

        return request['message']

    def delete_quiz(self, quiz_name):
        delete = self.connection.delete_quiz(quiz_name)

        delete_request = delete.json()
        delete_request = json.loads(delete_request)

        return delete_request['message']

    def put_quiz(self, quiz_name, add_or_remove, question, user):
        put = self.connection.put(quiz_name, add_or_remove, question, user)

        return put

    def get_quizzes(self):
        quizzes = self.connection.get_quizzes()

        return quizzes

    def update_percentage(self, quiz_name, percentage, user):
        update = self.connection.update_percentage(quiz_name, percentage, user)

        return update['message']

    def get_stats(self, username):
        stats = self.connection.get_stats(username)

        return stats
