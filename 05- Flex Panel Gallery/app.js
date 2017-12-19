// grab all panels 
const panels = document.querySelectorAll('.panel');
// console.log(panels);

function toggle_open() {
    this.classList.toggle('open');
};

function toggle_active(e) {
    // console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
};

panels.forEach(panel => panel.addEventListener('click', toggle_open));
panels.forEach(panel => panel.addEventListener('transitionend', toggle_active));