using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Skyugos.Models.Contact;
using Yugos.Utils.Helpers;

namespace Skyugos.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }

        public ActionResult Services()
        {
            return View();
        }
        
        public ActionResult Price()
        {
            return View();
        }

        public ActionResult Publication(int publicationId)
        {
            return View();
        }

        [HttpPost]
        public JsonResult AskQuestion(AskQuestionModel model)
        {
            var message = string.Format("Пишет {0}\nТема: {1}\nВопрос: {2}\nEmail: {3}\nТелефон: {4}", model.Name,
                model.Subject, model.Message, model.Email, model.Tel);

            TelegramBot.SendMessage(message);

            return new JsonResult();
        }
    }
}