// document.getElementById("hi").addEventListener("mouseover", (self) => {
//     self.textContent = "About";
// })


document.querySelector(".heroTextTyping").addEventListener("animationend", () => {
    
    setTimeout(() => {    

    let navigation = document.querySelector(".heroNavigation");
    navigation.style.color = "grey";
    
    let headerText = document.querySelector(".heroNavigation").style.display = "flex";

    let aboutNav = document.getElementById("about");
    let projectsNav = document.getElementById("projects");
    let contactNav = document.getElementById("contact");

    aboutNav.id = "aboutDone";
    projectsNav.id = "projectsDone";
    contactNav.id = "contactDone";

    }, 200)
});


document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#profilePic').offsetTop;
  
     if (isVisible) {
       document.getElementById('profilePic').classList.add('gelatine');
     }
  });

  document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#linkedinLogo').offsetTop;
  
     if (isVisible) {
       document.getElementById('linkedinLogo').classList.add('gelatine');
     }
  });

