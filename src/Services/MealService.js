import requests from './httpService';
 

class MealService {
    getAllMeal()  {
        return requests.get('/categories.php');
    }
    getRandomMeal(key){
        return requests.get(`/filter.php?i=${key}`)
    }

   
}  
export default new MealService();