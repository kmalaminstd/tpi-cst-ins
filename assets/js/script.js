const tabBtn = document.querySelectorAll('.home-tab .home-tab-nav ul li')
const tabCnt = document.querySelectorAll('.home-tab-content .achievement-content')

for(let i = 0; i < tabBtn.length; i++){
    tabBtn[i].addEventListener('click', () => {

        
        for(let k = 0; k < tabBtn.length; k++){
            tabBtn[k].classList.remove('active')
        }
        tabBtn[i].classList.add('active')

        for(let j = 0; j < tabCnt.length; j++){
            tabCnt[j].classList.remove('achievement-content-active')
        }
        tabCnt[i].classList.add('achievement-content-active')

        
    })
}

// nav toggle function

const navToggleBtn = document.querySelector('.navbar .nav-toggle-btn p')
const navMenu = document.querySelector('.navbar ul')

navToggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('navbar-ul-active')
})