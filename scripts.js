document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var response = document.getElementById('response');
    response.textContent = 'Thank you, ' + name + '! Your message has been received.';
    

    document.getElementById('contact-form').reset();
});
