using Create_a_Web_API__with_ASP.NET_CORE.Core;
using Create_a_Web_API__with_ASP.NET_CORE.Data;
using Create_a_Web_API__with_ASP.NET_CORE.Persistence.Repositories;
using Create_a_Web_API__with_ASP.NET_CORE.Repositories;

namespace Create_a_Web_API__with_ASP.NET_CORE.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly VOCADbContext _context;

        public UnitOfWork(VOCADbContext context)
        {
            _context = context;
            Loguser = new loggedUserRepositories(_context);
            Users = new UsersRepositories(_context);
        }
        public ILogUser Loguser { get; set; }
        public IUsers Users { get; set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
