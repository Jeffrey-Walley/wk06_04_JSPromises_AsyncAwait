const promiseA = new Promise((resolve, reject) => {
    let statusCode = 200; // complicated action that might take time

    if (statusCode == 200) {
        resolve(statusCode);
    } else {
        reject(statusCode) // if 'statusCode' is not equal to 200 then reject
    }

});


/* promiseA.then(
    (val) => console.log("Async logging has value: " + val),
    (err) => console.log("error: " + err));

console.log('This is the immediate log!'); */



// async keyword example
async function f() {
    return 1;
}

f().then(alert); // 1


// async/await example using fetch

/* let url = 'https://www.google.com';
let options = "GET";

async function getURL() {
    let response = await fetch(url);

    if (response.ok) {
        let json = await response.json();
    }
} */


/* let url = 'https://www.google.com';
let options = "GET";
let fetchResult = fetch(url, [options]); */

/* await fetch("https://javascript.info/article/promise-chaining/user.json")
    .then(async function (response) {
        return response.text();
})
    .then(function (text) {
        .alert(text);
        })  */

async function showAvatar() {
    // read JSON
    let response = await fetch(
        "https://javascript.info/article/promise-chaining/user.json"
    );
    let user = await response.json();

    //read github
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    //show avatar
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
}
showAvatar();