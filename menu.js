const mobileimg = document.querySelector('#mobile-img')
let i = 1
$('.menu-mobile-img').click(function () {
    ++i
    if (i % 2 == 0) {
        mobileimg.setAttribute('src', './images/icon-close-menu.svg')
       $('.menu-mobile').show('fast')

    } else {
        mobileimg.setAttribute('src', './images/icon-menu.svg')
       $('.menu-mobile').hide('fast')
        

    }

})  