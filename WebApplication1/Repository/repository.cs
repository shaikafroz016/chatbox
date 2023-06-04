using Dapper;
using System.Data.SqlClient;
using WebApplication1.Models;
using WebApplication1.Repository.interfaces;

namespace WebApplication1.Repository
{
    public class repository : Irepository
    {
        private readonly IConfiguration _configuration;
        public repository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<getContacts> GetContact(string sender_id)
        {
            try
            {
                getContacts gs = new getContacts();
                var connection = new SqlConnection(_configuration.GetConnectionString("constr"));
                var recivers = await connection.QueryAsync<reciverslist>("getcontacts", new { sender_id = sender_id }, commandType: System.Data.CommandType.StoredProcedure);
                gs.sender_id = sender_id;
                gs.Reciverslists = (List<reciverslist>)recivers;
                return gs;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<GetMessages>> Getmessages(string sender_id, string reciver_id)
        {
            try
            {
                var connection = new SqlConnection(_configuration.GetConnectionString("constr"));
                var messages = await connection.QueryAsync<GetMessages>("getmessages", new { sender_id = sender_id, reciver_id = reciver_id }, commandType: System.Data.CommandType.StoredProcedure);

                return (List<GetMessages>)messages;

            }
            catch (Exception ex)
            {
                throw ex;
            }
            
        }

        public async Task<dynamic> SaveMessage(saveMessage data)
        {
            try
            {
                var connection = new SqlConnection(_configuration.GetConnectionString("constr"));
                var message_id = await connection.QueryAsync("sendmessage", new { sender_id = data.sender_id, reciver_id = data.reciver_id,content=data.content }, commandType: System.Data.CommandType.StoredProcedure);

                return message_id;
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
