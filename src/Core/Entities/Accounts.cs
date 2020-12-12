using System;
using Core.Interfaces;

namespace Core.Entities
{
    public class Account   : BaseEntity, IAggregateRoot
    {
        public string Description { get; set; }
        public TypeAccount TypeAccount { get; set; }
        public Guid TypeAccountId { get; set; }
        public Guid ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public decimal Balance { get; private set; }


        public void PutBalance(decimal value)
        {
            this.Balance += value;
        }

        public void TakeBalance(decimal value)
        {
            this.Balance -= value;
        }

        public decimal GetBalance() => this.Balance;
    }
}