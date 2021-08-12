function getRandomNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random() * 1000);
        }, 500);
    });
}

async function asyncCall() {
    console.log('generating random number: ');
    const result = await getRandomNumber();
    console.log(result);

}

asyncCall();