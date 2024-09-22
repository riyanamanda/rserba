using FluentValidation;
using server.Models.DTOs;

namespace server.Validator.UserValidator;

public class CreateUserValidator : AbstractValidator<CreateUserDto>
{
    public CreateUserValidator()
    {
        RuleFor(u => u.Name)
            .NotEmpty()
            .Length(3, 25);

        RuleFor(u => u.Email)
            .NotEmpty()
            .EmailAddress();

        RuleFor(u => u.Password)
            .NotEmpty()
            .MinimumLength(8);
    }
}