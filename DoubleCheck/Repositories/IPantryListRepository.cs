// interface handles connection between server and client-side (calls methods written in Repository files)
using System;
using System.Collections.Generic;
using DoubleCheck.Models;

namespace DoubleCheck.Repositories
{
    public interface IPantryListRepository
    {
        List<PantryList> GetAll();
        List<PantryList> GetByUser(string FirebaseId);
        PantryList GetById(int id);
        void Delete(int id);
        void Add(PantryList pantryList);
    }
}
