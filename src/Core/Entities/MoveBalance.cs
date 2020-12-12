using System;

namespace Core.Entities
{
    public class MoveBalance
    {
        public Guid EntitySourceId { get; set; }
        public Guid EntityDestinationId { get; set; }
        public decimal Balance { get; set; }
    }
}