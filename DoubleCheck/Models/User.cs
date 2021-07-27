using System.ComponentModel.DataAnnotations;
//models mirror the databaseand define each object (with properties pulled from table)

namespace DoubleCheck.Models
{
    public class User
    {
        public int id { get; set; }
        //denotes the type (int) property name (id) and that it is NOT read-only

        [Required]
        [StringLength(28, MinimumLength = 28)]
        public string firebaseUserId { get; set; }

        [Required]
        [MaxLength(50)]
        public string name { get; set; }

        [Required]
        [MaxLength(255)]
        public string email { get; set; }
    }
}
