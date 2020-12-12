using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface ITypeAccountService 
    {
        Task<TypeAccount> Create(TypeAccount entity);
        Task<TypeAccount> Update(TypeAccount entity);
        Task<TypeAccount> Delete(Guid id);
        Task<IReadOnlyList<TypeAccount>> GetAll();
    }
}