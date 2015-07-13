package ru.toturex.dao;

import ru.toturex.domain.Tutor;
import java.util.List;

public interface TutorDAO {
    public void addTutor(Tutor contact);

    public List<Tutor> listTutor();

    public void removeTutor(Integer id);
}
