from client_side.quiz_builder import QuizBuilder


class AddOrRemoveQuestion:
    def __init__(self, requests, jwt_token, quiz):
        self.requests = requests
        self.jwt_token = jwt_token
        self.quiz = quiz
        self.quiz_request = self.requests.get_quiz(self.jwt_token, self.quiz)
        self.question_numbers = range(len(self.quiz_request[quiz]))
        self.number_question_dict = {}

    def show_questions(self):
        counter = 0

        question_list = self.quiz_request[self.quiz]
        for question in question_list:
            question = question["question"]
            print(str(self.question_numbers[counter]) + '. ' + str(question))
            self.number_question_dict[self.question_numbers[counter]] = question
            counter += 1

    def get_user_answer(self):
        self.show_questions()
        while True:
            user_answer = int(input('Please enter the number that represents the question.\n >>'))
            if user_answer not in self.question_numbers:
                print("Could not identify character as answer. Please try again. \n")
                continue
            else:
                break
        return user_answer

    def remove_question(self, user):
        question_number = self.get_user_answer()
        question = self.number_question_dict[question_number]
        response = self.requests.put_quiz(self.quiz, "remove_question", question, user)
        return response

    def add_question(self, user):
        question_dict = QuizBuilder.user_make_question(len(self.question_numbers))
        question_number = "question_" + str(len(self.question_numbers)+1)
        response = self.requests.put_quiz(self.quiz, "add_question", question_dict[question_number], user)
        return response