using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using DoubleCheck.Models;
using DoubleCheck.Utils;


namespace DoubleCheck.Repositories
{
    public class FoodItemRepository : BaseRepository, IFoodItemRepository
    {
        public FoodItemRepository(IConfiguration configuration) : base(configuration) { }
        public List<FoodItem> GetAll(int PantryListId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @" 
                                SELECT 
                                        FoodItem.id, 
                                        FoodItem.[name],
                                        FoodItem.quantity,
                                        FoodItem.notes,
                                        FoodItem.categoryId,
                                        FoodItem.pantryListId
                                FROM FoodItem 
                                        LEFT JOIN PantryList
                                        ON FoodItem.pantryListId = PantryList.id
                                        WHERE PantryListId = @PantryListId
                                        ORDER BY [name]";
                    //stretch goal: join category for name onto table

                    DbUtils.AddParameter(cmd, "@PantryListId", PantryListId);

                    var reader = cmd.ExecuteReader();

                    var foodList = new List<FoodItem>();

                    while (reader.Read())
                    {
                        foodList.Add(new FoodItem()
                        {

                            Id = DbUtils.GetInt(reader, "id"),
                            Name = DbUtils.GetString(reader, "name"),
                            Quantity = DbUtils.GetInt(reader, "quantity"),
                            Notes = DbUtils.GetString(reader, "notes"),
                            CategoryId = DbUtils.GetInt(reader, "categoryId"),
                            PantryListId = DbUtils.GetInt(reader, "pantryListId"),
                        });
                    }
                    reader.Close();
                    return foodList;
                }
            }
        }

        public FoodItem GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT FoodItem.id, FoodItem.[name], FoodItem.quantity, FoodItem.notes, FoodItem.categoryId, FoodItem.pantryListId
                                        FROM FoodItem
                                        WHERE FoodItem.id = @Id";
                    //aliases should NOT be used in join statements-
                    //using an alias (AS) renames the column to avoid duplicate column names between tables

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    FoodItem foodItem = null;
                    if (reader.Read())
                    {
                        foodItem = new FoodItem()
                        {
                            Id = id,
                            Name = DbUtils.GetString(reader, "Name"),
                            Quantity = DbUtils.GetInt(reader, "Quantity"),
                            Notes = DbUtils.GetString(reader, "Notes"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            PantryListId = DbUtils.GetInt(reader, "PantryListId")
                        };
                    }
                    reader.Close();
                    return foodItem;
                }
            }
        }

        public void Add(FoodItem foodItem)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                              INSERT INTO FoodItem 
                                ([name], quantity, notes, categoryId, pantryListId)
                              OUTPUT INSERTED.ID
                              VALUES 
                                (@name, @quantity, @notes, @categoryId, @pantryListId)";

                    DbUtils.AddParameter(cmd, "@name", foodItem.Name);
                    DbUtils.AddParameter(cmd, "@quantity", foodItem.Quantity);
                    DbUtils.AddParameter(cmd, "@notes", foodItem.Notes);
                    DbUtils.AddParameter(cmd, "@categoryId", foodItem.CategoryId);
                    DbUtils.AddParameter(cmd, "@pantryListId", foodItem.PantryListId);

                    foodItem.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {

                    cmd.CommandText = @"DELETE FROM FoodItem WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Update(FoodItem foodItem)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE FoodItem                       
                           SET [name] = @name,
                               quantity = @quantity,
                               notes = @notes,
                               categoryId = @categoryId,
                               pantryListId = @pantryListId
                    WHERE Id = @Id
                        ";

                    DbUtils.AddParameter(cmd, "@id", foodItem.Id);
                    DbUtils.AddParameter(cmd, "@name", foodItem.Name);
                    DbUtils.AddParameter(cmd, "@quantity", foodItem.Quantity);
                    DbUtils.AddParameter(cmd, "@notes", foodItem.Notes);
                    DbUtils.AddParameter(cmd, "@categoryId", foodItem.CategoryId);
                    DbUtils.AddParameter(cmd, "@pantryListId", foodItem.PantryListId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
