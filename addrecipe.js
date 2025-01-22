//Add Recipe
const recipes = [];
function addRecipe(){
    const id = prompt("Enter your id");
    const name = prompt("Enter your recipe name");
    const type = prompt("Enter your recipe type");
    const description = prompt("Enter your recipe description");
    recipes.push({id,name,type,description});
    alert("Recipe is added Successfully!");
}