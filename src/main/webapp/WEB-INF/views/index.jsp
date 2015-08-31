<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="en">
<head>
    <title>TotuRex</title>
    <link rel="stylesheet" href="resources/css/default.css">
    <link rel="stylesheet" href="resources/css/dialog.css">
    <script data-main="resources/js/main" src="resources/js/libs/require.js"></script>
</head>
<body>

<header>
        <div class="wrapper">
            <div class="login-panel right-panel">
                <div class="panel-horizontal-cell">
                    <button class="sign-in-btn">Войти</button>
                </div>
                <div class="panel-horizontal-cell">
                    <button class="sign-in-btn vk-btn">Вконтакте</button>
                </div>
            </div>
        </div>
    </div>
</header>


<div class="app-page tutor-board" style="display: none">
    <div class="page course-list">
        <div class="side-panel">

        </div>

        <div class="content-panel">

        </div>
    </div>
    <div class="page course-details" style="display: none">
        <div class="backward">
            <span >&lt;</span>
        </div>

        <div class="course-details-panel">
            <div class="course"></div>

            <div class="tutor"></div>

            <div class="comments"></div>
        </div>
    </div>
</div>

<footer></footer>


</body>
</html>