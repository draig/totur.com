<%@ page language="java" contentType="text/html; charset=utf8"
         pageEncoding="utf8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <script type="text/javascript" src="/resources/js/thridParty/jquery.js"></script>
    <script type="text/javascript" src="/resources/js/_.js"></script>
    <script type="text/javascript" src="/resources/js/tutor-board/_.js"></script>
    <script type="text/javascript" src="/resources/js/tutor-board/Viewport.js"></script>
    <script type="text/javascript" src="/resources/js/tutor-board/data/_.js"></script>
    <script type="text/javascript" src="/resources/js/tutor-board/data/categoriesWithSubjects.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf8">
    <title><spring:message code="label.title" /></title>
    <script type="text/javascript">
        $(function() {
            TotuRex.tutorboard.Viewport();
        })
    </script>
</head>
<body>
    <select id="new-category-fld"></select>
    <select id="new-subject-fld"></select>
</body>
</html>