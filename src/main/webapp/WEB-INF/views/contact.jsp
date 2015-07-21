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
</head>
<body>

<sec:authorize access="isAuthenticated()">
    <a href="<c:url value="/logout" />">
        <spring:message code="label.logout" />
    </a>
</sec:authorize>

<sec:authorize access="!isAuthenticated()">
    <a href="<c:url value="/join" />">
        <spring:message code="label.registrate" />
    </a>
    or
    <a href="<c:url value="/login.jsp" />">
        <spring:message code="label.login" />
    </a>
</sec:authorize>

<h2><spring:message code="label.title" /></h2>

<form:form method="post" action="add" commandName="course">

	<table>
		<tr>
			<td><form:label path="category">
				<spring:message code="label.category" />
			</form:label></td>
			<td><form:input path="category" /></td>
		</tr>
		<tr>
			<td><form:label path="subject">
				<spring:message code="label.subject" />
			</form:label></td>
			<td><form:input path="subject" /></td>
		</tr>
		<tr>
			<td colspan="2"><input type="submit"
				value="<spring:message code="label.addcourse"/>" /></td>
		</tr>
	</table>
</form:form>

<h3><spring:message code="label.courses" /></h3>
<c:if test="${!empty courseList}">
	<table class="data">
		<tr>
            <th>id</th>
			<th><spring:message code="label.category" /></th>
			<th><spring:message code="label.subject" /></th>
			<th>&nbsp;</th>
		</tr>
		<c:forEach items="${courseList}" var="course">
			<tr>
                <td>${course.id}</td>
				<td>${course.category}</td>
				<td>${course.subject}</td>
				<td><a href="delete/${course.id}"><spring:message code="label.delete" /></a></td>
			</tr>
		</c:forEach>
	</table>
</c:if>

</body>
</html>