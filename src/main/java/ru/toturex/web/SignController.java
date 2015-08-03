package ru.toturex.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import ru.toturex.domain.RegData;
import ru.toturex.domain.User;
import ru.toturex.service.UserService;
import ru.toturex.service.user.NewUserValidatorService;


@Controller
public class SignController {

    @Autowired
    private UserService userService;

    @Autowired
    private NewUserValidatorService userValidator;

    @RequestMapping(value = "/join", method = RequestMethod.GET)
    public String join ( Model model ) {
        model.addAttribute ("regData" , new RegData() ) ;
        return "join";
    }

    @RequestMapping(value = "/join", method = RequestMethod.POST)
    public String join (@ModelAttribute("regData")  RegData redData, BindingResult result) {
        User user = redData.getUser();
        userValidator.validate(user, result);
        if (result.hasErrors()) {
            return "join" ;
        }
        String auth = redData.getAuth();
        user.addUserRole(auth != null ? auth : "ROLE_ADMIN");
        userService.addUser(user);

        return "redirect:/index";
    }

}
