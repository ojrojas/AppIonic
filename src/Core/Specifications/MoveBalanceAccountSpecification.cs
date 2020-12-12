using System;
using Ardalis.Specification;
using Core.Entities;

namespace Core.Specifications
{
    public class MoveBalanceAccountSpecification : Specification<MoveBalanceAccount>
    {
        /// <summary>
        /// Find User By UserName
        /// </summary>
        /// <param name="UserName">UserName Registered</param>
        public MoveBalanceAccountSpecification(Guid AccountId)
        {
            Query.Where(i => i.AccountId == AccountId);
        }
    }
}