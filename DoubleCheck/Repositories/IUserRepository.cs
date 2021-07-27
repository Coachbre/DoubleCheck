using System.Collections.Generic;
using DoubleCheck.Models;
// interface handles connection between server and client-side (calls methods written in Repository files)

namespace DoubleCheck.Repositories
{
    public interface IUserRepository
    {
        void Add(User user);
        User GetByFirebaseUserId(string firebaseUserId);

        //User GetByUserId(int id);

        //List<User> GetAll();

        //List<User> GetAllDeactivated();

        //void Update(User user); 

        // ^^^ will uncomment as methods fully are written and called on
    }
}