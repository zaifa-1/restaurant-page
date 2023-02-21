import './style.css';
import { createDiv, addImg } from './structure';
import { homeClicked } from './home';
import { menuClicked } from './menu';
import { contactClicked } from './contact';
import catImg from '../assets/cat-logo.png';
let pageContainer= createDiv('container')
function pageHeader(){
    let header= createDiv('header');
    let heading= document.createElement('h1');
    heading.classList.add('Title')

    addImg(catImg,'logo',header);

    heading.textContent='AI Cat Cafe';
    header.appendChild(heading)
    return header

}

function navBar(){
    let navContainer= createDiv('pages')

    const homeBtn= createDiv('section', 'Home')
    navContainer.appendChild(homeBtn)

    homeBtn.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return
        setActiveBtn(homeBtn)
        let homePage= homeClicked()
        pageContainer.innerHTML=''
        pageContainer.appendChild(homePage)
    })


    const menuBtn= createDiv('section', 'Menu');
    navContainer.appendChild(menuBtn);

    menuBtn.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active')) return
        setActiveBtn(menuBtn)
        let menuPage= menuClicked()
        pageContainer.innerHTML=''
        pageContainer.appendChild(menuPage)
    })



    const contactBtn= createDiv('section', 'Contact');
    navContainer.appendChild(contactBtn);
    contactBtn.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')) return
        setActiveBtn(contactBtn)
        let contactPage= contactClicked()
        pageContainer.innerHTML=''
        pageContainer.appendChild(contactPage)
    })

    return navContainer
}

function setActiveBtn(activeBtn){
    let activeBtns= document.querySelectorAll('.section')
    activeBtn.classList.add('active')
    activeBtns.forEach((button)=>{
        if(button!==this){
            button.classList.remove('active')
        }
    })
}


function addGitHubLink() {
    const footer = createDiv('footer');
    const gitHubLink = document.createElement('a');
    gitHubLink.href = 'https://github.com/zaifa-1/restaurant-page';
    gitHubLink.target = '_blank'; // open the link in a new tab
    const gitHubLogo = document.createElement('img');
    gitHubLogo.classList.add('footer-logo')
    gitHubLogo.src = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png';
    gitHubLogo.alt = 'GitHub';
    gitHubLink.appendChild(gitHubLogo);
    footer.appendChild(gitHubLink);
    return footer
  }



function launchWebpage(){
    pageContainer.appendChild(homeClicked())
    document.body.appendChild(pageHeader())
    document.body.appendChild(navBar())
    document.body.appendChild(pageContainer)
    document.body.appendChild(addGitHubLink())
}

launchWebpage()