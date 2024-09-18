using FluentValidation;
using server.Models.DTOs;
using server.Repositories.Interfaces;
using server.Services.Interfaces;
using Slugify;

namespace server.Validator;

public class CategoryValidator : AbstractValidator<CreateCategoryDto>
{
    public CategoryValidator()
    {
        RuleFor(c => c.Name)
            .NotEmpty()
            .Length(2, 20);
    }
}