package ru.toturex.dao;

import ru.toturex.domain.Course;

import java.util.List;
import java.util.Map;

public interface CourseDAO {
    public void addCourse(Course user);

    public List<Course> listCourse();

    public List<Course> listCourse(Map<String, String> conditions);

    public void removeCourse(Integer id);

    public Course getCourse(Integer id);
}
