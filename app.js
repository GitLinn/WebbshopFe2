

// Getting the class "products-center" and putting it in a varible
const productsDOM = document.querySelector('.products-center');

// This method adds an event to the button with id "prodBtn". LoadJSON is the method that fetches 
// the data from the website fakestoreapi. The method then calls the function render which loops trought the data
//and adds the products properties with html and adds it into the right place with productsDOM varible.
  document.getElementById("prodBtn").addEventListener("click", loadJSON);


  function loadJSON() {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => render(data))
  }
  function render(data) {
    console.log(data);
    let output = "";
    data.forEach(data=> {
      output += `
      <article class="product">
      <article class="img-container">
          <div class="img-container">
              <img src="${data.image}" alt="product" class="product-img"/> 
       <a href="order.html?productId=${data.id}"">
           <i class="fas fa-shopping-cart"> Lägg till i varukorgen </i>
       </a>
          </div>
          <h3>${data.title}</h3>
          <h4>kr ${data.price}</h4>
      </article>
    </article>
      `;
  });
    productsDOM.innerHTML = output;
  //   window.scrollTo(300, 500);	
   }

 // This commented code was ment to be a for a more komplex website but is not used in the project.

//   document.getElementById("bag-btn").addEventListener("click", openLink);
//   function openLink() {
//     window.open("order.html");
//   }

//   function buyProduct(){
    
//   // Sätter in dom element i variabler
//   const myForm = document.querySelector('#my-form');
//   myForm.addEventListener('submit', onSubmit);
//   function onSubmit(e) {
//     e.preventDefault();
    
//     if(nameInput.value === '' || emailInput.value === '') {
//       // felhantering
//       msg.classList.add('error');
//       msg.innerHTML = 'Alla fält måste fyllas i';
  
//       // ta bort fel medelande efter 3 sekunder
//       setTimeout(() => msg.remove(), 3000);
//     } else {
//       // gör en ny lista för användaren
//       const li = document.createElement('li');
  
//       // lägger till text node med input
//       li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
  
//       // lägg till på listan
//       userList.appendChild(li);
  
//       // rensa input
//       nameInput.value = '';
//       emailInput.value = '';
//     }
//   }
// }
