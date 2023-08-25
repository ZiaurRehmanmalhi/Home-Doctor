const toggleBtn = document.querySelector('.menu-button');
toggleBtn.onclick = function(){
    navLink = document.querySelector(".dropdown-menu");
    navLink.classList.toggle("show-menu")
}

