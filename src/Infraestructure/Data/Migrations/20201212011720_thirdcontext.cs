using Microsoft.EntityFrameworkCore.Migrations;

namespace Infraestructure.Data.Migrations
{
    public partial class thirdcontext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Identification",
                table: "ApplicationUsers",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Identification",
                table: "ApplicationUsers");
        }
    }
}
