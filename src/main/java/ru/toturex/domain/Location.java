package ru.toturex.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "location")
public class Location {
    private String country;

    private String city;

    private String district;
}
