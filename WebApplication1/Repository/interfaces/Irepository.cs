using WebApplication1.Models;

namespace WebApplication1.Repository.interfaces
{
    public interface Irepository
    {
        public Task<List<GetMessages>> Getmessages(string sender_id, string reciver_id);
        public Task<dynamic> SaveMessage(saveMessage data);
        public Task<getContacts> GetContact(string sneder_id);
    }
}
