// get element
const cardContent = document.querySelector(".rating-card");
const ratingContent = document.querySelector(".rating-state");
const result_card = document.querySelector(".result-card");
const submit_btn = document.querySelector(".submit-btn");
const ratings_numb = document.querySelectorAll(".rating-number");
const selection = document.querySelector(".selection");
let score = 0;



// selection.innerHTML = "2"

// to clear previous choices because you can only make one
function clearSelection(){
   ratings_numb.forEach((rating) => {
      rating.classList.remove("selected")
    });
}

ratingContent.addEventListener("click", (e) => {
    e.preventDefault();
    clearSelection();
    if(e.target.classList = "rating-number") {
      e.target.classList.add("selected");
      score = e.target.innerHTML;
      submit_btn.style.backgroundColor = "hsl(0, 0%, 100%)";
      submit_btn.style.color = "hsl(25, 97%, 53%)"; 
      selection.innerHTML = score;
   } 
 
 });

 submit_btn.addEventListener("click", showResult);

 function showResult(){
  cardContent.classList.add("card-visible");
  result_card.classList.remove("card-visible");
 }