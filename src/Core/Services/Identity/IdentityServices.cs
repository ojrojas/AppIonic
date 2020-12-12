using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Ardalis.Specification;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;

namespace Core.Services.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly IAsyncIdentityRepository _asyncIdentityRepository;

        public IdentityService(IAsyncIdentityRepository asyncIdentityRepository)
        {
            _asyncIdentityRepository = asyncIdentityRepository;
        }

        public async Task<ApplicationUser> CreateApplicationUser(ApplicationUser entity)
        {
            var userRegistered = await this.FindApplicationUser(entity.TypeIdenticationId, entity.Identification);
            if (userRegistered == null)
                return await this._asyncIdentityRepository.CreateApplicationUser(entity);
            else return null;
        }

        public async Task<ApplicationUser> DeleteApplicationUser(Guid Id)
        {
            var userApplication = await this.FindApplicationUser(Id);
            return await this._asyncIdentityRepository.DeleteApplicationUser(userApplication);
        }

        public async Task<ApplicationUser> FindApplicationUser(Guid Id)
        {
            var specification = new ApplicationUserSpecification(Id);
            return await this._asyncIdentityRepository.FindApplicationUser(specification);
        }

        public async Task<ApplicationUser> FindApplicationUser(Guid TypeIdentificationId, string Identification)
        {
            var specification = new ApplicationUserSpecification(TypeIdentificationId, Identification);
            return await this._asyncIdentityRepository.FindApplicationUser(specification);
        }

        public async Task<IReadOnlyList<ApplicationUser>> GetAllAsync()
        {
            return await this._asyncIdentityRepository.GetAllAsync();
        }

        public async Task<ApplicationUser> LoginAppUser(ApplicationUser entity)
        {
            return await this._asyncIdentityRepository.LoginAppUser(entity);
        }

        public async Task<ApplicationUser> UpdateApplicationUser(ApplicationUser entity)
        {
            return await this._asyncIdentityRepository.UpdateApplicationUser(entity);
        }
    }
}