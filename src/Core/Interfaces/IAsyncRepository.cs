using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Ardalis.Specification;
using Core.Entities;

namespace Core.Interfaces
{
    /// <summary>
    /// IAsyncRepository App
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IAsyncRepository<T> where T : BaseEntity, IAggregateRoot
    {
        Task<T> GetByIdAsync(Guid Id);
        Task<IReadOnlyList<T>> GetAllAsync();
        Task<IReadOnlyList<T>> GetListAsync(ISpecification<T> spec);
        Task<T> CreateAsync(T entity);
        Task<T> UpdateAsync(T entity);
        Task<int> CountAsync(ISpecification<T> spec);
        Task<T> DeleteAsync(T entity, Guid Id);
        Task<T> FirstAsync(ISpecification<T> spec);
        Task<T> FirstOrDefaultAsync(ISpecification<T> spec);
    }
}