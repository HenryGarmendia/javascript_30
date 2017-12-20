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

function number_with_commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// display function
function display_matches() {
    const match_array = find_matches(this.value, cities);
    const html = match_array.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const city_name =  place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const state_name =  place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${city_name}, ${state_name}</span>
                <span class="population">${number_with_commas(place.population)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html; 
};

const search_input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search_input.addEventListener('change', display_matches);
search_input.addEventListener('keyup', display_matches);