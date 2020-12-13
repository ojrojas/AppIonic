using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;

namespace Core.Services
{
    public class AccountService : IAccountService 
    {
        private readonly IAsyncRepository<Account> _asyncRepository;
        private readonly IAsyncRepository<MoveBalanceAccount> _moveBalanceRepository;

        public AccountService(
            IAsyncRepository<Account> asyncRepository,
            IAsyncRepository<MoveBalanceAccount> moveBalanceRepository
            )
        {
            _asyncRepository = asyncRepository;
            _moveBalanceRepository = moveBalanceRepository;
        }

        public async Task<Account> Create(Account entity)
        {
            entity.NumberAccount = await this.GenerateNumberAccountAsync();
            return await this._asyncRepository.CreateAsync(entity);
        }

        public async Task<Account> Delete(Guid id)
        {
            var account = await this._asyncRepository.GetByIdAsync(id);
            return await this._asyncRepository.DeleteAsync(account, account.Id);
        }

        public async Task<Account> FindAccountByNumberAccount(string numberAccount)
        {
            var specification = new AccountSpecification(numberAccount);
            return await this._asyncRepository.FirstOrDefaultAsync(specification);
        }

        public async Task<IReadOnlyList<Account>> GetAllById(Guid ApplicationUserId)
        {
            var specification = new AccountSpecification(ApplicationUserId);
            return await this._asyncRepository.GetListAsync(specification);
        }

        public async Task<Account> GetById(Guid id)
        {
            return await this._asyncRepository.GetByIdAsync(id);
        }

        public Task<IReadOnlyList<MoveBalanceAccount>> GetMoveBalanceAccountBy(Guid AccountId)
        {
            var specification = new MoveBalanceAccountSpecification(AccountId);
            return this._moveBalanceRepository.GetListAsync(specification);
        }

        public async Task<Account> PutBalance(MoveBalance moveBalance)
        {
            var entity = await this._asyncRepository.GetByIdAsync(moveBalance.EntityDestinationId);
            entity.PutBalance(moveBalance.Balance);
            return await this._asyncRepository.UpdateAsync(entity);
        }

        public async Task<Account> TakeBalance(MoveBalance moveBalance)
        {
            var accountSource = await this._asyncRepository.GetByIdAsync(moveBalance.EntitySourceId);
            var accountDestination = await this._asyncRepository.GetByIdAsync(moveBalance.EntityDestinationId);
            if(CheckBalance(accountSource,moveBalance.Balance))
                return await this.UpdatateAccounst(accountSource, accountDestination, moveBalance.Balance);
            else return null;
        }

        public async Task<Account> Update(Account entity)
        {
          return await this._asyncRepository.UpdateAsync(entity);
        }

        private bool CheckBalance(Account entitySource, decimal balance)
        {
            return (entitySource.Balance - balance) > 0;
        }

        private async Task<Account> UpdatateAccounst(Account entitySource, Account entityDestination, decimal balance)
        {
            entitySource.TakeBalance(balance);
            entityDestination.PutBalance(balance);
            await this._asyncRepository.UpdateAsync(entitySource);
            await this._asyncRepository.UpdateAsync(entityDestination);
            return entitySource;
        }

        private async Task<string> GenerateNumberAccountAsync()
        {
            var listAccounts = await this._asyncRepository.GetAllAsync();
            if(listAccounts.Count == 0) return "1";
            else {
                var lastAccount = listAccounts.LastOrDefault();
                var numberAccount = int.Parse(lastAccount.NumberAccount) + 1;
                return numberAccount.ToString();
            }
        }
    }
}