//variables
const cardContainer = document.getElementById("card-container");
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=ch`;

try {
  const getData = async (url) => {
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log(jsonData);
    createElement(jsonData.meals);
  };
  getData(url);
} catch (error) {
  console.log(error);
}

//create new element
function createElement(arrayOfData) {
  arrayOfData.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card", "card-side", "bg-white", "shadow-xl");
    div.innerHTML = `
        <figure><img class="" src="${element.strMealThumb}" alt="Movie"/></figure>
        <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>

            <div class="card-actions">
                <button class="btn">Details</button>
            </div>
        </div>
        `;
        cardContainer.appendChild(div)
    console.log(element);
    console.log(div);
  });
}

/* 
<div class="card card-side bg-base-100 shadow-xl">
                
              </div>

*/
