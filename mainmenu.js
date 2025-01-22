const adds = require('./addrecipe');
const updates = require('./updaterecipe');
const deletes = require('./deleterecipe');
const views = require('./viewrecipe');

//Main Menu's
function mainMenu(){

    let choice;
    do{
        choice = prompt("Choose any option: \n 1: To add recipe \n 2: To Update recipe \n 3: To delete recipe \n 4: To View all recipe \n 5: Exit");
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





