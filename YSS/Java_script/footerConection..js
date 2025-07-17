
// JavaScript to fetch and load the footer.html into the placeholder
fetch('/header/footer.html') // Adjust the path to your actual footer.html file
    .then(response => response.text())
    .then(data => document.getElementById('footer-placeholder').innerHTML = data)
    .catch(error => console.error('Error loading footer:', error));
