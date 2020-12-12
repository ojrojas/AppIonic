using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class TypeAccountsController : ControllerBase
    {
        /// <summary>
        /// Async TypeAccount 
        /// </summary>
        private readonly ITypeAccountService _typeAccountService;

        /// <summary>
        /// Constructor ITypeAccountService Controller
        /// </summary>
        /// <param name="ITypeAccountService"></param>
        public TypeAccountsController(ITypeAccountService typeAccountService)
        {
            _typeAccountService = typeAccountService;
        }

        [HttpGet]
        [AllowAnonymous]
        [ResponseCache(Duration= 60)]
        /// <summary>
        /// Get TypeAccountService 
        /// </summary>
        /// <returns>List TypeAccountService</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(IReadOnlyList<TypeAccount>), StatusCodes.Status200OK)]
        public async Task<IReadOnlyList<TypeAccount>> GetAllAsync()
        {
            return await this._typeAccountService.GetAll();
        }

        [HttpPost]
        [AllowAnonymous]
        /// <summary>
        /// Post TypeAccount App
        /// </summary>
        /// <returns>TypeAccount created</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(TypeAccount), StatusCodes.Status200OK)]
        public async Task<TypeAccount> CreateTypeAccount([FromBody] TypeAccount TypeAccount)
        {
            return await this._typeAccountService.Create(TypeAccount);
        }
       
        [HttpPut]
        /// <summary>
        /// Put TypeAccount 
        /// </summary>
        /// <returns>TypeAccount updated</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(TypeAccount), StatusCodes.Status200OK)]
        public async Task<TypeAccount> UpdateTypeAccount(TypeAccount TypeAccount)
        {
            return await this._typeAccountService.Update(TypeAccount);
        }

        [HttpDelete("{Id}")]
        /// <summary>
        /// Delete TypeAccount 
        /// </summary>
        /// <returns>TypeAccount deleted</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(TypeAccount), StatusCodes.Status200OK)]
        public async Task<TypeAccount> DeleteTypeAccount(Guid Id)
        {
            return await this._typeAccountService.Delete(Id);
        }
    }
}