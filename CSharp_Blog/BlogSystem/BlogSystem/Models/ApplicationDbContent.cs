using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace BlogSystem.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public virtual IDbSet<Article> Articles { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}