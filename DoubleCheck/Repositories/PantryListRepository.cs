using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using DoubleCheck.Models;
using DoubleCheck.Utils;


namespace DoubleCheck.Repositories
{
    public class PantryListRepository : BaseRepository, IPantryListRepository
    {
        public PantryListRepository(IConfiguration configuration) : base(configuration) { }
        public List<PantryList> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @" SELECT 
                                        PantryList.id, 
                                        PantryList.name
                                        FROM PantryList";

                    var reader = cmd.ExecuteReader();
                    var pantries = new List<PantryList>();

                    while (reader.Read())
                    {
                        pantries.Add(new PantryList()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            Name = DbUtils.GetString(reader, "name")
                        });
                    }
                    reader.Close();
                    return pantries;
                }
            }
        }

        public PantryList GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT PantryList.id, 
                                            PantryList.name,
                                            PantryList.userId
                                            FROM PantryList
                                            WHERE PantryList.id = @Id";
                    //aliases should NOT be used in join statements-
                    //using an alias (AS) renames the column to avoid duplicate column names between tables

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    PantryList pantryList = null;
                    if (reader.Read())
                    {
                        pantryList = new PantryList()
                        {
                            Id = id,
                            Name = DbUtils.GetString(reader, "name"),
                            UserId = DbUtils.GetInt(reader, "userId")
                        };
                    }
                    reader.Close();

                    return pantryList;
                }
            }
        }

        public List<PantryList> GetByUser(string FirebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                SELECT 
                                        PantryList.id, 
                                        PantryList.[name],
                                        PantryList.UserId,
                                        [User].firebaseUserId
                                FROM PantryList
                                        LEFT JOIN [User]
                                        ON PantryList.UserId = [User].id
                                        WHERE firebaseUserId = @firebaseUserId";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", FirebaseUserId);

                    var reader = cmd.ExecuteReader();

                    var pantries = new List<PantryList>();

                    while (reader.Read())
                    {
                        pantries.Add(new PantryList()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            Name = DbUtils.GetString(reader, "name"),
                            UserId = DbUtils.GetInt(reader, "userId"),
                        });
                    }

                    reader.Close();

                    return pantries;
                }
            }
        }

        public void AddDefault(PantryList pantryList)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                              INSERT INTO PantryList 
                              ([name], userId)
                              OUTPUT INSERTED.ID
                              VALUES ('Kitchen', @userId)";

// name (kitchen) doesnt need an add parameter since its given a value within the sql command
                    DbUtils.AddParameter(cmd, "@userId", pantryList.UserId);

                    pantryList.Id = (int)cmd.ExecuteScalar();
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
                    cmd.CommandText = "DELETE FROM Pantry WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
