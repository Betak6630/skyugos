using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RestSharp;

namespace Yugos.Utils.Helpers
{
    public static class TelegramBot
    {
        private const int GroupFeedBack = - 195192340;
        public static IRestResponse GetUpdates()
        {
            var client = new RestClient("https://api.telegram.org");

            var request = new RestRequest("/bot303449659:AAHvgcLuHeDi2g5pDd5TBJwG8D00rS9OVb4/getUpdates", Method.GET);

            var response = client.Execute(request);

            return response;
        }

        private static RestRequest RequestBuilder(int telegramGroup, string message)
        {
            var request = new RestRequest("/bot303449659:AAHvgcLuHeDi2g5pDd5TBJwG8D00rS9OVb4/sendMessage",
                Method.GET);

            request.AddParameter("chat_id", telegramGroup);
            request.AddParameter("disable_web_page_preview", true);
            request.AddParameter("text", message);
            return request;
        }

        public static void SendMessage(string text)
        {
            try
            {
                var client = new RestClient("https://api.telegram.org");
                var message = text;
                client.Execute(RequestBuilder(GroupFeedBack, message));
            }
            catch
            {
                // ignored
            }
        }

        public static void Send(string text)
        {
           
        }
    }
}
