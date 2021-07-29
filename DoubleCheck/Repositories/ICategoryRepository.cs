using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoubleCheck.Repositories
{
    public interface ICategoryRepository
        //allows interface to be accessible
    {
        List<CategoryRepository> GetAll();
        //Category GetById(int id);
    }
}
