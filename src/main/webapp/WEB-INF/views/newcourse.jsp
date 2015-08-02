<%@ page language="java" contentType="text/html; charset=utf8"
         pageEncoding="utf8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf8">
    <title><spring:message code="label.title" /></title>
    <script type="text/javascript" src="/resources/js/thridParty/jquery.js"></script>
</head>
<body>

<sec:authorize access="isAuthenticated()">

    <form:form method="post" action="add" commandName="course">

        <table>
            <tr>
                <td><form:label path="category"/></td>
                <td><form:select path="category" items="${categories}" /></td>
            </tr>
            <tr>

                <td><form:label path="subject"/></td>
                <c:forEach var="entry" items="${categoriesWithSubjects}">
                    <%--<form:select path="subject">
                        <form:options items="${entry.value}" id="${entry.key}-category" style="display:none"/>
                    </form:select>--%>
                    ${entry.value}
                </c:forEach>
            </tr>
            <%--<tr>
                <td><form:label path="subject">
                    <spring:message code="label.subject" />
                </form:label></td>
                <td><form:input path="subject" /></td>
            </tr>--%>
            <tr>
                <td colspan="2"><input type="submit"
                                       value="<spring:message code="label.addcourse"/>" /></td>
            </tr>
        </table>
    </form:form>

</sec:authorize>

</body>
</html>