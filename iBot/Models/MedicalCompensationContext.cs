using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace iBot.Models
{
    public class MedicalCompensationContext : DbContext
    {
        public MedicalCompensationContext(DbContextOptions<MedicalCompensationContext> options)
            : base(options)
        {
        }

        public DbSet<MedicalCompensationModel> Form { get; set; }
    }
}
