
using Core.Interfaces;

namespace Core.Entities
{
    public class TypeAccount : BaseEntity, IAggregateRoot
    {
        public string Description { get; set; }
    }
}