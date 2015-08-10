package ru.toturex.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.toturex.domain.Course;
import ru.toturex.service.CourseService;

import java.util.List;
import java.util.Map;


@Controller
@RequestMapping("/rest-api")
public class RestapiController {

    @Autowired
    private CourseService courseService;

    @RequestMapping(value = "/ad/search", method = RequestMethod.GET)
    public @ResponseBody
    List<Course> search (@RequestParam Map<String,String> allRequestParams, Model model) {
        List<Course> courses = courseService.listCourse(allRequestParams);
        return courses;
    }

    @RequestMapping(value = "/course/{id}", method = RequestMethod.GET)
    public @ResponseBody
    Course course (@PathVariable("id") int id) {
        Course course = courseService.getCourse(id);
        return course;
    }
}
