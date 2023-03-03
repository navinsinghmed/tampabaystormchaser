async function getUsers() {
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res);
}


async function createUser() {
    const res = await axios.post('https://reqres.in/api/users', {username:'Wally the Walrus', email: "navinsinghmed@gmail.com", age: 35});
    console.log(res);
}

getUsers();
createUser();

// https://hackorsnoozev3.docs.apiary.io/#introduction/authentication

async function signUp(username, password, name) {
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { name, username, password}});
    console.log(res);
}

signUp("BigWalrus", '123454321', "Wally Walrus");
