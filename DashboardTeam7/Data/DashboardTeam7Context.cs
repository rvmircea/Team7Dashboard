using DashboardTeam7.Entities;
using Microsoft.EntityFrameworkCore;

namespace DashboardTeam7.Data
{
    public class DashboardTeam7Context : DbContext
    {
        public DashboardTeam7Context(DbContextOptions<DashboardTeam7Context> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<TrainingData> TrainingDatas { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TrainingData>().HasData(
                new TrainingData
                {
                    Id = 1,
                    Email = "johndoe1@dell.com",
                    NumberOfCoursesEnrolled = 98,
                }
                ) ;
        }
    }
}
