
using System;
using Ardalis.Specification;
using Core.Entities;

namespace Core.Specifications
{
    public class AccountSpecification : Specification<Account>
    {
        /// <summary>
        /// Find Account By ApplicationUserId
        /// </summary>
        /// <param name="applicationUserId">ApplicationUserId Registered</param>
        public AccountSpecification(Guid applicationUserId)
        {
            Query.Where(i => i.ApplicationUserId == applicationUserId);
        }

        /// <summary>
        /// Find Account by NumberAccount
        /// </summary>
        /// <param name="numberAccount"></param>
        public AccountSpecification(string numberAccount)
        {
            Query.Where(i => i.NumberAccount == numberAccount);
        }
    }
}