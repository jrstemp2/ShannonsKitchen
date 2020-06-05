using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShannonsCountryOven.Models
{
    public interface IDAL
    {
        public int AddRecipe(Recipe recipe);
        public IEnumerable<Recipe> GetAllRecipes();
        public Recipe GetRecipeByID(int id);
        public int UpdateRecipeByID(Recipe recipe);
        public int DeleteRecipeByID(int id);
        
        public int AddUser(User user);
        public int DeleteUser(int id);
        public User GetUserByID(int id);
        public User GetUserByUserName(string username);
        public IEnumerable<User> GetAllUsers();

    }
}
