
// function to set a given theme/color-scheme
        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        // Immediately invoked function to set the theme on initial load
        (function () 
            {
                setTheme('monochromeGreen');
            }
        )();


window.onscroll = function() {navigationWidth()};

function navigationWidth() {
  if (document.documentElement.scrollTop > 50) {
    
    document.getElementById("sideNavigation").style.width = "180px";  } else {
        document.getElementById("sideNavigation").style.width = "215px";
  }
}

// for window pup up in Publications

// Get the modal
var firstModal = document.getElementById("firstBookModal");
var secondModal = document.getElementById("secondBookModal");
var thirdModal = document.getElementById("thirdBookModal");
var fourthModal = document.getElementById("fourthBookModal");
var fifthModal = document.getElementById("fifthBookModal");
var sixthModal = document.getElementById("sixthBookModal");

// Get the button that opens the modal
var button1 = document.getElementById("firstBook");
var button2 = document.getElementById("secondBook");
var button3 = document.getElementById("thirdBook");
var button4 = document.getElementById("fourthBook");
var button5 = document.getElementById("fifthBook");
var button6 = document.getElementById("sixthBook");

// Get the <span> element that closes the modal
var span1 = document.getElementById("firstBookModal").getElementsByClassName("selectClose") [0];
var span2 = document.getElementById("secondBookModal").getElementsByClassName("selectClose") [0];
var span3 = document.getElementById("thirdBookModal").getElementsByClassName("selectClose") [0];
var span4 = document.getElementById("fourthBookModal").getElementsByClassName("selectClose") [0];
var span5 = document.getElementById("fifthBookModal").getElementsByClassName("selectClose") [0];
var span6 = document.getElementById("sixthBookModal").getElementsByClassName("selectClose") [0];

// When the user clicks the button, open the modal 

button1.onclick = function() {
  firstModal.style.display = "block";
}

button2.onclick = function() {
  secondModal.style.display = "block";
}

button3.onclick = function() {
  thirdModal.style.display = "block";
}

button4.onclick = function() {
  fourthModal.style.display = "block";
    
}

button5.onclick = function() {
  fifthModal.style.display = "block";
}

button6.onclick = function() {
  sixthModal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  firstModal.style.display = "none";
}

span2.onclick = function() {
  secondModal.style.display = "none";
}

span3.onclick = function() {
  thirdModal.style.display = "none";
}

span4.onclick = function() {
  fourthModal.style.display = "none";
}

span5.onclick = function() {
  fifthModal.style.display = "none";
}

span6.onclick = function() {
  sixthModal.style.display = "none";
}



// Convert this to a switch statement?


window.addEventListener("click", function(event) {
  if (event.target == firstModal) {
    firstModal.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target == secondModal) {
    secondModal.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target == thirdModal) {
    thirdModal.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target == fourthModal) {
    fourthModal.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target == fifthModal) {
    fifthModal.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target == sixthModal) {
    sixthModal.style.display = "none";
  }
});