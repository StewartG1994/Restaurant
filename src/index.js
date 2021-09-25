import './styles.css';
import imageOne from './imgone.jpg';
import { menuElements}  from './menu.js';
import {contactElements} from './contact.js';
import {homeElements} from './home.js';


console.log('test')

const elements = (function(){

    const content = document.querySelector('.content')
    const headerContainer =  document.createElement('div');
    headerContainer.className = 'header';

    const header = () =>{
      
       let header = document.createElement('h1');
       header.textContent = 'Comida Loco';
       headerContainer.appendChild(header)
       content.appendChild(headerContainer)

    }

    const navBar = () =>{
        let navul = document.createElement('div');
        let home =document.createElement('div');
        let menu =document.createElement('div');
        let contact =document.createElement('div');
        home.className = 'home';
        menu.className = 'menu';
        contact.className = 'contact'
        menu.textContent = 'Menu';
        home.textContent = 'Home';
        contact.textContent = 'Contact';
        navul.className = 'navone';
        navul.appendChild(home)
        navul.appendChild(menu)
        navul.appendChild(contact)

        content.appendChild(navul)
    }


    const mainContent = () => {

        const contentDiv = document.createElement('div')
        const text = document.createElement('p')
        text.textContent = 'We are an independent Italian restaurant established in 1987. We take pride in serving pizzas made with our own authentic dough, made fresh daily, and in sourcing the best local produce wherever possible. In addition to pizza, we have an extensive menu of traditional Italian dishes and wines.We aim to make every visit to our restaurant an occasion, with a warm, welcoming ambience and many long-serving, efficient and friendly staff to serve you delicious food at reasonable prices. We also provide a take-away service for those times when you want to enjoy our food in the comfort of your own home'
        contentDiv.className ='contentOne';
        contentDiv.appendChild(text)
        content.appendChild(contentDiv)
    }


    const footer = () =>{
        const footerDiv = document.createElement('div');
        const divP = document.createElement('p');
        divP.textContent = 'Created by Stew for The Odin Project';
        footerDiv.className ='footer';
        footerDiv.appendChild(divP);
        content.appendChild(footerDiv);
    }

    const callAllHome = () =>{
        header()
        navBar()
        mainContent()
        footer()
    }

    const menuclick = () =>{
        let menuBtn = document.querySelector('.menu');
        let homeBtn = document.querySelector('.home');
        let contactBtn = document.querySelector('.contact');
        console.log(homeBtn)

       homeBtn.addEventListener('click', () =>{
          homeElements.mainContent()
       })
        
       menuBtn.addEventListener('click', () =>{
        menuElements.mainContent();
    })

       contactBtn.addEventListener('click', () =>{
       contactElements.mainContent()
    })
    }


    return {callAllHome, menuclick}
})()

elements.callAllHome()
elements.menuclick()