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

//update recipe
function updateRecipe(){
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



//Delete Recipe
function deleteRecipe(){
    const id = prompt("Choose your id");
    const index = recipes.findIndex(r =>r.id === id);
    if(index!== -1){
        recipes.splice(index,1);
        
            alert("Deleted Successfully");
    }
        else{
            alert("Not found");
        }
    

}

//View Recipe
function viewRecipes(){
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


//Main Menu's
function mainMenu(){
    let choice;
    do{
        choice = prompt("Choose any option");
        switch(choice){
            case "1":
                addRecipe();
                break;
            case "2":
                updateRecipe();
                break;
            case "3":
                deleteRecipe();
                break;
            case "4":
                viewRecipes();
                break;
            case "5":
                alert("Exiting");
                break;
            default:
                alert("Invalid Choice");

        }
        
    }
    while(choice!=="5")
}
mainMenu();





