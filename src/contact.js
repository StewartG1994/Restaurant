import './styles.css';
import imageOne from './imgone.jpg';

const contactElements = (function(){

    const content = document.querySelector('.content')
    const headerContainer =  document.createElement('div');
    headerContainer.className = 'header';

    const mainContent = () => {

        let content = document.querySelector('.contentOne')
        let newdiv = document.createElement('div');
        content.textContent = '';
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        p.textContent = `Name: Stewart Little`
        p2.textContent = 'Address: 42 Wallaby Way Sydney'
        p3.textContent = 'Phone: 13535 543569'
        newdiv.className ='address';


       newdiv.appendChild(p);
       newdiv.appendChild(p2);
       newdiv.appendChild(p3);
       content.appendChild(newdiv)
           
     
        
  console.log('test')
    }




    return {mainContent}
})()

export {contactElements}