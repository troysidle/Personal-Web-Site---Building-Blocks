
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

// Get the button that opens the modal
var button1 = document.getElementById("firstBook");
var button2 = document.getElementById("secondBook");

// Get the <span> element that closes the modal
var span1 = document.getElementById("firstBookModal").getElementsByClassName("selectClose") [0];
var span2 = document.getElementById("secondBookModal").getElementsByClassName("selectClose") [0];

// When the user clicks the button, open the modal 

button1.onclick = function() {
  firstModal.style.display = "block";
}

button2.onclick = function() {
  secondModal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  firstModal.style.display = "none";
}

span2.onclick = function() {
  secondModal.style.display = "none";
}

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