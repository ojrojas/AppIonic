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
    public class AccountsController : ControllerBase
    {
        /// <summary>
        /// Async Account 
        /// </summary>
        private readonly IAccountService _AccountService;

        /// <summary>
        /// Constructor IAccountService Controller
        /// </summary>
        /// <param name="IAccountService"></param>
        public AccountsController(IAccountService AccountService)
        {
            _AccountService = AccountService;
        }

        [HttpGet]
        [AllowAnonymous]
        [ResponseCache(Duration = 60)]
        /// <summary>
        /// Get AccountService 
        /// </summary>
        /// <returns>List AccountService</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(IReadOnlyList<Account>), StatusCodes.Status200OK)]
        public async Task<IReadOnlyList<Account>> GetAllAsync()
        {
            return await this._AccountService.GetAll();
        }

        [HttpPost]
        /// <summary>
        /// Post Account App
        /// </summary>
        /// <returns>Account created</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(Account), StatusCodes.Status200OK)]
        public async Task<Account> CreateAccount([FromBody] Account Account)
        {
            return await this._AccountService.Create(Account);
        }

        [HttpPut]
        /// <summary>
        /// Put Account 
        /// </summary>
        /// <returns>Account updated</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(Account), StatusCodes.Status200OK)]
        public async Task<Account> UpdateAccount(Account Account)
        {
            return await this._AccountService.Update(Account);
        }

        [HttpDelete("{Id}")]
        /// <summary>
        /// Delete Account 
        /// </summary>
        /// <returns>Account deleted</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(Account), StatusCodes.Status200OK)]
        public async Task<Account> DeleteAccount(Guid Id)
        {
            return await this._AccountService.Delete(Id);
        }

        [HttpPost]
        [Route("PutBalance")]
        /// <summary>
        /// Post Account App
        /// </summary>
        /// <returns>Account created</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(Account), StatusCodes.Status200OK)]
        public async Task<Account> PutBalance([FromBody] MoveBalance moveBalance)
        {
            return await this._AccountService.PutBalance(moveBalance);
        }

        [HttpPost]
        [Route("TakeBalance")]
        /// <summary>
        /// Post Account App
        /// </summary>
        /// <returns>Account created</returns>
        [Produces("application/json")]
        [ProducesResponseType(typeof(Account), StatusCodes.Status200OK)]
        public async Task<Account> TakeBalance([FromBody] MoveBalance moveBalance)
        {
            return await this._AccountService.TakeBalance(moveBalance);
        }
    }
}