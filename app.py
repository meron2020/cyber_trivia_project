from flask import Flask
from flask_restful import Api
from resources.quiz import Quiz
from resources.quiz import QuizList
from datetime import timedelta
from db import db
from resources.user import User
from flask_jwt import JWT
from security import authenticate, identity

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['JWT_EXPIRATION_DELTA'] = timedelta(seconds=1800)

app.secret_key = 'jose'
api = Api(app)

jwt = JWT(app, authenticate, identity)



@app.before_first_request
def create_tables():
    db.create_all()


api.add_resource(Quiz, '/quiz/<string:name>')
api.add_resource(QuizList, '/quizzes')
api.add_resource(User, '/user/<string:name>')


if __name__ == '__main__':
    db.init_app(app)
    app.run(port=5000, debug=True)