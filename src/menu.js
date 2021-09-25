import './styles.css';
import imageOne from './imgone.jpg';

const menuElements = (function(){

    const content = document.querySelector('.content')
    const headerContainer =  document.createElement('div');
    headerContainer.className = 'header';

    const mainContent = () => {

        let content = document.querySelector('.contentOne')
        content.textContent = '';
        let container = document.querySelector('div');


        for (let i=0 ; i< 8; i++){
        let menuDiv = document.createElement('div');
            content.appendChild(menuDiv) ;
            [i]
        }
        
        container.appendChild(menuDiv);
        menuDiv.className = 'menuItem'
        
  console.log('test')
    }
    return {mainContent}
})()

export {menuElements}