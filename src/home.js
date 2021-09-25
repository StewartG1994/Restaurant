import './styles.css';
import imageOne from './imgone.jpg';

const homeElements = (function(){

    const content = document.querySelector('.content')
    const headerContainer =  document.createElement('div');
    headerContainer.className = 'header';

    const mainContent = () => {

        let content = document.querySelector('.contentOne')
        content.textContent = '';
        content.textContent = 'We are an independent Italian restaurant established in 1987. We take pride in serving pizzas made with our own authentic dough, made fresh daily, and in sourcing the best local produce wherever possible. In addition to pizza, we have an extensive menu of traditional Italian dishes and wines.We aim to make every visit to our restaurant an occasion, with a warm, welcoming ambience and many long-serving, efficient and friendly staff to serve you delicious food at reasonable prices. We also provide a take-away service for those times when you want to enjoy our food in the comfort of your own home'
           
     
        
  console.log('Htest')
    }




    return {mainContent}
})()

export {homeElements}