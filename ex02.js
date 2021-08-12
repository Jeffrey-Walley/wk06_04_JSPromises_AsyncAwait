/* async function wait() {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return 10;
}

function f() {
    // ...what should you write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
    let result = wait();
    console.log(result);

} */

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 2500));

    return 10;
}

function f() {
    // shows 10 after 1 second
    wait().then(result => alert(result));
}

f();