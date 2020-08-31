
/* 手机弹出 */
$("#mobile-nav").on('click', function(){
    $("#pop-nav").toggle();
});


/* 登录窗口 */
layui.use('layer', function(){
    var layer = layui.layer;

    $('#personal-icon').on('click', function () {
        // 此处应该判断cookie中是否有信息
        // 没有弹出登录框
        layer.open({
            content:$('#login-box-template').html(),
            type:1,
            title:false,
            closeBtn:2
        });
    });

});

/* 登录验证 */

/* 账号是否为空判断 */
/* 不能直接用 #login-username 绑定事件必须是存在的元素*/
$('body').on('blur', '#login-username', function () {

    var usernameAuxInfoSpan = $('#username-aux-info');
    if ($('#login-username').val() === '') {
        usernameAuxInfoSpan.html('*&nbsp;账号不能为空！');
        usernameAuxInfoSpan.css('visibility', 'visible');
        return false;
    }

    usernameAuxInfoSpan.css('visibility', 'hidden');
    return true;
});

/* 获得焦点后取消提示信息 */
$('body').on('focus', '#login-username', function () {
    var usernameAuxInfoSpan = $('#username-aux-info');
    usernameAuxInfoSpan.css('visibility', 'hidden');
});

/* 密码是否为空判断 */
/* 不能直接用 #login-password 绑定事件必须是存在的元素*/
$('body').on('blur', '#login-password', function () {

    var passwordAuxInfoSpan = $('#password-aux-info');
    if ($('#login-password').val() === '') {
        passwordAuxInfoSpan.html('*&nbsp;密码不能为空');
        passwordAuxInfoSpan.css('visibility', 'visible');
        return false;
    }

    passwordAuxInfoSpan.css('visibility', 'hidden');
    return true;
});

/* 获得焦点后取消提示信息 */
$('body').on('focus', '#login-password', function () {
    var passwordAuxInfoSpan = $('#password-aux-info');
    passwordAuxInfoSpan.css('visibility', 'hidden');
});

$('body').on ('click', '#login-submit-button', function () {

    var usernameAuxInfoSpan = $('#username-aux-info');
    var passwordAuxInfoSpan = $('#password-aux-info');
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    /* 账号 */
    if (username === '') {
        usernameAuxInfoSpan.html('*&nbsp;账号不能为空！');
        usernameAuxInfoSpan.css('visibility', 'visible');
        return false;
    } else if (username.length < 2) {
        usernameAuxInfoSpan.html('*&nbsp;账号有误！');
        usernameAuxInfoSpan.css('visibility', 'visible');
        return false;
    } else {
        usernameAuxInfoSpan.css('visibility', 'hidden');
    }

    /* 密码 */
    if (password === '') {
        passwordAuxInfoSpan.html('*&nbsp;账号不能为空！');
        passwordAuxInfoSpan.css('visibility', 'visible');
        return false;
    } else if (password.length < 6) {
        passwordAuxInfoSpan.html('*&nbsp;密码有误！');
        passwordAuxInfoSpan.css('visibility', 'visible');
        return false;
    } else {
        passwordAuxInfoSpan.css('visibility', 'hidden');
    }
    $('#login-form').submit();

});
