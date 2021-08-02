using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using DoubleCheck.Models;
using DoubleCheck.Repositories;
using System.Security.Claims;

namespace DoubleCheck.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PantryListController : ControllerBase
    {
        private readonly IPantryListRepository _pantryListRepository;
        private readonly IUserRepository _userRepository;
        public PantryListController(IPantryListRepository pantryListRepository, IUserRepository userRepository)
        {
            _pantryListRepository = pantryListRepository;
            _userRepository = userRepository;
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

        [HttpGet("Pantries")]
        public IActionResult GetPantriesByUserId()
        {
            var user = GetCurrentUser();
            if (user == null)
            {
                return Unauthorized();
            }
            else
            {
                var pantries = _pantryListRepository.GetByUser(user.FirebaseUserId);
                return Ok(pantries);
            }
        }

    

        private User GetCurrentUser()
        //private methods are used as 'helpers' ^^^
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            if (firebaseUserId != null)
            {
                return _userRepository.GetByFirebaseUserId(firebaseUserId);
            }
            else
            {
                return null;
            }
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
