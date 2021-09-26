import './styles.css';
import imageOne from './imgone.jpg';

const menuElements = (function(){


    const mainContent = () => {
        const pizzaFactory = (name, price) => {
            return { name, price};
          };
          
          const pizzaOne = pizzaFactory('Neapolitan Pizza', '£9.99')
          const pizzaTwo = pizzaFactory('Pepperoni', '£9.99')
          const pizzaThree = pizzaFactory('Garlic', '£9.99')
          const pizzaFour = pizzaFactory('BBQ Chicken', '£9.99')
          let pizzaArray = [];
          pizzaArray.push(pizzaOne,pizzaTwo, pizzaThree, pizzaFour)
   
        let contentOne = document.querySelector('.contentOne');
        contentOne.textContent = '';
        let divcontainer = document.createElement('div');
        divcontainer.className = 'menugrid';
        
        pizzaArray.forEach(function(item){
            
            let card = document.createElement('div');
            card.classList.add('menuDiv');
            let title = document.createElement('h3');
            let price = document.createElement('h2');

            let pizzaName = item.name;
            let pizzaPrice = item.price;
            title.textContent = pizzaName;
            price.textContent = pizzaPrice;
            
            console.log(title.textContent);
            console.log(pizzaName, pizzaPrice)

            card.appendChild(title);
            card.appendChild(price);
            divcontainer.appendChild(card);

            contentOne.appendChild(divcontainer);
        })
    }
    return {mainContent}
})()

export {menuElements}
