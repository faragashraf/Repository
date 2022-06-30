using Create_a_Web_API__with_ASP.NET_CORE.Models;
using Create_a_Web_API__with_ASP.NET_CORE.Models.Users;
using Microsoft.EntityFrameworkCore;

namespace Create_a_Web_API__with_ASP.NET_CORE.Data
{
    public class VOCADbContext : DbContext
    {
        public VOCADbContext(DbContextOptions<VOCADbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<UserLogged> Userlogged { get; set; } = null!;
        public virtual DbSet<IntUser> IntUsers { get; set; } = null!;
        public virtual DbSet<IntUserCat> IntUserCats { get; set; } = null!;
        public virtual DbSet<IntUserCatLvCd> IntUserCatLvCds { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("Arabic_100_CI_AS");

            modelBuilder.Entity<UserLogged>(entity =>
            {
                entity.HasNoKey();
            });

            modelBuilder.Entity<IntUser>(entity =>
            {
                entity.HasKey(e => e.UsrId);

                entity.ToTable("Int_user");

                entity.Property(e => e.UsrId).ValueGeneratedNever();

                entity.Property(e => e.UsrBarcode)
                    .HasMaxLength(50)
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrCalCntr)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.UsrClsN).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrClsUpdtd).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrClsYdy)
                    .HasColumnName("UsrClsYDy")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrEmail)
                    .HasMaxLength(50)
                    .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                entity.Property(e => e.UsrEsc1).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrEsc2).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrEsc3).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrEvDy).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrEventColeg).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrEventOther).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrEventflowr).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrFlN).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrGender)
                    .HasMaxLength(6)
                    .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                entity.Property(e => e.UsrGsm)
                    .HasMaxLength(20)
                    .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                entity.Property(e => e.UsrIp)
                    .HasMaxLength(15)
                    .HasColumnName("UsrIP")
                    .HasDefaultValueSql("(N'::::')")
                    .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                entity.Property(e => e.UsrKey)
                    .HasMaxLength(11)
                    .HasDefaultValueSql("(N'A430FABA825')")
                    .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                entity.Property(e => e.UsrLastSeen).HasColumnType("datetime");

                entity.Property(e => e.UsrLevel)
                    .HasMaxLength(100)
                    .HasDefaultValueSql("(N'AXXAXXXAAXXXXXXXXXXAXXXXXAAXXXXXXXXXAAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')");

                entity.Property(e => e.UsrLevelNew)
                    .HasMaxLength(100)
                    .HasColumnName("UsrLevel_New")
                    .HasDefaultValueSql("(N'AXXAXXXAAXXXXXXXXXXAXXXXXAAXXXXXXXXXAAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')");

                entity.Property(e => e.UsrLogSnd).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrNm)
                    .HasMaxLength(30)
                    .UseCollation("SQL_Latin1_General_CP1254_CS_AS");

                entity.Property(e => e.UsrPass)
                    .HasMaxLength(100)
                    .HasDefaultValueSql("(N'HDJRJi0dIhNwY5H0iB7zjQ==')")
                    .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                entity.Property(e => e.UsrPassNew)
                    .HasMaxLength(100)
                    .UseCollation("SQL_Latin1_General_CP1255_CS_AS");

                entity.Property(e => e.UsrPic).HasColumnType("image");

                entity.Property(e => e.UsrReOpY).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrReadYdy)
                    .HasColumnName("UsrReadYDy")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrRealNm).HasMaxLength(50);

                entity.Property(e => e.UsrRealNmEn)
                    .HasMaxLength(60)
                    .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                entity.Property(e => e.UsrRecevDy).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrSisco)
                    .HasMaxLength(4)
                    .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                entity.Property(e => e.UsrTikFlowDy).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrTskOwnr).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrUnRead).HasDefaultValueSql("((0))");

                entity.Property(e => e.UsrVer).HasMaxLength(15);
            });

            modelBuilder.Entity<IntUserCat>(entity =>
            {
                entity.HasKey(e => e.UcatId);

                entity.ToTable("IntUserCat");

                entity.Property(e => e.UcatId)
                    .ValueGeneratedNever()
                    .HasColumnName("UCatId");

                entity.Property(e => e.UcatIdSub).HasColumnName("UCatIdSub");

                entity.Property(e => e.UcatLvl).HasColumnName("UCatLvl");

                entity.Property(e => e.UcatNm)
                    .HasMaxLength(30)
                    .HasColumnName("UCatNm");

                entity.Property(e => e.UcatNmEn)
                    .HasMaxLength(30)
                    .HasColumnName("UCatNmEn")
                    .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                entity.Property(e => e.UcatPath)
                    .HasMaxLength(50)
                    .HasColumnName("UCatPath");

                entity.Property(e => e.UcatType)
                    .HasColumnName("UCatType")
                    .HasDefaultValueSql("((0))");

                entity.HasOne(d => d.UcatLvlNavigation)
                    .WithMany(p => p.IntUserCats)
                    .HasForeignKey(d => d.UcatLvl)
                    .HasConstraintName("FK_IntUserCat_IntUserCatLvCD");
            });

            modelBuilder.Entity<IntUserCatLvCd>(entity =>
            {
                entity.HasKey(e => e.CatLvId)
                    .HasName("PK_CDCat");

                entity.ToTable("IntUserCatLvCD");

                entity.Property(e => e.CatLvId).ValueGeneratedNever();

                entity.Property(e => e.CatLvNm).HasMaxLength(50);
            });

            modelBuilder.HasSequence<int>("Seq_Events").StartsAt(3288721);

            modelBuilder.HasSequence<int>("Seq_Tickets").StartsAt(631862);
        }

    }
}
