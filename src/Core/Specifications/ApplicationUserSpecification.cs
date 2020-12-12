using System;
using Ardalis.Specification;
using Core.Entities;

namespace Core.Specifications
{
    public class ApplicationUserSpecification : Specification<ApplicationUser>
    {
        /// <summary>
        /// Find User By UserName
        /// </summary>
        /// <param name="UserName">UserName Registered</param>
        public ApplicationUserSpecification(string UserName)
        {
            Query.Where(i => i.UserName == UserName);
        }

        /// <summary>
        /// Find User By UserName And Password
        /// </summary>
        /// <param name="UserName">UserName Registered</param>
        /// <param name="Password">Password Registere</param>
        public ApplicationUserSpecification(string UserName, string Password)
        {
            Query.Where(i => i.UserName == UserName && i.Password == Password);
        }

        /// <summary>
        /// Find User By Id
        /// </summary>
        /// <param name="Id">Id Created On Post</param>
        public ApplicationUserSpecification(Guid Id)
        {
            Query.Where(i => i.Id == Id);
        }

        /// <summary>
        /// Find User By TypeIdentificationId And Identitificatcion
        /// </summary>
        /// <param name="TypeIdentificationId">Registered TypeIdentificationId</param>
        /// <param name="Identification">Registered Identification</param>
        public ApplicationUserSpecification(Guid TypeIdentificationId, string Identification)
        {
            Query.Where(i => i.TypeIdenticationId == TypeIdentificationId && i.Identification == Identification);
        }
    }
}