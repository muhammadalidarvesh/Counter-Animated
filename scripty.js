function startCounter(target, duration) {
    let start = 0;
    const increment = target / duration;
    const countElement = document.getElementById('count');

    function updateCount() {
        if (start < target) {
            start += increment;
            countElement.textContent = Math.floor(start);
            requestAnimationFrame(updateCount);
        } else {
            countElement.textContent = target;
        }
    }

    updateCount();
}

startCounter(5000, 1); // Change the target and duration as needed
