using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;

namespace Core.Services
{
    public class TypeAccountService: ITypeAccountService
    {
        private readonly IAsyncRepository<TypeAccount> _asyncRepository;

        public TypeAccountService(IAsyncRepository<TypeAccount> asyncRepository)
        {
            _asyncRepository = asyncRepository;
        }

        public async Task<TypeAccount> Create(TypeAccount entity)
        {
            return await this._asyncRepository.CreateAsync(entity);
        }

        public async Task<TypeAccount> Delete(Guid id)
        {
            var typeAccount = await this._asyncRepository.GetByIdAsync(id);
            return await this._asyncRepository.DeleteAsync(typeAccount, typeAccount.Id);
        }

        public async Task<IReadOnlyList<TypeAccount>> GetAll()
        {
            return await this._asyncRepository.GetAllAsync();
        }

        public async Task<TypeAccount> Update(TypeAccount entity)
        {
            return await this._asyncRepository.UpdateAsync(entity);
        }
    }
}