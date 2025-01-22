//View Recipe
export function viewRecipes(){
    if(recipes.length === 0){
        alert("Recipes is empty");
    }
    else{
        let RecipeList = "Recipes\n";
        recipes.forEach(recipe =>{
            RecipeList+= `ID : ${recipe.id} Name : ${recipe.name} type : ${recipe.type} Description : ${recipe.description} \n`;
        });
        alert(RecipeList);
    }
}

// export default function viewRecipes(){};