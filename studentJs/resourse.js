const recipesContainer = document.getElementById('recipes');


let featureRecipes = [];
let allRecipes = [];
fetch('https://dummyjson.com/recipes')
  .then(response => response.json())
  .then(data => { 
    allRecipes.push(data.recipes)
    // allRecipes = data.recipes;
    // featureRecipes = data.recipes;
    displayRecipes(allRecipes);
    // displayFeature(featureRecipes)
    console.log(allRecipes)
  });


function displayRecipes(recipes) {
    recipesContainer.innerHTML = '';

    recipes.forEach(recipe => {
      const section = document.createElement('section');
      section.classList.add('bg-white', 'px-4', 'py-8', 'antialiased', 'dark:bg-gray-900', 'md:py-16');
      section.innerHTML = `
      <div class="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
    <div class="lg:col-span-5 lg:mt-0">
      <a href="#">
        <img class="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full" src="${recipe.image }" alt="peripherals" />
      </a>
    </div>
    <div class="me-auto place-self-center lg:col-span-7">
      <h1 class="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
      ${recipe.name}
      </h1>
      <p class="mb-6 text-gray-500 dark:text-gray-400">${recipe.instructions}.</p>
      <a href="#" class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"> Pre-order now </a>
    </div>
  </div>
      
      `

    
    

      recipesContainer.appendChild(section);
    })};



 

function showMoreDetails(recipe) {
    alert(`Details for ${recipe.name}:
    Ingredients: ${recipe.ingredients}
    Instructions: ${recipe.instructions}
    Serving: ${recipe.servings}
    Calories per Serving: ${recipe.caloriesPerServing}`);
}

function getStars(rating) {
  const roundedRating = Math.round(rating); 
  const stars = '🔥'.repeat(roundedRating);
  return stars;
}