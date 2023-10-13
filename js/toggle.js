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


<script>
    document.querySelector('.cta-button').addEventListener('click', function () {
        // Replace the '#' with the URL of your scheduling page
        window.location.href = 'https://your-scheduling-page.com';
    });
</script>
