using FluentValidation;
using server.Models.DTOs;

namespace server.Validator.UserValidator;

public class UpdateUserValidator : AbstractValidator<UpdateUserDto>
{
    public UpdateUserValidator()
    {
        RuleFor(u => u.Name)
            .NotEmpty()
            .Length(3, 25);

        RuleFor(u => u.Email)
            .NotEmpty()
            .EmailAddress();
    }
}