// Load header
fetch('/header/index.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;

        // Load body after header
        return fetch('/HTML/paymentBody.html');
    })
    .then(res => res.text('/body/payment.html'))
    .then(data => {
        document.getElementById('body-placeholder').innerHTML = data;

        // Load footer after body
        return fetch('/header/footer.html');
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Error loading content:', err));
