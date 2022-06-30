using System;
using System.Collections.Generic;

namespace Create_a_Web_API__with_ASP.NET_CORE.Models.Users
{
    public partial class IntUserCat
    {
        public int UcatId { get; set; }
        public int? UcatIdSub { get; set; }
        public short? UcatLvl { get; set; }
        public string UcatNm { get; set; } = null!;
        public string? UcatNmEn { get; set; }
        public string? UcatPath { get; set; }
        public bool? UcatType { get; set; }

        public virtual IntUserCatLvCd? UcatLvlNavigation { get; set; }
    }
}
