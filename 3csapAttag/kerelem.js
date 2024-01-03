var requestForm = document.getElementById('request-form');
var requestInput = document.getElementById('request-input');
var requests = document.getElementById('requests');

requestForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var request = document.createElement('div');
    request.className = 'request';
    request.textContent = requestInput.value;
    requests.appendChild(request);

    requestInput.value = '';
});
