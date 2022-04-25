const submitBtn = document.querySelector(".Submit");
const cardContainer = document.querySelector(".card-container");
const rating = document.querySelector(".rating");
const li = document.querySelector(".pagination");
let value = "";
const ratingVal = (e) => {
  value = e.target.innerText;
};

const onSubmit = () => {
  let thankYouCard = `<div class="card-thankYou">
<img class="card-2" src="./images/illustration-thank-you.svg" alt="" />
<p class="rating">You selected ${value} out of 5</p>
<h1>Thank you!</h1>
<p class="tyMessage">
  We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!
</p>        
</div>`;
  cardContainer.innerHTML = thankYouCard;
};

submitBtn.addEventListener("click", onSubmit);
