package ru.toturex.service.impl;

import ru.toturex.dao.UserDAO;
import ru.toturex.domain.User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.toturex.service.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Transactional
    @Override
    public void addUser(User user) {
        userDAO.addUser(user);
    }

    @Transactional
    @Override
    public List<User> listUser() {
        return userDAO.listUser();
    }

    @Transactional
    @Override
    public void removeUser(Integer id) {
        userDAO.removeUser(id);
    }

    @Transactional
    @Override
    public User findByUserName (String name){
        return userDAO.findByUserName(name);
    }
}
