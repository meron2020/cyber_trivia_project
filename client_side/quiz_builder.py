class QuizBuilder:

    @classmethod
    def user_make_question(cls, question_number):
        question_definition = input("\n\nPlease type the question. \n >>")
        correct_answer = input("\nPlease type the correct answer to this question. \n >>")
        false_answers_list = []
        for i in range(3):
            false_answer = input("\nPlease type in an incorrect answer to the question \n >>")
            false_answers_list.append(false_answer)

        question_and_num = "question_" + str(question_number+1)
        question_dict = {question_and_num: {"question": question_definition,
                                            "answers": {"correct answer": correct_answer}}}
        counter = 1
        for answer in false_answers_list:
            answer_name = "answer_" + str(counter)
            question_dict[question_and_num]['answers'][answer_name] = answer
            counter += 1
        return question_dict

    @classmethod
    def build_quiz(cls, user):
        quiz_name = input("Quiz name >>>")
        questions_dict = {}
        while True:
            question_amount = input("Amount of questions in quiz >>> ")
            try:
                question_num = int(question_amount)
                break
            except Exception:
                print("Error! Not a number!")
                continue
        for i in range(question_num):
            question_dict = cls.user_make_question(i)
            questions_dict.update(question_dict)

        whole_dict = {"quiz_name": quiz_name, "data": {"user": user, "question_dict": questions_dict}}

        return whole_dict
