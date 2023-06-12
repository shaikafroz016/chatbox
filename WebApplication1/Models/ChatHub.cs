using Microsoft.AspNetCore.SignalR;

namespace WebApplication1.Models
{
    public class ChatHub : Hub
    {
        public void  SendMessage(GetMessages data)
        {
             Clients.All.SendAsync("ReciveChat", data);
        }
    }
}
