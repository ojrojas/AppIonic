using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Interfaces;

namespace Core.Services  
{
    public class TypeIdentificationService : ITypeIdentificationService
    {
        private readonly IAsyncRepository<Entities.TypeIdentification> asyncRepository;

        public TypeIdentificationService(IAsyncRepository<Entities.TypeIdentification> asyncRepository)
        {
            this.asyncRepository = asyncRepository;
        }

        public async Task<Entities.TypeIdentification> Create(Entities.TypeIdentification typeIdentification)
        {
           return await this.asyncRepository.CreateAsync(typeIdentification);
        }

        public async Task<Entities.TypeIdentification> Delete(Guid Id)
        {
            var typeIdentification = await this.asyncRepository.GetByIdAsync(Id);
           return await this.asyncRepository.DeleteAsync(typeIdentification,typeIdentification.Id);
        }

        public async Task<Entities.TypeIdentification> FindById(Guid Id)
        {
           return await this.asyncRepository.GetByIdAsync(Id);
        }

        public async Task<IReadOnlyList<Entities.TypeIdentification>> GetAll()
        {
           return await this.asyncRepository.GetAllAsync();
        }

        public async Task<Entities.TypeIdentification> Update(Entities.TypeIdentification typeIdentification)
        {
           return await this.asyncRepository.UpdateAsync(typeIdentification);
        }
    }
}