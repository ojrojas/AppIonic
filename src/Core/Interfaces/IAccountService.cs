using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IAccountService 
    {
        Task<Account> Create(Account entity);
        Task<Account> Delete(Guid id);
        Task<Account> Update(Account entity);
        Task<IReadOnlyList<Account>> GetAllById(Guid applicationId);
        Task<Account> GetById(Guid id);
        Task<Account> TakeBalance(MoveBalance moveBalance);
        Task<Account> PutBalance(MoveBalance moveBalance);
        Task<IReadOnlyList<MoveBalanceAccount>> GetMoveBalanceAccountBy(Guid accountId);
        Task<Account> FindAccountByNumberAccount(string numberAccount);
    }
}