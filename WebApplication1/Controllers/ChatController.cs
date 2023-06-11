using Dapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using WebApplication1.Models;
using WebApplication1.Repository.interfaces;

namespace WebApplication1.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        public readonly Irepository _repo;
        public ChatController(Irepository config)
        {
            _repo = config;
        }

        [HttpGet]
        [Route("getMessages")]
        public async Task<IActionResult> getMessagesAsync(string sender_id,string reciver_id)
        {
            try
            {
                var messages = await _repo.Getmessages(sender_id, reciver_id);
                return Ok(messages);
            }
            catch (Exception ex) {
                return BadRequest( ex.Message);
            
            }
        }
        
        
        [HttpPost]
        [Route("saveMessages")]
        public async Task<IActionResult> SaveMessages(saveMessage data)
        {
            try
            {
                var message_id = await _repo.SaveMessage(data);
                ChatHub chatHub = new ChatHub();
               await chatHub.SendMessage(data.sender_id, data.reciver_id, data.content);
                return Ok(message_id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }


        [HttpGet]
        [Route("getcontacts")]
        public async Task<IActionResult> GetContacts(string sender_id)
        {
            try
            {
                var contacts = await _repo.GetContact(sender_id);
                return Ok(contacts);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }
    }
}
