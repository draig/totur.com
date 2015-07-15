package ru.toturex.domain;

import javax.persistence.*;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Integer id;

    @Column(name = "tutorId")
    private Integer tutorId;

    @Column(name = "category")
    private String category;

    @Column(name = "subject")
    private String subject;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTutorId() {
        return tutorId;
    }

    public void setTutorId(Integer tutorId) {
        this.tutorId = tutorId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
}