const more = document.querySelector('.more');
const moreDetails = document.querySelector('.more-details');
const cortx = document.querySelector('#project1');
const cortxDetails = document.querySelector('.cortx');
const welcomeMessage = document.querySelector('.welcome-message');

var toggle=true;
more.addEventListener('click', function() {
    if (toggle == true) {
        moreDetails.style.display = 'block';
        toggle = false;
    }

    else if (toggle == false) {
        moreDetails.style.display = 'none';
        toggle = true;
    }
});

cortx.addEventListener('click', function() {
    if (toggle == true) {
        cortxDetails.style.display = 'block';
        welcomeMessage.style.display = 'none';
        toggle = false;
    }

    else if (toggle == false) {
        cortxDetails.style.display = 'none';
        welcomeMessage.style.display = 'block';
        toggle = true;
    }
});
