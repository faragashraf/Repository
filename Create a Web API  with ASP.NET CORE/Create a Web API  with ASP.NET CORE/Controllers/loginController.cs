using Create_a_Web_API__with_ASP.NET_CORE.Core;
using Create_a_Web_API__with_ASP.NET_CORE.Models.Users;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Create_a_Web_API__with_ASP.NET_CORE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class loginController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public loginController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpPost(nameof(GetUsrLogin))]
        public ActionResult<Tokens> GetUsrLogin([FromBody]loginModel loingmodel)
        {
            UserLogged loggeduser = new UserLogged();
            try
            {
                return Ok(_unitOfWork.Loguser.GetUsrLogin(loingmodel.userName, loingmodel.Password));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
