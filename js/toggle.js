// JavaScript to toggle service content
function toggleContent(button) {
    var serviceCard = button.parentElement;
    serviceCard.classList.toggle("active");
}

// Attach click event listeners to the toggle buttons
var toggleButtons = document.querySelectorAll('.service-toggle');
toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        toggleContent(button);
    });
});
