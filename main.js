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


/* This is edited code adopted from BootstrapMade.com. */


(function () {"use strict"; /*all variables must be declared*/

              
  /* Easy selector helper function defines select */
  /* This function seems to indicate which elements have classes that have been selected. */
    
 const select = function (elements, all = false)
 {
    elements = elements.trim() /*trim white space from a string*/
    if (all) {
      return [...document.querySelectorAll(elements)]
    } else {
      return document.querySelector(elements)
    }
  }

  /* Easy event listener function defines the on function */
  /* This function seems to indicate which elements have classes that are activated. */
 
  const on = function (type, elements, listener, all = false) 
  {
    let selectElement = select (elements, all)
    if (selectElement) {
      if (all) {
        selectElement.forEach(eventAction => eventAction.addEventListener(type, listener)) /*parse an array*/
      } else {
        selectElement.addEventListener(type, listener)
      }
    }
  }


  
  /**
   * Mobile navigation toggle
   */
  on('click', '.mobileNavigationToggleButton', function(e) {
    select('body').classList.toggle('mobile-nav-active') /* give the body an attribute that the mobile navigation menu is showing */
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
    
    
    
  /**
   * Hide Menu Button - new
  */
   
  on('click', '.hideMenuArea', function(e) {
      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) /* if the mobile navigation menu is showing */{
        body.classList.remove('mobile-nav-active') /*stop showing the mobile navigation menu*/
        let navbarToggle = select('.mobileNavigationToggleButton') /* the button for toggling the navigation menu */
        navbarToggle.classList.toggle('bi-list') /* show three bars icon */
        navbarToggle.classList.toggle('bi-x') /* show the X icon*/
      }
  })              
              
/*toggle off the sliding navigation bar when user clicks outside of it*/
 /*in process*/
              
// Get the modal



  

})()

// Create cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Set cookie consent
function acceptCookieConsent(){
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("cookieNotice").style.display = "none";
}

let cookie_consent = getCookie("user_cookie_consent");
if(cookie_consent != ""){
    document.getElementById("cookieNotice").style.display = "block"; //change block to none when not testing
}else{
    document.getElementById("cookieNotice").style.display = "block";
}