//variables
const cardContainer = document.getElementById("card-container");
const showMoreBtn = document.getElementById("show-more")
const serchField = document.getElementById("search-field");
const searchBtn = document.getElementById('search-btn');
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=ch`
const getSearchData = () =>{
 if(serchField.value){
  const value = serchField.value;
  url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  return url;
 }else{
  serchField.style.border = "2px solid red"
 }
}


try {
  const getData = async (url) => {
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log(jsonData);
    createElement(jsonData.meals.slice(0,6));
    let click = true;
    showMoreBtn.addEventListener('click', function(){
      if(click){
        createElement(jsonData.meals);
        click = false;
        showMoreBtn.innerText = "Show Less"
      }else{
        cardContainer.innerHTML = "";
        createElement(jsonData.meals.slice(0,6));
        click = true;
      }
      
    })
  };
  getData(url);
  searchBtn.addEventListener('click', function(){
    ;
    cardContainer.innerHTML = ''
    getData(getSearchData());
  })
} catch (error) {
  console.log(error);
}

//create new element
function createElement(arrayOfData) {
  arrayOfData.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card", "card-side", "bg-white", "shadow-xl");
    div.innerHTML = `
        <figure><img class="h-[100%]" src="${element.strMealThumb}" alt="Movie"/></figure>
        <div class="card-body w-[75%] md:w-[85%]">
            <h2 class="card-title">${element.strMeal}</h2>
            <p>${element.strInstructions.substring(0,300)}...</p>

            <div class="card-actions">
                <button class="btn">Details</button>
            </div>
        </div>
        `;
        cardContainer.appendChild(div)
  });
}

