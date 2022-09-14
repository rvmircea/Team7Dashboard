using DashboardTeam7.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DashboardTeam7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {   
        private DashboardTeam7Context _context;
        public UserController(DashboardTeam7Context context)
        {
            _context = context; 
        }

        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            var users = _context.TrainingDatas.ToList();

            return Ok(users);
        }
    }
}
