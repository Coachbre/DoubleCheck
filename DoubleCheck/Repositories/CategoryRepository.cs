using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using DoubleCheck.Models;
using DoubleCheck.Utils;


namespace DoubleCheck.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }
        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                //open connection
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @" SELECT 
                                        Category.id, 
                                        Category.name
                                        FROM Category ORDER BY name ASC";
                    // command sql query: list categories in alphabetical order

                    var reader = cmd.ExecuteReader();
                    //sending sql query to database
                    var categories = new List<Category>();
                    //create new, empty list

                    while (reader.Read())
                    {
                        categories.Add(new Category()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            Name = DbUtils.GetString(reader, "name")
                        });
                    }
                    //whiile reader is active: create category objects based on database and add to empty list
                    reader.Close();
                    return categories;
                    // close reader and return list of newly created category objects
                }
            }
        }
    }
}
