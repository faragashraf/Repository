using Create_a_Web_API__with_ASP.NET_CORE.Data;
using Create_a_Web_API__with_ASP.NET_CORE.Models.Users;
using Create_a_Web_API__with_ASP.NET_CORE.Repositories;

namespace Create_a_Web_API__with_ASP.NET_CORE.Persistence.Repositories
{
    internal class loggedUserRepositories : ILogUser
    {
        private readonly VOCADbContext _context;

        public loggedUserRepositories(VOCADbContext context)
        {
            _context = context;
        }
        public Tokens GetUsrLogin(string user, string pass)
        {
            UserLogged loggeduser = new UserLogged();

            loggeduser = (from d in _context.IntUsers
                          join b in _context.IntUserCats on d.UsrCat equals b.UcatId
                          join c in _context.IntUserCatLvCds on b.UcatLvl equals c.CatLvId
                          select new UserLogged
                          {
                              UsrId = d.UsrId,
                              UsrNm = d.UsrNm,
                              UsrCat = d.UsrCat,
                              UcatNm = b.UcatNm,
                              UcatLvl = (int)b.UcatLvl,
                              CatLvNm = c.CatLvNm,
                              UsrSusp = d.UsrSusp,
                              UsrPassNew = d.UsrPassNew,
                              UsrEmail = d.UsrEmail,
                              UsrRealNm = d.UsrRealNm,
                              UsrGender = d.UsrGender,
                          }).Where(r => r.UsrNm == user && r.UsrPassNew == pass).First();

            Tokens token = new Tokens();

            if (loggeduser != null)
            {

                token = Tokens.GenerateToken(loggeduser.UsrNm, loggeduser.UcatLvl.ToString(),
                    loggeduser.UsrGender, loggeduser.UsrEmail.ToString(), loggeduser.UsrRealNm);
            }
            return (token);
        }
    }
}