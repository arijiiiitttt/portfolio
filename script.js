document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.querySelector(".logo-container");
    const logoList = document.getElementById("logoList");
    const clone = logoList.cloneNode(true);
    clone.style.left = `${logoList.offsetWidth}px`;
    logoContainer.appendChild(clone);

    let scrollSpeed = 2; // Adjust the scroll speed
    let logoWidth = logoList.offsetWidth;
    let animationRunning = true; // Flag to control animation state

    function scrollLogos() {
        if (animationRunning) { // Only scroll if animation is running
            logoList.style.left = `${parseFloat(getComputedStyle(logoList).left) - scrollSpeed}px`;
            clone.style.left = `${parseFloat(getComputedStyle(clone).left) - scrollSpeed}px`;

            // Check if either list has reached the end
            if (parseFloat(getComputedStyle(logoList).left) <= -logoWidth) {
                logoList.style.left = `${logoWidth}px`;
            }
            if (parseFloat(getComputedStyle(clone).left) <= -logoWidth) {
                clone.style.left = `${logoWidth}px`;
            }

            requestAnimationFrame(scrollLogos);
        }
    }

    // Pause/Resume animation on mouse hover
    logoContainer.querySelectorAll("img").forEach(img => {
        img.addEventListener("mouseover", () => {
            animationRunning = false;
        });
        img.addEventListener("mouseout", () => {
            animationRunning = true;
            scrollLogos(); // Restart animation
        });
    });

    scrollLogos();
});



const clickSound = document.getElementById("clickSound");

document.addEventListener('DOMContentLoaded', function() {
    const allButtons = document.querySelectorAll("button"); // Selecting all buttonsss 

    allButtons.forEach(button => {
        button.addEventListener("click", function() {
            clickSound.play();
        });
    });
});




