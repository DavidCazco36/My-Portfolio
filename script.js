let is_on = Boolean


document.getElementsByClassName('menu-icon')[0].addEventListener('click', function () {
   
    if (is_on === true) {
        document.getElementsByClassName('nav-bar')[0].style.display = 'none';
        document.getElementsByClassName('logo')[0].style.display = 'flex';
        document.getElementsByClassName('header-container')[0].style.justifyContent ='space-between';
        document.getElementsByClassName('logo')[0].style.display = 'flex';
        document.getElementsByClassName('burger-img')[0].src = 'media/Icon - Menu.png';
        is_on = false
        console.log (is_on)
    }

    else {
    document.getElementsByClassName('nav-bar')[0].style.display = 'flex';
    document.getElementsByClassName('logo')[0].style.display = 'none';
    document.getElementsByClassName('header-container')[0].style.justifyContent ='flex-end';
    document.getElementsByClassName('burger-img')[0].src =  'media/Icon - Cancel.png';
    is_on = true
    console.log (is_on)
    }
})

function close_button() {
    if (screen.width < 768) {
            document.getElementsByClassName('nav-bar')[0].style.display = 'none';
            document.getElementsByClassName('logo')[0].style.display = 'block';
            document.getElementsByClassName('burger-img')[0].src = 'media/Icon - Menu.png';
            document.getElementsByClassName('header-container')[0].style.justifyContent ='space-between';
            is_on = false
    }
}
      


