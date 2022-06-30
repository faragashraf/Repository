using Create_a_Web_API__with_ASP.NET_CORE.Repositories;

namespace Create_a_Web_API__with_ASP.NET_CORE.Core
{
    public interface IUnitOfWork : IDisposable
    {
        ILogUser Loguser { get; set; }
        IUsers Users { get; set; }
        int Complete();
    }
}
