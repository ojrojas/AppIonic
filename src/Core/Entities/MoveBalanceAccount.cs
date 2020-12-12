using System;
using Core.Interfaces;

namespace Core.Entities
{
    public class MoveBalanceAccount : BaseEntity, IAggregateRoot
    {
        public Account Account { get; set; }
        public Guid AccountId { get; set; }
        public bool IsDebit { get; set; }
        public decimal Balance { get; set; }
    }
}