using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace IdentityMvc
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddMvc()
            //.SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            ////IdentityServerAuthenticationDefaults.AuthenticationScheme
            //services.AddAuthentication()
            //    .AddIdentityServerAuthentication(options =>
            //    {
            //        options.Authority = "https://localhost:5000/";
            //        options.ApiName = "mvc";
            //        //options.ApiSecret = "secret";
            //    });
            //    //.AddCookie(options =>
            //    //{
            //    //    options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
            //    //    options.Cookie.Name = 'mvcimplicit'
            //    //})
            //    //.AddOpenIdConnect(
            //    //)

            //    ;

            services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                .AddIdentityServerAuthentication(options =>
                {
                    //var section = Configuration.GetSection(SectionOidcAuthentication);
                    options.Authority = "https://localhost:5000/"; // section[OidcAuthentication_Authority];
                    options.ApiName = "mvc"; // section[OidcAuthentication_ApiName];
                    //options.ApiSecret = section[OidcAuthentication_ApiSecret];
                    //if (Environment.IsLocal())
                        options.RequireHttpsMetadata = false;

                });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("Authenticated", policy => policy.RequireAuthenticatedUser());
                //options.AddPolicy("Employee", policy => policy
                //    .RequireScope("rhonline:all")
                //    .RequireClaim(EmployeeProviderConstants.ClaimTypes.NationalCode)
                //    .RequireClaim(EmployeeProviderConstants.ClaimTypes.Enrollment));
            });
            services.AddCors();
            services.AddMvcCore(options =>
            {

                options.Filters.Add(new AuthorizeFilter("Authenticated"));
                //options.Filters.Add(new AuthorizeFilter("Employee"));
                //options.Filters.Add(new ErrorFilter());
            })
            .AddApiExplorer()
            .AddJsonFormatters()
            .AddAuthorization()
            ;


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseCors(options => options
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
             );

            app.UseAuthentication();
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",
            //        template: "{controller=Home}/{action=Index}/{id?}");
            //});

        }
    }
}
