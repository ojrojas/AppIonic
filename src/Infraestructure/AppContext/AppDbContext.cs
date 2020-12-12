using System.Reflection;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infraestructure.AppContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() { }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<RolesByUsers> RolesByUsers { get; set; }
        public DbSet<TypeIdentification> TypeIdentifications { get; set; }
        public DbSet<TypeAccount> TypeAccounts { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<MoveBalanceAccount> MoveBalanceAccounts { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}