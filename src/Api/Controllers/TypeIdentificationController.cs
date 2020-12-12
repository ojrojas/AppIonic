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
    public class TypeIdentificationController : ControllerBase
    {
        /// <summary>
        /// Async Identity Repository
        /// </summary>
        private readonly ITypeIdentificationService _TypeIdentificationService;

        /// <summary>
        /// Constructor TypeIdentification Controller
        /// </summary>
        /// <param name="TypeIdentificationService"></param>
        public TypeIdentificationController(ITypeIdentificationService TypeIdentificationService)
        {
            _TypeIdentificationService = TypeIdentificationService;
        }

        [HttpGet]
        [AllowAnonymous]
        [ResponseCache(Duration= 60)]
        /// <summary>
        /// Get TypeIdentifications 
        /// </summary>
        /// <returns>List TypeIdentifications</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(IReadOnlyList<TypeIdentification>), StatusCodes.Status200OK)]
        public async Task<IReadOnlyList<TypeIdentification>> GetAllAsync()
        {
            return await this._TypeIdentificationService.GetAll();
        }

        [HttpPost]
        /// <summary>
        /// Post TypeIdentification App
        /// </summary>
        /// <returns>TypeIdentification created</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(TypeIdentification), StatusCodes.Status200OK)]
        public async Task<TypeIdentification> CreateTypeIdentification([FromBody] TypeIdentification TypeIdentification)
        {
            return await this._TypeIdentificationService.Create(TypeIdentification);
        }
       
        [HttpPut]
        /// <summary>
        /// Put TypeIdentification 
        /// </summary>
        /// <returns>TypeIdentification created</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(TypeIdentification), StatusCodes.Status200OK)]
        public async Task<TypeIdentification> UpdateTypeIdentification(TypeIdentification TypeIdentification)
        {
            return await this._TypeIdentificationService.Update(TypeIdentification);
        }

        [HttpDelete("{Id}")]
        /// <summary>
        /// Delete TypeIdentification 
        /// </summary>
        /// <returns>TypeIdentification created</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(TypeIdentification), StatusCodes.Status200OK)]
        public async Task<TypeIdentification> DeleteTypeIdentification(Guid Id)
        {
            return await this._TypeIdentificationService.Delete(Id);
        }

        [HttpGet]
        [Route("FindApplicationTypeIdentification/{Id}")]
        /// <summary>
        /// Delete TypeIdentification App
        /// </summary>
        /// <returns>TypeIdentification created</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(TypeIdentification), StatusCodes.Status200OK)]
        public async Task<TypeIdentification> FindTypeIdentification(Guid Id)
        {
            return await this._TypeIdentificationService.FindById(Id);
        }
    }
}