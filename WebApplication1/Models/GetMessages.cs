namespace WebApplication1.Models
{
    public class GetMessages
    {
        public int message_id { get; set; }
        public string chat { get; set; }
        public string sender_id { get; set; }
        public string reciver_id { get; set; }
        public DateTime created_at { get; set; }
        public string messageType { get; set; }
    }
}
