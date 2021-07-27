using System.Collections.Generic;
using DoubleCheck.Models;

namespace Tabloid.Repositories
{
    public interface IUserRepository
    {
        void Add(User user);
        User GetByFirebaseUserId(string firebaseUserId);

        User GetByUserId(int id);

        List<User> GetAll();

        List<User> GetAllDeactivated();

        void Update(User user);
    }
}