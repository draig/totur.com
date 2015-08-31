package ru.toturex.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.context.SecurityContextHolder;
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

import java.security.Principal;


@Controller
public class SignController {

    @Autowired
    private UserService userService;

    @Autowired
    private NewUserValidatorService userValidator;

    @RequestMapping(value = "/join", method = RequestMethod.GET)
    public String join (Model model) {
        model.addAttribute ("regData" , new RegData() ) ;
        return "join";
    }

    @RequestMapping(value = "/join", method = RequestMethod.POST)
    public String join (@ModelAttribute("regData") RegData redData, BindingResult result) {
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

    /*@RequestMapping(value = "/models/User", method = RequestMethod.GET)
    public String user (Model model, Principal principal) {
        User user = userService.findByUserName(principal.getName());
        model.addAttribute ("user" , user) ;
        //console logger
        System.out.println(user);
        return "/models/User";
    }

    @Secured("ROLE_ANONYMOUS")*/
    @RequestMapping(value = "/models/User", method = RequestMethod.GET)
    public String anonymous (Model model,  Principal principal) {
        User user;
        if(principal == null){
            user = new User();
        } else {
            user = userService.findByUserName(principal.getName());
        }
        model.addAttribute ("user" , user) ;
        //console logger
        System.out.println(user);
        return "/models/User";
    }

}
