/* function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('http://httpstat.us/500')
    .catch(alert); // Error: 500 */



// the async / await version
async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)

    if (response.status == 200) {
        let json = await response.json(); // (3)
        return json;
    }

    throw new Error(response.status);
}

loadJson('http://httpstat.us/500')
    .catch(alert); // Error: 500 (4)