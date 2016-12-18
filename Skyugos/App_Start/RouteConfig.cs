using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Skyugos
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Contact",
                url: "Contact",
                defaults: new { controller = "Home", action = "Contact" }
                ); 
            
            routes.MapRoute(
                name: "About",
                url: "About",
                defaults: new { controller = "Home", action = "About" }
                );
            
            routes.MapRoute(
                name: "Services",
                url: "Services",
                defaults: new { controller = "Home", action = "Services" }
                );
            
            routes.MapRoute(
                name: "Price",
                url: "Price",
                defaults: new { controller = "Home", action = "Price" }
                );

            routes.MapRoute(
                name: "Publication",
                url: "Publication/{publicationId}",
                defaults: new { controller = "Home", action = "Publication" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
