// interface handles connection between server and client-side (calls methods written in Repository files)
using System;
using System.Collections.Generic;
using DoubleCheck.Models;

namespace DoubleCheck.Repositories
{
    public interface IPantryListRepository
    {
        List<PantryList> GetAll();
        PantryList GetById(int id);
        PantryList GetAllPantriesFromUser(int currentUserId);
        void Delete(int id);
    }
}
