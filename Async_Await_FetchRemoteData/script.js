// geocode.xyz site address calling 'seattle'     https://geocode.xyz/seattle?json=1

async function fetchCity() {
    const response = await fetch('https://geocode.xyz/seattle?json=1')
    const city = await response.json();
    return city;
}

fetchCity().then(city => {
    console.log(city.latt);
    console.log(city.longt);
})