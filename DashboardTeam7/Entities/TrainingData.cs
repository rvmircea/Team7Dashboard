namespace DashboardTeam7.Entities
{
    public class TrainingData
    {
        public int Id { get; set; }
        public string? Email { get; set; }
        public int NumberOfCoursesEnrolled { get; set; }
        public int NumberOfCoursesStarted { get; set; }
        public int MinutesVideoConsumed { get; set; }
        public DateTime DateJoined { get; set; }
        public DateTime DateLastActivity { get; set; }
        public string? Group { get; set; } = "RaduBradu";
        public bool Deactivated { get; set; }
        public string? SuperVisorName { get; set; }
    }
}
