using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Data.Migrations;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using var scope = host.Services.CreateScope();
            //server çalışmadan önce servislerimizi kullanacağız.
            var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
            var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

            try
            {
                //server çalışmadan önce StoreContext ile db yi oluşturuyoruz. dotnet ef migrate işlemini yapar. Belki de eski sürümlerde böyle yapılırdı.
                context.Database.Migrate();
                //server çalışmadan önce rasgele(DbInitializer) bir sınıfla db de veri yoksa veri ekleme işlemi yapıyoruz.İsmi ahmet bile olabilir.
                DbInitializer.Initialize(context);
            }
            catch (System.Exception ex)
            {
                //servis başlamadan önce bir hata gelirse logger<Program> servisiyle loga hatayı yazdırabiliyoruz.
                logger.LogError(ex, "Migration HATA");
            }
            host.Run();

        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
