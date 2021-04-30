const fetch = require('node-fetch')



//
const ServerConnection = {
    url: "https://trivia-game-cyber.herokuapp.com/",



    async getQuiz(quiz, jwt_token) {
        try {
            const response = await fetch(`${ServerConnection.url}quiz/${quiz}`, {headers: {"content-type": "application/json", "connection": "keep-alive", }});
            if (response.ok) {
                const jsonResponse =  await response.json();
                return Object.values(jsonResponse);
            }
            throw new Error("Request failed!");
        }
        catch(error) {
            document.write(error);
        }
    },

    async postQuiz(quiz, user, questionObj) {
        try {
            const data = JSON.stringify({"user": user, "question_dict": questionObj})
            const headers = {"content-type": "application/json", "connection": "keep-alive"}
            const response = await fetch(`${ServerConnection.url}quiz/${quiz}`, {method:"POST", headers: headers,body:data})
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse['message'];
            }
            throw new Error('Request failed!');
        }
        catch (error) {
            document.write(error)
        }
    },

    async deleteQuiz(quiz) {
        try {
            const headers = {"content-type": "application/json", "connection": "keep-alive"};
            const response = await fetch(`${ServerConnection.url}quiz/${quiz}`, {method: "DELETE", headers: headers})
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse['message'];
            }
            throw new Error('Request failed!');
        }
        catch (error) {
            document.write(error);
        }

    },

    async putQuiz(quiz, addOrRemove, question, user) {
        try {
            const headers = {"content-type": "application/json", "connection": "keep-alive"};
            if (addOrRemove === "add_question") {
                const data = JSON.stringify({add_or_remove: "True", "user": user, "question_added": question})
                const response = await fetch(`${ServerConnection.url}quiz/${quiz}`, {method: "PUT", headers: headers, body: data})
                if (response.ok) {
                    const jsonResponse = await response.json();
                    return jsonResponse['message'];


            }
            else if (addOrRemove === "remove_question") {
                    const data = JSON.stringify({add_or_remove: "True", "user": user, "question_removed": question});
                    const response = await fetch(`${ServerConnection.url}quiz/${quiz}`, {method:"PUT", headers: headers, body: data});
                    if (response.ok) {
                        const jsonResponse = await response.json();
                        return jsonResponse['message'];
                    }
            }
        }
            throw new Error('Request failed!');
        }
        catch (error) {
            document.write(error)
        }
    },

     async getQuizzes() {
        try {
             const headers = {"content-type": "application/json", "connection": "keep-alive"};
             const response = await fetch(`${ServerConnection.url}quizzes`, {headers: headers});
             if (response.ok) {
                 const jsonResponse = await response.json();
                 return jsonResponse['quizzes'];
             }
             throw new Error('Request failed!');
         }
        catch (error) {
            document.write(error)
    }},

     async register(user, password) {
        try {
            const headers = {"content-type": "application/json", "connection": "keep-alive"}
            const data = JSON.stringify({"password": password});
            const response = await fetch(`${ServerConnection.url}user/${user}`, {method: "POST", headers: headers, body: data})
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse['message'];
            }
            throw new Error("Request failed!")
        }

        catch (error) {
            document.write(error)
        }

    },

    async auth(user, password) {
        try {
            const headers = {"content-type": "application/json", "connection": "keep-alive"};
            const data = JSON.stringify({"username": user, "password": password});
            const response = await fetch(`${ServerConnection.url}auth`, {method: "POST", headers: headers, body: data})
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse['access_token'];
            }
            throw new Error("Request failed!");
        }
        catch (error) {
            document.write(error)
        }
    },

    async updatePercentage(quizName, percentage, user) {
        try {
            const headers = {"content-type": "application/json", "connection": "keep-alive"};
            const data = JSON.stringify({"percentage": percentage, "quiz_name": quizName});
            const response = await fetch(`${ServerConnection.url}user/${user}`, {method: "PUT", body: data, headers: headers})
            if (response.ok) {
                let jsonResponse = await response.json();
                return jsonResponse['message'];
            }
            throw new Error("Request failed!")
        }
        catch (error) {
            document.write(error)
        }
    },

    async getStats(username) {
        try {
            const headers = {"content-type": "application/json", "connection": "keep-alive"};
            const response = await fetch(`${ServerConnection.url}user/${username}`, {headers: headers});
            if (response.ok) {
                return await response.json();
            }
            throw new Error("Request failed!");
        }
        catch (error) {
            document.write(error)
        }
    }

}


export default ServerConnection;