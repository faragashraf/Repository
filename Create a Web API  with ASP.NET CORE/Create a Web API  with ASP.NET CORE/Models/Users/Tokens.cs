using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Create_a_Web_API__with_ASP.NET_CORE.Models.Users
{
    public class Tokens
    {
        public string Token { get; set; }
        public string RefreshToken { get; set; }


        public static Tokens GenerateToken(string name, string Role, string Gnder, string mail, string NameIdentifier)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.UTF8.GetBytes("superSecretKey@345");

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
      {
                      new Claim(ClaimTypes.Name, name),
                      new Claim(ClaimTypes.Role, Role),
                      new Claim(ClaimTypes.Gender, Gnder),
                      new Claim(ClaimTypes.Email, mail),
                      new Claim(ClaimTypes.NameIdentifier, NameIdentifier),
      }),
                NotBefore = DateTime.Now,
                Expires = DateTime.Now.AddMinutes(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return new Tokens { Token = tokenHandler.WriteToken(token) };
        }
    }
}
