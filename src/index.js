import './styles.css';
import imageOne from './imgone.jpg';


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
        menu.textContent = 'Menu';
        home.textContent = 'Home';
        contact.textContent = 'Contact';
        navul.className = 'navone';
        navul.appendChild(home)
        navul.appendChild(menu)
        navul.appendChild(contact)


        content.appendChild(navul)
    }




    return {header, navBar}
})()

elements.header()
elements.navBar()