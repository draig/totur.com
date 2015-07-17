package ru.toturex.service;

import ru.toturex.domain.User;

import java.util.List;

/**
 * Created by Dashkevich_AD on 14.07.2015.
 */
public interface UserService {
    public void addUser(User user);

    public List<User> listUser();

    public void removeUser(Integer id);

    public User findByUserName (String name);
}
