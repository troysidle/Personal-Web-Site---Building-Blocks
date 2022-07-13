
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
