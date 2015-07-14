package ru.toturex.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.toturex.dao.CourseDAO;
import ru.toturex.domain.Course;
import ru.toturex.service.CourseService;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDAO courseDAO;

    @Transactional
    public void addCourse(Course course) {
        courseDAO.addCourse(course);
    }

    @Transactional
    public List<Course> listCourse() {
        return courseDAO.listCourse();
    }

    @Transactional
    public void removeCourse(Integer id) {
        courseDAO.removeCourse(id);
    }
}
