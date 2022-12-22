//mobile menu display//

let is_on = Boolean

document.getElementsByClassName('menu-icon')[0].addEventListener('click', function () {
   
    if (is_on == true) {
        document.getElementsByClassName('nav-bar')[0].style.display = 'none';
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
            document.getElementsByClassName('logo')[0].style.display = 'none';
            document.getElementsByClassName('burger-img')[0].src = 'media/Icon - Menu.png';
            document.getElementsByClassName('header-container')[0].style.justifyContent ='space-between';
            is_on = false
    }
}

//popup window//
const card_info = {
    image: ["./media/Snapshoot Portfolio.png","./media/Snapshoot Portfolio.png","./media/Snapshoot Portfolio.png","./media/Snapshoot Portfolio.png","./media/Snapshoot Portfolio.png","./media/Snapshoot Portfolio.png","./media/Snapshoot Portfolio.png"],
    name: ["Profesional Art Printing Data More", "Data Dashboard Healthcare", "Website Protfolio", "Profesional Art Printing Data More", "Data Dashboard Healthcare", "Website Protfolio", "Multi-Post Stories"],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text."],
    live_link: ["https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html"],
    source_link: ["https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio"],
    technologies: [{
        tech_stack:["html", "bootstrap", "Ruby"],
        RB_tech_stack:["css", "html", "bootstrap", "ruby"]
    }]
    }
//Loop for repeat of card creation
for (let xy = 0; xy < 6; xy++){
    //creation step
    let cloned_clone = document.getElementsByClassName("card_clone")[0].cloneNode(true)
    document.getElementsByClassName("wrapper")[0].appendChild(cloned_clone)
    //card filling info with card_info array
        document.getElementsByClassName("each-project-container")[xy].style.backgroundImage = "url(" + card_info.image[xy] + ")"
        document.getElementsByClassName("project-title")[xy].innerHTML = card_info.name[xy]
        document.getElementsByClassName("project-description")[xy].innerHTML = card_info.description[xy]
        document.getElementsByClassName("card_btns1")[xy].innerHTML = card_info.technologies[0].tech_stack[0]
        document.getElementsByClassName("card_btns2")[xy].innerHTML = card_info.technologies[0].tech_stack[1]
        document.getElementsByClassName("card_btns3")[xy].innerHTML = card_info.technologies[0].tech_stack[2]
        //add event listener to each card's button for the popup and fill popup info
        document.getElementsByClassName('each-project-container')[xy].addEventListener('click', function popup_manager () {
            document.getElementById("popup-container").style.display = "flex"
            document.getElementById("p-button-container-text").innerHTML = card_info.description[xy]
            document.getElementById("img-project").src = card_info.image[2]
            document.getElementById("popup-title").innerHTML = card_info.name[xy]
            document.getElementById("live-link").href = card_info.live_link[xy]
            document.getElementById("source-link").href = card_info.source_link[xy]
            document.getElementById('popup-tag1').innerHTML = card_info.technologies[0].tech_stack[0]
            document.getElementById('popup-tag2').innerHTML = card_info.technologies[0].tech_stack[1]
            document.getElementById('popup-tag3').innerHTML = card_info.technologies[0].tech_stack[2]
            document.getElementById('popup-tag4').style.display = "none"
        })
}
//x icon on popup container to close
document.getElementById("cancel-icon").addEventListener('click', function() {
    document.getElementById("popup-container").style.display = "none"
})
document.getElementsByClassName('button1')[0].addEventListener('click', function() {
    document.getElementById("popup-container").style.display = "flex"
    document.getElementById("p-button-container-text").innerHTML = card_info.description[6]
    document.getElementById("img-project").src = card_info.image[6]
    document.getElementById("popup-title").innerHTML = card_info.name[6]
    document.getElementById("live-link").href = card_info.live_link[0]
    document.getElementById("source-link").href = card_info.source_link[0]
    console.log (card_info.technologies[0].RB_tech_stack)
    document.getElementById('popup-tag1').innerHTML = card_info.technologies[0].RB_tech_stack[0]
    document.getElementById('popup-tag2').innerHTML = card_info.technologies[0].RB_tech_stack[1]
    document.getElementById('popup-tag3').innerHTML = card_info.technologies[0].RB_tech_stack[2]
    document.getElementById('popup-tag4').style.display = "list-item"
    document.getElementById('popup-tag4').innerHTML = card_info.technologies[0].RB_tech_stack[3]
})

//form validation//

let form_error
document.getElementsByClassName("form_email")[0].addEventListener('blur', function() {
    let lowercased = document.getElementsByClassName("form_email")[0].value.toLowerCase()
    if (document.getElementsByClassName("form_email")[0].value != lowercased) {
        document.getElementById('form_email_error').innerHTML = ""
        form_error = true
    }
    else {
        document.getElementById('form_email_error').innerHTML = ""
        form_error = false
    }
})
document.getElementById('form').addEventListener('submit', function(q) {
    q.preventDefault()
    if (form_error != true) {
        document.getElementById("form_submit").submit();
    }
})
document.getElementById('form_button').addEventListener('click', function() {
    if (form_error === true) {
    document.getElementById('form_email_error').innerHTML = "Use lower caps for email input"
    }
})