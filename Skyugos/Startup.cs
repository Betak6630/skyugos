using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Skyugos.Startup))]
namespace Skyugos
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
