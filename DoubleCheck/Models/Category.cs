﻿using System;
using System.ComponentModel.DataAnnotations;

namespace DoubleCheck.Repositories
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }
}
