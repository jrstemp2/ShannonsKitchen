using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace ShannonsCountryOven.Models
{
    public class DAL : IDAL
    {
        private readonly string connString;

        public DAL(IConfiguration config)
        {
            connString = config.GetConnectionString("default");
        }

        public int AddRecipe(Recipe recipe)
        {
            int result = 0;
            using (var conn = new SqlConnection(connString))
            {
                string command = "INSERT INTO Recipes (Title, Ingredients, CookingInstructions, ServingSize, ServingPoints, TotalPoints, Category, FoodImage) ";
                command += "VALUES(@Title, @Ingredients, @CookingInstructions, @ServingSize, @ServingPoints, @TotalPoints, @Category, @FoodImage)";
                result = conn.Execute(command, recipe);
            }
            return result;
        }
        public IEnumerable<Recipe> GetAllRecipes()
        {
            IEnumerable<Recipe> result = null;
            using (var conn = new SqlConnection(connString))
            {
                string command = "SELECT * FROM Recipes";
                result = conn.Query<Recipe>(command);
            }
            return result;
        }
        public Recipe GetRecipeByID(int id)
        {
            Recipe result = null;
            using (var conn = new SqlConnection(connString))
            {
                string command = "SELECT * FROM Recipes WHERE ID = @id";
                result = conn.QueryFirst<Recipe>(command, new { id = id});
            }
            return result;
        }
        public int UpdateRecipeByID(Recipe recipe)
        {
            int result = 0;
            
            using (var conn = new SqlConnection(connString))
            {
                string command = "UPDATE Recipes SET Title = @Title, Ingredients = @Ingredients, CookingInstructions = @CookingInstructions, ";
                command += "ServingSize = @ServingSize, ServingPoints = @ServingPoints, TotalPoints = @TotalPoints, Category = @Category, FoodImage = @FoodImage ";
                command += "WHERE ID = @id";
                
                result = conn.Execute(command, recipe);
            }
            return result;
        }
        public int DeleteRecipeByID(int id)
        {
            int result = 0;
            using (var conn = new SqlConnection(connString))
            {
                string command = "DELETE FROM Recipes WHERE ID = @id";
                result = conn.Execute(command, new { id = id});
            }
            return result;
        }
        public int AddUser(User user)
        {
            int result = 0;
            using (var conn = new SqlConnection(connString))
            {
                string command = "INSERT INTO Users (UserName, UserPassword) ";
                command += "VALUES(@UserName, @UserPassword)";
                result = conn.Execute(command, user);
            }
            return result;
        }
        public int DeleteUser(int id)
        {
            int result = 0;
            using (var conn = new SqlConnection(connString))
            {
                string command = "DELETE FROM Users WHERE ID = @id";
                result = conn.Execute(command, new { id = id });
            }
            return result;
        }


    }
}
