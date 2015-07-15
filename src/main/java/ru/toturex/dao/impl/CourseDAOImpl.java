package ru.toturex.dao.impl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ru.toturex.dao.CourseDAO;
import ru.toturex.domain.Course;

import java.util.List;


@Repository
public class CourseDAOImpl implements CourseDAO {

    @Autowired
    private SessionFactory sessionFactory;

    public void addCourse(Course course) {
        sessionFactory.getCurrentSession().save(course);
    }

    @SuppressWarnings("unchecked")
    public List<Course> listCourse() {
        return sessionFactory.getCurrentSession().createQuery("from Course")
                .list();
    }

    public void removeCourse(Integer id) {
        Course course = (Course) sessionFactory.getCurrentSession().load(
                Course.class, id);
        if (null != course) {
            sessionFactory.getCurrentSession().delete(course);
        }
    }
}
