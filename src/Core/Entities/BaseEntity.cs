using System;

namespace Core.Entities
{
    /// <summary>
    /// BaseEntity props id's and auditory
    /// </summary>
    public abstract class BaseEntity
    {
        public virtual Guid Id { get; set; }
        public bool State { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
        public Guid CreatedBy { get; set; }
        public Guid ModifiedBy { get; set; }
    }
}