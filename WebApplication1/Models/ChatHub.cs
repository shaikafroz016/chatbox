using Microsoft.AspNetCore.SignalR;

namespace WebApplication1.Models
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string sender_id,string reciver_id,string message)
        {
            await Clients.All.SendAsync("ReceiveMessage",sender_id,reciver_id,message);
        }
    }
}
