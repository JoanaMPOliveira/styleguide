document.addEventListener('DOMContentLoaded', function() {
    console.log("Styleguide js running!");

    var injectionPoint = document.getElementById('buttons-template-injection-point')

    var xhr = new XMLHttpRequest();
    xhr.onload= function() {
        injectionPoint.innerHTML = this.response;
    }

    xhr.open('GET', 'components/buttons.html', true);
    xhr.onreadystatechange = 'components/buttons.html';
    xhr.send()
}, false)