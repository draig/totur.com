package ru.toturex.domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "roles")
public class Role implements GrantedAuthority {
    public static final String ROLE_DEFAULT = "ROLE_USER" ;
    private Long roleId;
    private String authority;

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
    @Override
    public String getAuthority() {
        return authority;
    }

    public void setAuthority (String authority ) {
        this.authority = authority ;
    }

    static public Role defaultARole () {
        Role role = new Role () ;
        role.setAuthority( ROLE_DEFAULT );
        return role ;
    }
}