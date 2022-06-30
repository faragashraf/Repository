using System;
using System.Collections.Generic;

namespace Create_a_Web_API__with_ASP.NET_CORE.Models.Users
{
    public partial class IntUser
    {
        public int UsrId { get; set; }
        public string UsrNm { get; set; } = null!;
        public int UsrCat { get; set; }
        public int? UsrCat2 { get; set; }
        public string UsrPass { get; set; } = null!;
        public string? UsrKey { get; set; }
        public string UsrLevel { get; set; } = null!;
        public string UsrRealNm { get; set; } = null!;
        public string UsrRealNmEn { get; set; } = null!;
        public string UsrGender { get; set; } = null!;
        public string? UsrSisco { get; set; }
        public string? UsrGsm { get; set; }
        public string UsrEmail { get; set; } = null!;
        public string? UsrExpCompStr { get; set; }
        public string? UsrExpNtfStr { get; set; }
        public bool UsrActive { get; set; }
        public DateTime? UsrLastSeen { get; set; }
        public bool UsrSusp { get; set; }
        public string UsrIp { get; set; } = null!;
        public string? UsrVer { get; set; }
        public bool UsrWv { get; set; }
        public bool? UsrCalCntr { get; set; }
        public int UsrTkCount { get; set; }
        public int? UsrClsN { get; set; }
        public int? UsrFlN { get; set; }
        public int? UsrReOpY { get; set; }
        public int? UsrUnRead { get; set; }
        public int? UsrEventflowr { get; set; }
        public int? UsrEventColeg { get; set; }
        public int? UsrEventOther { get; set; }
        public int? UsrEvDy { get; set; }
        public int? UsrClsYdy { get; set; }
        public int? UsrReadYdy { get; set; }
        public int? UsrRecevDy { get; set; }
        public int? UsrClsUpdtd { get; set; }
        public int? UsrTikFlowDy { get; set; }
        public int? UsrTskOwnr { get; set; }
        public int? UsrEsc1 { get; set; }
        public int? UsrEsc2 { get; set; }
        public int? UsrEsc3 { get; set; }
        public string? UsrBarcode { get; set; }
        public bool? UsrLogSnd { get; set; }
        public string? UsrPassNew { get; set; }
        public byte[]? UsrPic { get; set; }
        public string? UsrLevelNew { get; set; }
    }
}
