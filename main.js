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