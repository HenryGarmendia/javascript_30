const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handle_update() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.name);
}

inputs.forEach(input => input.addEventListener('change', handle_update));
inputs.forEach(input => input.addEventListener('mousemove', handle_update));