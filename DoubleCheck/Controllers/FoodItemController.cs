using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using DoubleCheck.Models;
using DoubleCheck.Repositories;
using System.Security.Claims;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DoubleCheck.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FoodItemController : ControllerBase
    {
        private readonly IFoodItemRepository _foodItemRepository;

        public FoodItemController(IFoodItemRepository foodItemRepository)
        {
            _foodItemRepository = foodItemRepository;
        }


        [HttpGet("GetByPantry/{PantryListId}")]
        public IActionResult GetByPantry(int PantryListId)
        {
            var foodItems = _foodItemRepository.GetAll(PantryListId);
            if (foodItems == null)
            {
                return NotFound();
            }
            return Ok(foodItems);
        }

        // POST api/<FoodItemController>
        [HttpPost]
        public IActionResult AddFoodItem (FoodItem foodItem)
        {
            _foodItemRepository.Add(foodItem);
            return CreatedAtAction("GetByPantry", new { PantryListId = foodItem.Id }, foodItem);
            // CreatedAtAction (hover for definition)- Go to GetByPantry and pass in PantryListId as foodItem.id
        }


        //        // GET api/<FoodItemController>/5
        //        [HttpGet("{id}")]
        //        public string Get(int id)
        //        {
        //            return "value";
        //        }


        //        // PUT api/<FoodItemController>/5
        //        [HttpPut("{id}")]
        //        public void Put(int id, [FromBody] string value)
        //        {
        //        }

        //        // DELETE api/<FoodItemController>/5
        //        [HttpDelete("{id}")]
        //        public void Delete(int id)
        //        {
        //        }
        //    }
    }
}
