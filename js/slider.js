document.addEventListener('DOMContentLoaded', function() {
    // Before & After Slider
    const slider = document.querySelector('.ba-slider-container');
    if (!slider) return;

    let isDragging = false;
    const resize = slider.querySelector('.resize');
    const handle = slider.querySelector('.handle');
    const sliderWidth = slider.offsetWidth;

    // Set initial position
    resize.style.width = '50%';
    handle.style.left = '50%';

    // Mouse events
    handle.addEventListener('mousedown', function(e) {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        let posX = e.clientX - slider.getBoundingClientRect().left;
        posX = Math.max(0, Math.min(posX, sliderWidth));
        
        const percent = (posX / sliderWidth) * 100;
        resize.style.width = percent + '%';
        handle.style.left = percent + '%';
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // Touch events for mobile
    handle.addEventListener('touchstart', function(e) {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        
        let posX = e.touches[0].clientX - slider.getBoundingClientRect().left;
        posX = Math.max(0, Math.min(posX, sliderWidth));
        
        const percent = (posX / sliderWidth) * 100;
        resize.style.width = percent + '%';
        handle.style.left = percent + '%';
    });

    document.addEventListener('touchend', function() {
        isDragging = false;
    });
});