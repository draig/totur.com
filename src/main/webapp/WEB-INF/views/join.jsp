<%@ page language="java" contentType="text/html; charset=utf8"
         pageEncoding="utf8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf8">
    <title><spring:message code="label.title" /></title>
</head>
<body>

<h2><spring:message code="label.title" /></h2>

<form:form method="post" action="join" commandName="regData">

    <table>
        <tr>
            <td>username</td>
            <td><form:input path="user.username" /></td>
        </tr>
        <tr>
            <td>password</td>
            <td><form:input path="user.password" /></td>
        </tr>
        <tr>
            <td>auth role</td>
            <td>
                <select id="auth" name="auth">
                    <option value="ROLE_ADMIN">Admin</option>
                    <option value="ROLE_USER">User</option>
                </select>
            </td>
        </tr>
        <tr>
            <td colspan="2"><input type="submit"
                                   value="<spring:message code="label.addcourse"/>" /></td>
        </tr>
    </table>
</form:form>


</body>
</html>