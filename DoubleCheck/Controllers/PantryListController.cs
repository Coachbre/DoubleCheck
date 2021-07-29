using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using DoubleCheck.Models;
using DoubleCheck.Repositories;



namespace DoubleCheck.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PantryListController : ControllerBase
    {
        private readonly IPantryListRepository _pantryListRepository;
        public PantryListController(IPantryListRepository pantryListRepository)
        {
            _pantryListRepository = pantryListRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_pantryListRepository.GetAll());
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var pantryList = _pantryListRepository.GetById(id);
            if (pantryList == null)
            {
                return NotFound();
            }
            return Ok(pantryList);
        }

        // POST api/<PantryListController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PantryListController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PantryListController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _pantryListRepository.Delete(id);
            return NoContent();
        }
    }
}
