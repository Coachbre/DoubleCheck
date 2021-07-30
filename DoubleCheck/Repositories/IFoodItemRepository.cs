using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoubleCheck.Models;

namespace DoubleCheck.Repositories
{
    public interface IFoodItemRepository
    {
        List<FoodItem> GetAll(int UserId);
        // goes through pantryList table to access corresponding userId and filter
    }
}
