fetch('/header/HomePage.html') // Adjust the path to your actual footer.html file
    .then(response => response.text())
    .then(data => document.getElementById('Header-placeholder').innerHTML = data)
    .catch(error => console.error('Error loading footer:', error));
    
