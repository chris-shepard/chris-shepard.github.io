
//Adds Navigation Listeners
let nav = document.querySelector('#nav');
let navItems = nav.querySelectorAll(".nav-item");
navItems.forEach(el => {
    el.addEventListener('click', () => {
        navItems.forEach(el => {
            el.classList.remove('is-active');
        })
        el.classList.add('is-active')
    })
})

//Finds Current Route on Page Load and Updates Nav
const initializeNav = () => {
    let currentHash = window.location.hash;
    console.log(currentHash);
    if (currentHash === "") {
        document.getElementById('nav-home').classList.add('is-active');
    } else {
        let loadedRoute = currentHash.substr(1);
        document.getElementById(`nav-${loadedRoute}`).classList.add('is-active');
    }

}

initializeNav();
