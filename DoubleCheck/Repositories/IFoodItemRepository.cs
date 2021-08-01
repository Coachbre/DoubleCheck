using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoubleCheck.Models;

namespace DoubleCheck.Repositories
{
    public interface IFoodItemRepository
    {
        FoodItem GetById(int id);
        List<FoodItem> GetAll(int PantryListId);
        // gets all food items within a pantry
        void Add(FoodItem foodItem);
        void Delete(int id);
        void Update(FoodItem foodItem);
        //void used for functions that dont create/request objects from database
    }
}
