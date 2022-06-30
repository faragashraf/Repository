using Create_a_Web_API__with_ASP.NET_CORE.Core;
using Create_a_Web_API__with_ASP.NET_CORE.Data;
using Create_a_Web_API__with_ASP.NET_CORE.Models.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Create_a_Web_API__with_ASP.NET_CORE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class usersController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public usersController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet(nameof(GetAll))]
        public async Task<IEnumerable<IntUser>> GetAll()
        {
            return await _unitOfWork.Users.GetAll();
        }

        [HttpGet(nameof(GetById))]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _unitOfWork.Users.GetById(id);
            return user == null ? BadRequest() : Ok(user);
        }

        [HttpPost(nameof(Create))]
        public async Task<IActionResult> Create(IntUser intUser)
        {
            await _unitOfWork.Users.Create(intUser);

            return CreatedAtAction(nameof(GetById), new { id = intUser.UsrId }, intUser);
        }

        [HttpGet(nameof(Select))]
        public async Task<IActionResult> Select(int id)
        {
            return Ok(await _unitOfWork.Users.Select(id));
        }

        [HttpPut(nameof(UpdateStat))]
        public IActionResult UpdateStat(int id, bool stat)
        {
            var W = _unitOfWork.Users.UpdateStat(id, stat);
            return W == true ? Ok(W) : BadRequest(W);
        }

        [HttpGet(nameof(GetById_SP))]
        public async Task<IActionResult> GetById_SP(int ID)
        {
            return Ok(await _unitOfWork.Users.GetById_SP(ID));

        }
    }
}
