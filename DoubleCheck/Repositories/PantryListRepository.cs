﻿using System;
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
                                        FROM PantryList ORDER BY id";

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
                                            PantryList.name 
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
                            Name = DbUtils.GetString(reader, "name")
                        };
                    }
                    reader.Close();

                    return pantryList;
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
