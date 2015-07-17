package ru.toturex.dao;

import ru.toturex.domain.User;

import java.util.List;

public interface UserDAO {
    public void addUser(User user);

    public List<User> listUser();

    public void removeUser(Integer id);

    public User findByUserName(String username);
}
