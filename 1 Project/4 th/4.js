const drumStick = document.getElementById('drum-stick');

document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {  // Space bar to hit
        drumStick.style.transform = 'rotate(-30deg)';
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === ' ') {
        drumStick.style.transform = 'rotate(0deg)';
    }
});
