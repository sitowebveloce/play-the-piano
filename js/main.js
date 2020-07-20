// Add window event listener on press key
window.addEventListener('keydown', e => {
    console.log(e)
        // Select 
    if (e.keyCode === 81) {
        const audioA = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Start from begin
        audioA.currentTime = 0;
        // Play
        audioA.play()
    }
    if (e.keyCode === 87) {
        const audioA = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Start from begin
        audioA.currentTime = 0;
        // Play
        audioA.play()
    }
    if (e.keyCode === 69) {
        const audioA = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Start from begin
        audioA.currentTime = 0;
        // Play
        audioA.play()
    }
    if (e.keyCode === 82) {
        const audioA = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Start from begin
        audioA.currentTime = 0;
        // Play
        audioA.play()
    }
    if (e.keyCode === 84) {
        const audioA = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Start from begin
        audioA.currentTime = 0;
        // Play
        audioA.play()
    }
    if (e.keyCode === 89) {
        const audioA = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Start from begin
        audioA.currentTime = 0;
        // Play
        audioA.play()
    }
    if (e.keyCode === 85) {
        const audioA = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Start from begin
        audioA.currentTime = 0;
        // Play
        audioA.play()
    }
    if (e.keyCode === 73) {
        const audioA = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Start from begin
        audioA.currentTime = 0;
        // Play
        audioA.play()
    }
    if (e.keyCode === 79) {
        const audioA = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // Start from begin
        audioA.currentTime = 0;
        // Play
        audioA.play()
    }

});

// Select all Buttons
let buttons = document.querySelectorAll('button');
// console.log(buttons)
// Add button event listener on click play the sound effect
buttons.forEach(b => {
    b.addEventListener('click', e => {
        console.log(e.target.attributes[0].value)
        if (e.target.attributes[0].value === '79') {
            const audioA = document.querySelector(`audio[data-key="${e.target.attributes[0].value}"]`);
            // Start from begin
            audioA.currentTime = 0;
            // Play
            audioA.play()
        }
        if (e.target.attributes[0].value === '81') {
            const audioA = document.querySelector(`audio[data-key="${e.target.attributes[0].value}"]`);
            // Start from begin
            audioA.currentTime = 0;
            // Play
            audioA.play()
        }
        if (e.target.attributes[0].value === '87') {
            const audioA = document.querySelector(`audio[data-key="${e.target.attributes[0].value}"]`);
            // Start from begin
            audioA.currentTime = 0;
            // Play
            audioA.play()
        }
        if (e.target.attributes[0].value === '69') {
            const audioA = document.querySelector(`audio[data-key="${e.target.attributes[0].value}"]`);
            // Start from begin
            audioA.currentTime = 0;
            // Play
            audioA.play()
        }
        if (e.target.attributes[0].value === '82') {
            const audioA = document.querySelector(`audio[data-key="${e.target.attributes[0].value}"]`);
            // Start from begin
            audioA.currentTime = 0;
            // Play
            audioA.play()
        }
        if (e.target.attributes[0].value === '84') {
            const audioA = document.querySelector(`audio[data-key="${e.target.attributes[0].value}"]`);
            // Start from begin
            audioA.currentTime = 0;
            // Play
            audioA.play()
        }
        if (e.target.attributes[0].value === '89') {
            const audioA = document.querySelector(`audio[data-key="${e.target.attributes[0].value}"]`);
            // Start from begin
            audioA.currentTime = 0;
            // Play
            audioA.play()
        }
        if (e.target.attributes[0].value === '85') {
            const audioA = document.querySelector(`audio[data-key="${e.target.attributes[0].value}"]`);
            // Start from begin
            audioA.currentTime = 0;
            // Play
            audioA.play()
        }
        if (e.target.attributes[0].value === '73') {
            const audioA = document.querySelector(`audio[data-key="${e.target.attributes[0].value}"]`);
            // Start from begin
            audioA.currentTime = 0;
            // Play
            audioA.play()
        }
    })
})