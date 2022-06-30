using Create_a_Web_API__with_ASP.NET_CORE.Models.Users;
using Microsoft.AspNetCore.Mvc;

namespace Create_a_Web_API__with_ASP.NET_CORE.Repositories
{
    public interface IUsers
    {
        public Task<IntUser> Create(IntUser intUser);
        public Task<IEnumerable<IntUser>> GetAll();
        public Task<IntUser> GetById(int id);
        public Task<UserLogged> Select(int id);
        public bool UpdateStat(int id, bool stat);
        public  Task<IEnumerable<IntUser>> GetById_SP(int ID);
    }
}
