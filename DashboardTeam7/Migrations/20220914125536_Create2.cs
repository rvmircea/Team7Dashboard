using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DashboardTeam7.Migrations
{
    public partial class Create2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TrainingDatas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberOfCoursesEnrolled = table.Column<int>(type: "int", nullable: false),
                    NumberOfCoursesStarted = table.Column<int>(type: "int", nullable: false),
                    MinutesVideoConsumed = table.Column<int>(type: "int", nullable: false),
                    DateJoined = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateLastActivity = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Group = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Deactivated = table.Column<bool>(type: "bit", nullable: false),
                    SuperVisorName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainingDatas", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "TrainingDatas",
                columns: new[] { "Id", "DateJoined", "DateLastActivity", "Deactivated", "Email", "Group", "MinutesVideoConsumed", "NumberOfCoursesEnrolled", "NumberOfCoursesStarted", "SuperVisorName" },
                values: new object[] { 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), false, "johndoe1@dell.com", "RaduBradu", 0, 98, 0, null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrainingDatas");
        }
    }
}
