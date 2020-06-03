using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShannonsCountryOven.Models;

namespace ShannonsCountryOven.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        //Make the Connection 
        public readonly IDAL dal;
        public RecipeController(IDAL dal)
        {
            this.dal = dal;
        }

        //-------------------------------CREATE------------------------------------
        [HttpPost]
        public int AddRecipe(Recipe recipe)
        {
            return dal.AddRecipe(recipe);
        }
        //------------------------------READ---------------------------------------
        [HttpGet]
        public IEnumerable<Recipe> GetAllRecipes()
        {
            return dal.GetAllRecipes();
        }

        [HttpGet("{id}")]
        public Recipe GetRecipeByID(int id)
        {
            return dal.GetRecipeByID(id);
        }
        //----------------------------UPDATE------------------------------------------
        [HttpPut]
        public int UpdateRecipeByID(Recipe recipe)
        {
            return dal.UpdateRecipeByID(recipe);
        }
        //----------------------------DELETE------------------------------------------
        [HttpDelete("{id}")]
        public int DeleteRecipeByID(int id)
        {
            return dal.DeleteRecipeByID(id);
        }
    }
}
