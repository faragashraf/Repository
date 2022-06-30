using Create_a_Web_API__with_ASP.NET_CORE.Data;
using Create_a_Web_API__with_ASP.NET_CORE.Models.Users;
using Create_a_Web_API__with_ASP.NET_CORE.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace Create_a_Web_API__with_ASP.NET_CORE.Persistence.Repositories
{
    public class UsersRepositories : IUsers
    {

        private readonly VOCADbContext _context;

        public UsersRepositories(VOCADbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<IntUser>> GetAll()
        {
            return await _context.IntUsers.ToListAsync();
        }

        public async Task<IntUser> GetById(int id)
        {
            var user = await _context.IntUsers.FindAsync(id);
            return user;
        }

        public async Task<IntUser> Create(IntUser intUser)
        {
            await _context.IntUsers.AddAsync(intUser);
            await _context.SaveChangesAsync();
            return intUser;
        }

        public Task<UserLogged> Select(int id)
        {
            UserLogged usermodel;
            usermodel = (from d in _context.IntUsers
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
                             UsrSusp = d.UsrSusp
                         }).Where(r => r.UsrId == id).First();
            return Task.FromResult(usermodel);
        }

        public bool UpdateStat(int id, bool stat)
        {
            var user = _context.IntUsers.FirstOrDefault(o => o.UsrId == id);
            if (user != null)
            {
                user.UsrSusp = stat;
                _context.Entry(user).State = EntityState.Modified;
                _context.SaveChanges();
                return user.UsrSusp;
            }
            else
            {
                return false;
            }
        }

        public async Task<IEnumerable<IntUser>> GetById_SP(int ID)
        {
            try
            {
                var param = new List<SqlParameter>();

                param.Add(new SqlParameter()
                {
                    ParameterName = "@slctstat",
                    SqlDbType = SqlDbType.NVarChar,
                    Direction = ParameterDirection.Input,
                    Value = "Select UsrId,UsrNm, UsrCat, UcatNm, UcatLvl, UsrSusp,CatLvNm " +
                    "From Int_user inner Join IntUserCat On UsrCat = UCatId inner join IntUserCatLvCD on UCatLvl = CatLvId " +
                    "where UsrId <=32000 and UsrId = " + ID + " Order By UsrId"
                });

                var sql = " SP_CHOICE_SLCT @slctstat";


                List<IntUser> dd = await _context.IntUsers.FromSqlRaw(sql, param.ToArray()).ToListAsync();


                return dd;
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}
