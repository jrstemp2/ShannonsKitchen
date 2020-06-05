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

        [HttpGet("all/")]
        public IEnumerable<User> GetAllUsers()
        {
            IEnumerable<User> result = dal.GetAllUsers();
            return result;
        }

        // GET: api/User
        [HttpGet("userid/{id}")]
        public User GetUserByID(int id)
        {
            return dal.GetUserByID(id);
        }

        [HttpGet("username/{userName}")]
        public User GetUserByUserName(string userName)
        {
            return dal.GetUserByUserName(userName);
        }

        [HttpPost("login/")]
        public Object Login(User u)
        {
            bool success = false;
            string errorMessage = "";
            User userInDB = null;

            //TODO: better validation
            if (u.UserName.Length >= 2)
            {
                userInDB = dal.GetUserByUserName(u.UserName);
            }
            else
            {
                errorMessage = "invalid username submitted";
            }

            if (userInDB is null || u is null)
            {
                errorMessage = "incorrect username";
            }
            else
            {
                if (userInDB.UserPassword.Equals(u.UserPassword))
                {
                    success = true;
                }
                else
                {
                    errorMessage = "incorrect password";
                }
            }

            u.UserPassword = "********";
            userInDB.UserPassword = u.UserPassword;
            return new
            {
                success,
                errorMessage,
                user = success ? userInDB : u,
            };
        }
    }
}
