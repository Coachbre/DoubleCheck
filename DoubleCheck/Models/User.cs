using System.ComponentModel.DataAnnotations;
//models mirror the database and define each object (with properties pulled from table)
// easier to use uppercase first letters in column names (for future ref)

namespace DoubleCheck.Models
{
    public class User
    {
        public int Id { get; set; }
        //denotes the type (int) property name (id) and that it is NOT read-only

        [Required]
        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(255)]
        public string Email { get; set; }

    }
}
