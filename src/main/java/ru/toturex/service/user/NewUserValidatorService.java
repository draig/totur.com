package ru.toturex.service.user;

import org.apache.commons.validator.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import ru.toturex.domain.User;
import ru.toturex.service.UserService;

@Component
public class NewUserValidatorService implements Validator{

    @Autowired
    private UserService userService;

    @Override
    public boolean supports(Class<?> clazz) {
        return User.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        User User = (User) target;
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "user.username", "user.username.empty", "Username must not be empty.");
        String username = User.getUsername();
        if ((username.length()) > 20) {
            errors.rejectValue("user.username", "user.username.tooLong", "Username must not more than 20 characters.");
        }
        if ((username.length()) < 3) {
            errors.rejectValue("user.username", "user.username.tooShort", "Username must not less than 3 characters.");
        }
        if ( userService.findByUserName(username) != null ) {
            errors.rejectValue("user.username", "user.username.isOccupied", "Username is occupied by other user.");
        }

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "user.password", "user.password.empty", "Password must not be empty.");
        String password = User.getPassword() ;
        if ((password.length()) > 20) {
            errors.rejectValue("user.password", "user.password.tooLong", "Password must not more than 20 characters.");
        }
        if ((password.length()) < 3) {
            errors.rejectValue("user.password", "user.password.tooShort", "Password must not less than 3 characters.");
        }
        /*String email = User.getEmail() ;
        if( !EmailValidator.getInstance().isValid( email ) ){
            errors.rejectValue("email", "email.notValid", "Email address is not valid.");
        }*/
    }
}