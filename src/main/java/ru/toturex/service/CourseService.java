package ru.toturex.service;

import org.springframework.security.access.annotation.Secured;
import ru.toturex.domain.Course;

import java.util.List;


public interface CourseService {
    public void addCourse(Course course);

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    public void addCourseWithCurrentUser(Course course);

    public List<Course> listCourse();

    public void removeCourse(Integer id);
}
