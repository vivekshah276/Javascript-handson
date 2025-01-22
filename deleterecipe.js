import { recipes } from './data.js';
//Delete Recipe
export function deleteRecipe(){
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

// export default function deleteRecipe(){};