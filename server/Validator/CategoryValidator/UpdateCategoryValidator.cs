using FluentValidation;
using server.Models.DTOs;

namespace server.Validator.CategoryValidator;

public class UpdateCategoryValidator : AbstractValidator<UpdateCategoryDto>
{
    public UpdateCategoryValidator()
    {
        RuleFor(c => c.Name)
            .NotEmpty()
            .Length(2, 20);
    }
}