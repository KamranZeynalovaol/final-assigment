document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    let position = 0;
    const interval = setInterval(() => {
        if (position >= 300) {
            clearInterval(interval);
        } else {
            position += 5;
            box.style.left = position + 'px';
        }
    }, 50);
});
