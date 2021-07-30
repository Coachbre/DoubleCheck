using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DoubleCheck.Models
{
    public class PantryList
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int UserId { get; set; }

    }
}
