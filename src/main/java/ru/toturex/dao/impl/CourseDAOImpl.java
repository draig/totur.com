package ru.toturex.dao.impl;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ru.toturex.dao.CourseDAO;
import ru.toturex.domain.Course;

import java.util.List;
import java.util.Map;


@Repository
public class CourseDAOImpl implements CourseDAO {

    public final static String CITY = "city";
    public final static String CATEGORY = "category";
    public final static String SUBJECT = "subject";

    @Autowired
    private SessionFactory sessionFactory;

    public void addCourse(Course course) {
        sessionFactory.getCurrentSession().save(course);
    }

    @SuppressWarnings("unchecked")
    public List<Course> listCourse() {
        return sessionFactory.getCurrentSession().createCriteria(Course.class)
                .list();
    }

    public List<Course> listCourse(Map<String, String> conditions) {
        Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Course.class);
        if(conditions.get(CITY) != null){
            criteria.add(Restrictions.eq(CITY, conditions.get(CITY)));
        }
        return criteria.list();
    }

    public void removeCourse(Integer id) {
        Course course = (Course) sessionFactory.getCurrentSession().load(
                Course.class, id);
        if (null != course) {
            sessionFactory.getCurrentSession().delete(course);
        }
    }

    public Course getCourse(Integer id) {
        List<Course> courses = sessionFactory.getCurrentSession()
                .createQuery("FROM ru.toturex.domain.Course WHERE id = :id")
                .setParameter("id", id)
                .list();

        if (courses.size() > 0) {
            return courses.get(0);
        } else {
            return null;
        }
    }
}
