import random


class QuizManager:
    def __init__(self, quiz_name, question_list):
        self.quiz_name = quiz_name
        self.question_list = question_list
        self.answer_numbers = list(range(1, 5))
        self.number_answer_dict = {}
        self.correct_answer_number_dict = {}

    def show_question(self, question, answer_dict):
        answer_list = [answer_dict['correct_answer']]
        for answer in answer_dict['wrong_answers']:
            answer_list.append(answer)
        random.shuffle(answer_list)
        counter = 0
        print(question)
        for value in answer_list:
            answer = value
            print(str(self.answer_numbers[counter]) + '. ' + str(answer))
            self.number_answer_dict[self.answer_numbers[counter]] = answer
            counter += 1
        return

    def get_user_answer(self, question, answer_dict):
        self.show_question(question, answer_dict)
        while True:
            user_answer = int(input('Please enter the number that represents the correct answer.\n >>'))
            if user_answer not in self.answer_numbers:
                print("Could not identify character as answer. Please try again. \n")
                continue
            else:
                break
        return user_answer

    def get_correct_answer(self, answer_dict):
        correct_answer = answer_dict['correct_answer']
        return correct_answer

    def check_user_answer(self, user_answer, correct_answer):
        answer = self.number_answer_dict[user_answer]
        if answer == correct_answer:
            print("Correct!\n\n")
            return True
        else:
            print("Incorrect!\n\n")
            return False

    def run_whole_quiz(self):
        counter = 0
        for question in self.question_list:
            correct_answer = self.get_correct_answer(question['answer_dict'])
            user_answer = self.get_user_answer(question['question'], question['answer_dict'])
            t_or_f = self.check_user_answer(user_answer, correct_answer)
            if t_or_f:
                counter += 1
        percentage = counter * 100 / len(self.question_list)

        return percentage
