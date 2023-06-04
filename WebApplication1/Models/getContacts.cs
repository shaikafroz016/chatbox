namespace WebApplication1.Models
{
    public class getContacts
    {
        public string sender_id { get; set; }
        public List<reciverslist> Reciverslists { get; set; }
    }
    public class reciverslist
    {
        public string  contact { get; set; } 
    }
}
