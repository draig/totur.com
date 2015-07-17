package ru.toturex.domain;

import javax.persistence.*;

@Entity
@Table(name = "roles", uniqueConstraints = @UniqueConstraint(
        columnNames = { "role_id", "role_name" }))
public class UserRole {

    public static final String ROLE_DEFAULT = "ROLE_USER";
    private Long roleId;
    private String authority;


    private User user;

    public UserRole() {
    }

    public UserRole(User user, String authority) {
        this.user = user;
        this.authority = authority;
    }

    @Id
    @GeneratedValue
    @Column(name = "role_id")
    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    @Column(name = "role_name")
    public String getAuthority() {
        return authority;
    }

    public void setAuthority (String authority ) {
        this.authority = authority ;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    /*static public Role defaultARole () {
        Role role = new Role () ;
        role.setAuthority( ROLE_DEFAULT );
        return role ;
    }*/
}