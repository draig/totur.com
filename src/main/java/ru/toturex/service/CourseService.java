package ru.toturex.service;

import org.springframework.security.access.annotation.Secured;
import ru.toturex.domain.Course;

import java.util.List;
import java.util.Map;


public interface CourseService {
    public void addCourse(Course course);

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    public void addCourseWithCurrentUser(Course course);

    public List<Course> listCourse();

    public List<Course> listCourse(Map<String, String> conditions);

    public void removeCourse(Integer id);
}
