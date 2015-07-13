package ru.toturex.dao.impl;

import ru.toturex.dao.TutorDAO;
import ru.toturex.domain.Tutor;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class TutorDAOImpl implements TutorDAO {

    @Autowired
    private SessionFactory sessionFactory;

    public void addTutor(Tutor tutor) {
        sessionFactory.getCurrentSession().save(tutor);
    }

    @SuppressWarnings("unchecked")
    public List<Tutor> listTutor() {
        return sessionFactory.getCurrentSession().createQuery("from Tutors")
                .list();
    }

    public void removeTutor(Integer id) {
        Tutor tutor = (Tutor) sessionFactory.getCurrentSession().load(
                Tutor.class, id);
        if (null != tutor) {
            sessionFactory.getCurrentSession().delete(tutor);
        }
    }
}
