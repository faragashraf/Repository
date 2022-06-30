using Create_a_Web_API__with_ASP.NET_CORE.Models.Users;

namespace Create_a_Web_API__with_ASP.NET_CORE.Repositories
{
    public interface ILogUser
    {
        public Tokens GetUsrLogin(string user, string pass);
    }
}
