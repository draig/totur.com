package ru.toturex.service;

import ru.toturex.domain.Course;

import java.util.List;


public interface CourseService {
    public void addCourse(Course course);

    public List<Course> listCourse();

    public void removeCourse(Integer id);
}
