window.onload = ()=>{
    setTimeout(()=>{
        document.getElementById('loading').style.transform = "translateY(-1000vh)"
        setTimeout(()=>{
            document.getElementById('main').style.display = ''
            document.getElementById('loading').style.display = 'none'
        },500)
        
    },1500)
    
}

      
window.onscroll = function(ev) {
    if (window.scrollY > 0) {
        document.querySelector('#navbar').style.setProperty("background-color", "white", "important");
        document.querySelector('#navbarCollapse').style.setProperty("background-color", "white", "important");
        for(i=0;i<=6;i++){
            document.querySelectorAll('.nav-link')[i].classList.add('navLinkColor')
            document.querySelectorAll('.nav-link')[i].classList.remove('navLinkColorWhite')
        }
        document.querySelector('.navbar').style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px'
        document.querySelector('.logo h4').style.color = 'black'
        document.querySelectorAll('.nav-link')[1].classList.remove('active')
        document.querySelectorAll('.nav-link')[2].classList.remove('active')
        document.querySelectorAll('.nav-link')[3].classList.remove('active')
        document.querySelectorAll('.nav-link')[4].classList.remove('active')
        document.querySelectorAll('.nav-link')[5].classList.remove('active')
        document.querySelectorAll('.nav-link')[6].classList.remove('active')
        document.querySelectorAll('.nav-link')[0].classList.add('active')
    }
    else{
        document.querySelector('#navbar').style.setProperty("background-color", "transparent", "important");
        document.querySelector('#navbarCollapse').style.setProperty("background-color", "transparent", "important");
        for(i=0;i<=6;i++){
            document.querySelectorAll('.nav-link')[i].classList.remove('navLinkColor')
            document.querySelectorAll('.nav-link')[i].classList.add('navLinkColorWhite')
        }
        document.querySelector('.logo h4').style.color = 'white'
        document.querySelector('.navbar').style.boxShadow = ''
    }
    if (window.scrollY > document.getElementById('aboutUs').clientHeight-100) {
        document.querySelectorAll('.nav-link')[0].classList.remove('active')
        document.querySelectorAll('.nav-link')[2].classList.remove('active')
        document.querySelectorAll('.nav-link')[3].classList.remove('active')
        document.querySelectorAll('.nav-link')[4].classList.remove('active')
        document.querySelectorAll('.nav-link')[5].classList.remove('active')
        document.querySelectorAll('.nav-link')[6].classList.remove('active')
        document.querySelectorAll('.nav-link')[1].classList.add('active')
    }
    if (window.scrollY > document.getElementById('ourServices').clientHeight+700) {
        document.querySelectorAll('.nav-link')[1].classList.remove('active')
        document.querySelectorAll('.nav-link')[0].classList.remove('active')
        document.querySelectorAll('.nav-link')[3].classList.remove('active')
        document.querySelectorAll('.nav-link')[4].classList.remove('active')
        document.querySelectorAll('.nav-link')[5].classList.remove('active')
        document.querySelectorAll('.nav-link')[6].classList.remove('active')
        document.querySelectorAll('.nav-link')[2].classList.add('active')
    }
    if (window.scrollY > document.getElementById('ourPortfolio').clientHeight+1700) {
        document.querySelectorAll('.nav-link')[1].classList.remove('active')
        document.querySelectorAll('.nav-link')[2].classList.remove('active')
        document.querySelectorAll('.nav-link')[0].classList.remove('active')
        document.querySelectorAll('.nav-link')[4].classList.remove('active')
        document.querySelectorAll('.nav-link')[5].classList.remove('active')
        document.querySelectorAll('.nav-link')[6].classList.remove('active')
        document.querySelectorAll('.nav-link')[3].classList.add('active')
    }
    if (window.scrollY > document.getElementById('ourTeam').clientHeight+4500) {
        document.querySelectorAll('.nav-link')[0].classList.remove('active')
        document.querySelectorAll('.nav-link')[1].classList.remove('active')
        document.querySelectorAll('.nav-link')[2].classList.remove('active')
        document.querySelectorAll('.nav-link')[3].classList.remove('active')
        document.querySelectorAll('.nav-link')[5].classList.remove('active')
        document.querySelectorAll('.nav-link')[6].classList.remove('active')
        document.querySelectorAll('.nav-link')[4].classList.add('active')
    }
    if (window.scrollY > document.getElementById('blogPosts').clientHeight+6000) {
        document.querySelectorAll('.nav-link')[0].classList.remove('active')
        document.querySelectorAll('.nav-link')[1].classList.remove('active')
        document.querySelectorAll('.nav-link')[2].classList.remove('active')
        document.querySelectorAll('.nav-link')[3].classList.remove('active')
        document.querySelectorAll('.nav-link')[4].classList.remove('active')
        document.querySelectorAll('.nav-link')[6].classList.remove('active')
        document.querySelectorAll('.nav-link')[5].classList.add('active')
    }
    if (window.scrollY > document.getElementById('contactUs').clientHeight+7000) {
        document.querySelectorAll('.nav-link')[0].classList.remove('active')
        document.querySelectorAll('.nav-link')[1].classList.remove('active')
        document.querySelectorAll('.nav-link')[2].classList.remove('active')
        document.querySelectorAll('.nav-link')[3].classList.remove('active')
        document.querySelectorAll('.nav-link')[4].classList.remove('active')
        document.querySelectorAll('.nav-link')[5].classList.remove('active')
        document.querySelectorAll('.nav-link')[6].classList.add('active')
    }
};



document.getElementById('carouselBtn1').addEventListener('mouseover',()=>{
    document.querySelector('.arrowDown1').style.display = 'inline'
})
document.getElementById('carouselBtn1').addEventListener('mouseleave',()=>{
    document.querySelector('.arrowDown1').style.display = ''
})
document.getElementById('carouselBtn2').addEventListener('mouseover',()=>{
    document.querySelector('.arrowDown2').style.display = 'inline'
})
document.getElementById('carouselBtn2').addEventListener('mouseleave',()=>{
    document.querySelector('.arrowDown2').style.display = ''
})
document.getElementById('carouselBtn3').addEventListener('mouseover',()=>{
    document.querySelector('.arrowDown3').style.display = 'inline'
})
document.getElementById('carouselBtn3').addEventListener('mouseleave',()=>{
    document.querySelector('.arrowDown3').style.display = ''
})

document.getElementById('ourPortfolioBtn').addEventListener('mouseover',()=>{
    document.querySelector('.image').style.display = 'inline'
})
document.getElementById('ourPortfolioBtn').addEventListener('mouseleave',()=>{
    document.querySelector('.image').style.display = ''
})

document.getElementById('about1').addEventListener('click',()=>{
    document.getElementById('aboutContent').innerHTML = 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    document.getElementById('about1').setAttribute('class','activeLink')
    document.getElementById('about2').setAttribute('class','')
    document.getElementById('about3').setAttribute('class','')
})
document.getElementById('about2').addEventListener('click',()=>{
    document.getElementById('aboutContent').innerHTML = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    document.getElementById('about1').setAttribute('class','')
    document.getElementById('about2').setAttribute('class','activeLink')
    document.getElementById('about3').setAttribute('class','')
})
document.getElementById('about3').addEventListener('click',()=>{
    document.getElementById('aboutContent').innerHTML = 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    document.getElementById('about1').setAttribute('class','')
    document.getElementById('about2').setAttribute('class','')
    document.getElementById('about3').setAttribute('class','activeLink')
})


document.querySelectorAll('#socialIconsContainer .socialIcons')[0].addEventListener('mouseover',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[0].setAttribute('class','fa-brands fa-twitter fa-2x socialIconsHover')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[0].addEventListener('mouseleave',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[0].setAttribute('class','fa-brands fa-twitter fa-2x socialIconsHoverReverse')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[1].addEventListener('mouseover',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[1].setAttribute('class','fa-brands fa-facebook-f fa-2x socialIconsHover')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[1].addEventListener('mouseleave',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[1].setAttribute('class','fa-brands fa-facebook-f fa-2x socialIconsHoverReverse')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[2].addEventListener('mouseover',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[2].setAttribute('class','fa-brands fa-skype fa-2x socialIconsHover')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[2].addEventListener('mouseleave',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[2].setAttribute('class','fa-brands fa-skype fa-2x socialIconsHoverReverse')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[3].addEventListener('mouseover',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[3].setAttribute('class','fa-brands fa-instagram fa-2x socialIconsHover')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[3].addEventListener('mouseleave',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[3].setAttribute('class','fa-brands fa-instagram fa-2x socialIconsHoverReverse')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[4].addEventListener('mouseover',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[4].setAttribute('class','fa-brands fa-linkedin-in fa-2x socialIconsHover')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[4].addEventListener('mouseleave',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[4].setAttribute('class','fa-brands fa-linkedin-in fa-2x socialIconsHoverReverse')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[5].addEventListener('mouseover',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[5].setAttribute('class','fa-brands fa-youtube fa-2x socialIconsHover')
})
document.querySelectorAll('#socialIconsContainer .socialIcons')[5].addEventListener('mouseleave',()=>{
    document.querySelectorAll('#socialIconsContainer .socialIcons i')[5].setAttribute('class','fa-brands fa-youtube fa-2x socialIconsHoverReverse')
})
   

document.getElementById('imageBtn').addEventListener('click',()=>{
    document.getElementById('image1').style.display = 'none'
})