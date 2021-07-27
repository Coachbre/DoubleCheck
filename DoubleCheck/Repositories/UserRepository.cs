using Microsoft.Extensions.Configuration;
using DoubleCheck.Models;
using DoubleCheck.Utils;


namespace DoubleCheck.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
        // will be removed when I finish all others ^^
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        public User GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT User.id, User.name, User.email, User.email, User.firebaseUserId
                          FROM User
                         WHERE firebaseUserId = @firebaseuserId";
 // **** MAY NEED LEFT JOIN ^
                    DbUtils.AddParameter(cmd, "@firebaseUserId", firebaseUserId);

                    User user = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        user = new User()
                        {
                            id = DbUtils.GetInt(reader, "Id"),
                            firebaseUserId = DbUtils.GetString(reader, "firebaseUserId"),
                            name = DbUtils.GetString(reader, "name"),
                            email = DbUtils.GetString(reader, "email"),
                        };
                    }
                    reader.Close();

                    return user;
                }
            }
        }

        public void Add(User user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO User (firebaseUserId, name, email)
                                        OUTPUT INSERTED.ID
                                        VALUES (@firebaseUserId, @name, @email)";
                    DbUtils.AddParameter(cmd, "@firebaseUserId", user.firebaseUserId);
                    DbUtils.AddParameter(cmd, "@name", user.name);
                    DbUtils.AddParameter(cmd, "@email", user.email);

                    user.id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }


}