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

        // Get 'all' food items, grouped by pantry list Id
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


        // GET api/<FoodItemController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var foodItem = _foodItemRepository.GetById(id);
            if (foodItem == null)
            {
                return NotFound();
            }
            return Ok(foodItem);
        }


        // POST api/<FoodItemController>
        [HttpPost("Add")]
        public IActionResult AddFoodItem (FoodItem foodItem)
        {
            _foodItemRepository.Add(foodItem);
            return CreatedAtAction("GetByPantry", new { PantryListId = foodItem.Id }, foodItem);
            // CreatedAtAction (hover for definition)- Go to GetByPantry and pass in PantryListId as foodItem.id
        }


        // DELETE api/<FoodItemController>/5
        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            _foodItemRepository.Delete(id);
            return NoContent();
        }


        // PUT api/<FoodItemController>/5
        [HttpPut("Edit/{id}")]
        public IActionResult Put(int id, FoodItem foodItem)
        {
            if (id!= foodItem.Id)
            {
                return BadRequest();
            }
            _foodItemRepository.Update(foodItem);
            return NoContent();
        }


    }
}
