const second_hand = document.querySelector('.second-hand');
const min_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand');

function set_date() {
    // get the date obj.
    const date = new Date();

    const seconds = date.getSeconds();
    const seconds_degrees = ((seconds / 60) * 360) + 90;
    const mins = date.getMinutes();
    const mins_degrees = ((mins / 60) * 360) + 90;
    const hour = date.getHours();
    const hours_degrees = ((hour / 60) * 360) + 90;

    // second_hand.style.transform = 'rotate(' + seconds_degrees + 'deg' + ')';
    second_hand.style.transform = `rotate(${seconds_degrees}deg)`;
    min_hand.style.transform = `rotate(${mins_degrees}deg)`;
    console.log(mins);
}

setInterval(set_date, 1000);