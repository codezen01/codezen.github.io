const more = document.querySelector('.more');
const moreDetails = document.querySelector('.more-details');
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