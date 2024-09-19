using FluentValidation;
using server.Models.DTOs;

namespace server.Validator.CategoryValidator;

public class CreateCategoryValidator : AbstractValidator<CreateCategoryDto>
{
    public CreateCategoryValidator()
    {
        RuleFor(c => c.Name)
            .NotEmpty()
            .Length(2, 20);
    }
}