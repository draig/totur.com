package ru.toturex.dao;

import ru.toturex.domain.Course;

import java.util.List;

public interface CourseDAO {
    public void addCourse(Course user);

    public List<Course> listCourse();

    public void removeCourse(Integer id);
}
