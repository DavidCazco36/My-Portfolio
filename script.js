let is_on = Boolean


document.getElementsByClassName('menu-icon')[0].addEventListener('click', function () {
   
    if (is_on === true) {
        document.getElementsByClassName('nav-bar')[0].style.display = 'none'
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
        is_on = false
        console.log (is_on)
    }

    else {
    document.getElementsByClassName('nav-bar')[0].style.display = 'flex'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    is_on = true
    console.log (is_on)
    }
})

function close_button() {
    if (screen.width < 768) {
            console.log('test')
            document.getElementsByClassName('nav-bar')[0].style.display = 'none'
            document.getElementsByTagName('body')[0].style.overflow = 'scroll'
            is_on = false
    }
}
      


