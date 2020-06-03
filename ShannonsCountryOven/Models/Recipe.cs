using Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShannonsCountryOven.Models
{
    public class Recipe
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Ingredients { get; set; }
        public string CookingInstructions { get; set; }
        public string ServingSize { get; set; }
        public int ServingPoints { get; set; }
        public int TotalPoints { get; set; }
        public string Category { get; set; }
        public string FoodImage { get; set; }
    }
}
