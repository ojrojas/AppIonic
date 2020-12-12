using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface ITypeIdentificationService 
    {
        Task<TypeIdentification> Create(TypeIdentification typeIdentification);
        Task<TypeIdentification> FindById(Guid Id);
        Task<TypeIdentification> Delete(Guid Id);
        Task<TypeIdentification> Update(TypeIdentification typeIdentification);
        Task<IReadOnlyList<TypeIdentification>> GetAll();
    }
}