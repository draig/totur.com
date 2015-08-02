package ru.toturex.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.toturex.domain.Course;
import ru.toturex.service.CourseService;

import java.util.List;
import java.util.Map;


@Controller
@RequestMapping("/restapi")
public class RestapiController {

    @Autowired
    private CourseService courseService;

    @RequestMapping(value = "/ad/search", method = RequestMethod.GET)
    public @ResponseBody
    List<Course> search (@RequestParam Map<String,String> allRequestParams, Model model) {
        List<Course> course = courseService.listCourse();
        return course;
    }
}
