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

        //void Update(User user); 

        // ^^^ will uncomment as methods fully are written and called on
        //dont run w/ build errors (runs off last successful build)
    }
}