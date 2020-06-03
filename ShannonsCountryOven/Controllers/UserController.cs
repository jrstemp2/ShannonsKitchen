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
    public class UserController : ControllerBase
    {
        public readonly IDAL dal;
        public UserController(IDAL dal)
        {
            this.dal = dal;
        }

        [HttpPost]
        public int AddUser(User user)
        {
            return dal.AddUser(user);
        }

        [HttpDelete("{id}")]
        public int DeleteUser(int id)
        {
            return dal.DeleteUser(id);
        }
    }
}
