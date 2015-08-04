package ru.toturex.domain;

import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

@Entity
@Table(name = "courses")
public class Course {

    public static final Map <String, String []> CATEGORIES;

    static
    {
        CATEGORIES = new HashMap <String, String []>();
        String [] school = {"biology", "chemistry", "english", "geography", "math"};
        CATEGORIES.put("school", school);
        String [] exams = {"math", "history", "physics"};
        CATEGORIES.put("exams", exams);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private User tutor;

    @Column(name = "category")
    private String category;

    @Column(name = "subject")
    private String subject;

    @Column(name = "city")
    private String city;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "avatar")
    private String avatar;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getTutor() {
        return tutor;
    }

    public void setTutor(User tutor) {
        this.tutor = tutor;
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

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}