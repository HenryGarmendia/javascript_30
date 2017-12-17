function play_sound (e) {
    // use a css attribute selector, switch single quote to Backtick to use ES6 template string
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key   = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    // check if no audio
    if (!audio) {return false;} // stop the function from running all together;
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function remove_transition(e){ 
    // console.log(e);
    // skip it if it's not a transform
    if (e.propertyName !== 'transform') {
        return false;
    }
    this.classList.remove('playing');
} // remove_transition END

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', remove_transition));

window.addEventListener('keydown', play_sound);