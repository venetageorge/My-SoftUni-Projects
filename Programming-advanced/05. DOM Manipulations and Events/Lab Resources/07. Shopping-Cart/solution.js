function solve() {
   let shopingCard = document.getElementsByClassName('shopping-card')[0];
   let result = document.getElementsByTagName('textarea')[0];

   let products = [];
   let totalPrice = 0;
   let ckeckoutDone = false; 

   shopingCard.addEventListener('click', function (event) {
      if (event.target.nodeName !== 'BUTTON') {
         return; 
      }

      if (ckeckoutDone) {
         return; 
      }

      let btn = event.target;
      if (Array.from(btn.classList).indexOf('add-product') >= 0) {

         let productElement = event.target.parentElement.parentElement;
         let name = productElement.querySelectorAll('.product-title')[0].textContent;
         let price = productElement.querySelectorAll('.product-line-price')[0].textContent;
   
         result.textContent += `Added ${name} for ${price} to the cart.\n`;
   
         if (products.indexOf(name) < 0) {
            products.push(name);
         }
         totalPrice += Number(price);
   
         console.log(products);
         console.log(totalPrice.toFixed(2));
      } else if (Array.from(btn.classList).indexOf('checkout') >= 0) {
         let list = products.join(', ');
         result.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
         ckeckoutDone = true; 
      }

   });
}