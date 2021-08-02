using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using DoubleCheck.Models;
using DoubleCheck.Repositories;
using System.Security.Claims;

namespace DoubleCheck.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IPantryListRepository _pantryListRepository;
        public UserController(IUserRepository userRepository, IPantryListRepository pantryListRepository)
        {
            _userRepository = userRepository;
            _pantryListRepository = pantryListRepository;
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var user = _userRepository.GetByFirebaseUserId(firebaseUserId);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            var user = _userRepository.GetByFirebaseUserId(firebaseUserId);
            if (user == null)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpPost]
        public IActionResult Register(User user)
        {
            _userRepository.Add(user);

            //PantryList pantryList = new PantryList() { Id = user.Id };
            //_pantryListRepository.AddDefault(pantryList);

            return 
                CreatedAtAction(
                nameof(GetByFirebaseUserId), new { firebaseUserId = user.FirebaseUserId }, user);

        


        }
    }
}
