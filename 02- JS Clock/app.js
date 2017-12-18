const SECOND_HAND   = document.querySelector('.second-hand');
const MIN_HAND      = document.querySelector('.min-hand');
const HOUR_HAND     = document.querySelector('.hour-hand');

function set_date() {
    // get the date obj.
    const date = new Date();

    const seconds = date.getSeconds();
    const seconds_degrees = ((seconds / 60) * 360) + 90;

    const mins = date.getMinutes();
    const mins_degrees = (((360 / 60) * mins) + (seconds*(360/60)/60)) + 90;

    const hours = date.getHours();
    const hours_degrees = (((360 / 12) * hours) + (mins*(360/60)/12)) + 90;
    
    SECOND_HAND.style.transform = `rotate(${seconds_degrees}deg)`;
    MIN_HAND.style.transform = `rotate(${mins_degrees}deg)`;
    HOUR_HAND.style.transform = `rotate(${hours_degrees}deg)`;
} // set_date END

setInterval(set_date, 1000);