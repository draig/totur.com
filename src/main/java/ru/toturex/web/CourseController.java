package ru.toturex.web;

import ru.toturex.domain.Course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import ru.toturex.service.CourseService;

import java.util.Map;


@Controller
public class CourseController {

    @Autowired
    private CourseService courseService;

    @RequestMapping("/index")
    public String listCourses(Map<String, Object> map) {

        map.put("course", new Course());
        map.put("courseList", courseService.listCourse());

        return "contact";
    }

    @RequestMapping("/")
    public String home() {
        return "redirect:/index";
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public String addCourse(@ModelAttribute("course") Course course, BindingResult result) {
        courseService.addCourse(course);
        return "redirect:/index";
    }

    @RequestMapping("/delete/{courseId}")
    public String deleteContact(@PathVariable("courseId") Integer courseId) {

        courseService.removeCourse(courseId);

        return "redirect:/index";
    }
}
