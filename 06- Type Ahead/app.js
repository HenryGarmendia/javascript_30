const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

// find function
function find_matches(words_to_match, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or states matches what was searched
        const regex = new RegExp(words_to_match, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
};

// display function
function display_matches() {
    console.log(this.value);
}

const search_input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search_input.addEventListener('change', display_matches);