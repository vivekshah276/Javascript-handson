//update recipe
export function updateRecipe(){
    const id = prompt("Enter id");
    const recipe = recipes.find(r => r.id === id);
    if(recipe){
        recipe.name = prompt(`Enter a new recipe name ${recipe.name}`) || recipe.name;
        recipe.type = prompt(`Enter a new recipe name ${recipe.type}`) || recipe.type;
        recipe.description = prompt(`Enter a new recipe name ${recipe.description}`) || recipe.description;
        alert("Update successfully");
    }
    else{
        alert("Not Found");
    }
}

// export default function updateRecipe(){};