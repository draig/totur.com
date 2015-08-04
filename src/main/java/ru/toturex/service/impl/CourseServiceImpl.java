package ru.toturex.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.toturex.dao.CourseDAO;
import ru.toturex.dao.UserDAO;
import ru.toturex.domain.Course;
import ru.toturex.domain.User;
import ru.toturex.service.CourseService;

import java.util.List;
import java.util.Map;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDAO courseDAO;

    @Autowired
    private UserDAO userDAO;


    @Transactional
    public void addCourse(Course course) {
        courseDAO.addCourse(course);
    }

    @Transactional
    public void addCourseWithCurrentUser(Course course) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth == null) {
            return;
        }
        User user = userDAO.findByUserName(auth.getName());
        if(user == null) {
            return;
        }
        course.setTutor(user);
        courseDAO.addCourse(course);
    }

    @Transactional
    public List<Course> listCourse() {
        return courseDAO.listCourse();
    }

    @Transactional
    public List<Course> listCourse(Map<String, String> conditions) {
        return courseDAO.listCourse(conditions);
    }

    @Transactional
    public void removeCourse(Integer id) {
        courseDAO.removeCourse(id);
    }
}
