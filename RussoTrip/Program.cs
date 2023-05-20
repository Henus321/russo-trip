using Microsoft.EntityFrameworkCore;
using RussoTrip.Interfaces;
using RussoTrip.Models;
using RussoTrip.Repository;
using Microsoft.AspNetCore.Identity;
using RussoTrip.Areas.Identity.Data;

var builder = WebApplication.CreateBuilder(args);
// ---------- Dependency Injection Container starts here - bind interface call to new instance of repositoty
builder.Services.AddScoped<ICityRepository, CityRepository>();
builder.Services.AddScoped<IExcursionRepository, ExcursionRepository>();

// Add services to the container.
builder.Services.AddControllersWithViews().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true).AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddControllersWithViews().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);
builder.Services.AddRazorPages();

var app = builder.Build();

// ---------- Middleware
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

DbInitializer.Seed(app); // db population
app.Run();

