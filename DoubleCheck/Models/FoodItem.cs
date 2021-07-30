using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
// table columns must be capitalized

namespace DoubleCheck.Models
{
    public class FoodItem
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public string Notes { get; set; }
        [Required]
        public int PantryListId { get; set; }
        [Required]
        public int CategoryId { get; set; }


    }
}