const fetch = require('node-fetch')

async function test () {
    return await fetch("http://127.0.0.1:5000/checker").then(
        response => {
            return response.json();
        }
    ).then(jsonResponse => {
        if (jsonResponse['quizzes']) {
            console.log(jsonResponse['quizzes'])
        }
        throw new Error('request failed');
    }).catch(error => console.log(error))
}

test();