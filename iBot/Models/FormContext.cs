using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace iBot.Models
{
    public class FormContext : DbContext
    {
        public FormContext(DbContextOptions<FormContext> options)
            : base(options)
        {
        }

        public DbSet<Form> Form { get; set; }
    }
}
