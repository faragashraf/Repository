using System;
using System.Collections.Generic;

namespace Create_a_Web_API__with_ASP.NET_CORE.Models.Users
{
    public partial class IntUserCatLvCd
    {
        public IntUserCatLvCd()
        {
            IntUserCats = new HashSet<IntUserCat>();
        }

        public short CatLvId { get; set; }
        public string? CatLvNm { get; set; }

        public virtual ICollection<IntUserCat> IntUserCats { get; set; }
    }
}
