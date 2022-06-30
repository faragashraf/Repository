    namespace Create_a_Web_API__with_ASP.NET_CORE.Models.Users
{
    public class UserLogged
    {
        public int UsrId { get; set; }
        public string UsrNm { get; set; }
        public string? UsrPassNew { get; set; }
        public int UsrCat { get; set; }
        public string UsrPass { get; set; }
        public string UsrRealNm { get; set; }
        public string UsrGender { get; set; }
        public string UsrEmail { get; set; }
        public int UcatLvl { get; set; }
        public string UcatNm { get; set; }
        public string? CatLvNm { get; set; }
        public bool UsrSusp { get; set; }
    }
}
