const qual = document.querySelector('.qual');
const qualDetails = document.querySelector('.qualifications');
const cortx = document.querySelector('#project1');
const cortxDetails = document.querySelector('.cortx');
const about = document.querySelector('.about');
const flashBlade = document.querySelector('#project2');
const flashbladeDetails = document.querySelector('.flash-blade');
const echo = document.querySelector('#project3');
const echoDetails = document.querySelector('.echo');
const myLogo = document.querySelector('.logo');
var qualToggle = true;
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

qual.addEventListener('click', function() {
    if (qualToggle) {
        qualDetails.style.display = 'block';
        qualToggle = false;
    }

    else if (!qualToggle) {
        qualDetails.style.display = 'none';
        qualToggle = true;
    }
});

cortx.addEventListener('click', function() {
    if (cortxToggle) {
        hideElements([flashbladeDetails, echoDetails, about]);
        flashbladeToggle = true;
        echoToggle =  true;
        cortxDetails.style.display = 'block';
        cortxToggle = false;
    }

    else if (!cortxToggle) {
        hideElements([flashbladeDetails, echoDetails, cortxDetails]);
        flashbladeToggle = true; 
        echoToggle =  true;      
        about.style.display = 'block';
        cortxToggle = true;
    }
});

flashBlade.addEventListener('click', function() {
    if (flashbladeToggle) {
        hideElements([cortxDetails, echoDetails, about]);
        cortxToggle = true;
        echoToggle = true;
        flashbladeDetails.style.display = 'block';
        flashbladeToggle = false;
    }

    else if (!flashbladeToggle) {
        hideElements([flashbladeDetails, echoDetails, cortxDetails]);
        cortxToggle = true; 
        echoToggle = true;
        about.style.display = 'block';
        flashbladeToggle = true;
    }
});

echo.addEventListener('click', function() {
    if (echoToggle) {
        hideElements([flashbladeDetails, cortxDetails, about]);
        flashbladeToggle = true;
        cortxToggle = true;
        echoDetails.style.display = 'block';
        echoToggle = false;
    }

    else if (!echoToggle) {
        hideElements([flashbladeDetails, echoDetails, cortxDetails]);
        flashbladeToggle = true; 
        cortxToggle = true;
        about.style.display = 'block';
        echoToggle = true;
    }
});
