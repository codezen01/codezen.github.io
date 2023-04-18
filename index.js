const more = document.querySelector('.more');
const moreDetails = document.querySelector('.more-details');
const cortx = document.querySelector('#project1');
const cortxDetails = document.querySelector('.cortx');
const welcomeMessage = document.querySelector('.welcome-message');
const flashBlade = document.querySelector('#project2');
const flashbladeDetails = document.querySelector('.flash-blade');
const echo = document.querySelector('#project3');
const echoDetails = document.querySelector('.echo');
const myLogo = document.querySelector('.logo');
var moreToggle = true;
var cortxToggle = true;
var echoToggle = true;
var flashbladeToggle = true;

myLogo.addEventListener('click', function() {
  window.location.href = 'index.html';
});

// Hide elements
function hideElements(elementIds) {
  for (var i = 0; i < elementIds.length; i++) {
    var element = elementIds[i];
    element.style.display = "none";
  }
}

// Event listeners for project details

more.addEventListener('click', function() {
    if (moreToggle) {
        moreDetails.style.display = 'block';
        moreToggle = false;
    }

    else if (!moreToggle) {
        moreDetails.style.display = 'none';
        moreToggle = true;
    }
});

cortx.addEventListener('click', function() {
    if (cortxToggle) {
        hideElements([flashbladeDetails, echoDetails, welcomeMessage]);
        flashbladeToggle = true;
        echoToggle =  true;
        cortxDetails.style.display = 'block';
        cortxToggle = false;
    }

    else if (!cortxToggle) {
        hideElements([flashbladeDetails, echoDetails, cortxDetails]);
        flashbladeToggle = true; 
        echoToggle =  true;      
        welcomeMessage.style.display = 'block';
        cortxToggle = true;
    }
});

flashBlade.addEventListener('click', function() {
    if (flashbladeToggle) {
        hideElements([cortxDetails, echoDetails, welcomeMessage]);
        cortxToggle = true;
        echoToggle = true;
        flashbladeDetails.style.display = 'block';
        flashbladeToggle = false;
    }

    else if (!flashbladeToggle) {
        hideElements([flashbladeDetails, echoDetails, cortxDetails]);
        cortxToggle = true; 
        echoToggle = true;
        welcomeMessage.style.display = 'block';
        flashbladeToggle = true;
    }
});

echo.addEventListener('click', function() {
    if (echoToggle) {
        hideElements([flashbladeDetails, cortxDetails, welcomeMessage]);
        flashbladeToggle = true;
        cortxToggle = true;
        echoDetails.style.display = 'block';
        echoToggle = false;
    }

    else if (!echoToggle) {
        hideElements([flashbladeDetails, echoDetails, cortxDetails]);
        flashbladeToggle = true; 
        cortxToggle = true;
        welcomeMessage.style.display = 'block';
        echoToggle = true;
    }
});
