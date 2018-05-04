module.exports = function validateUserInfo(user) {
    var error = {isError: false};
    if (!user.name) {
        error.name = '请输入用户名';
        error.isError = true;
    }

    if (!user.password) {
        error.pwd = '请输入密码';
        error.isError = true;
    }

    if (!user.repassword) {
        error.repwd = '请再次输入密码';
        error.isError = true;
    }

    if (user.password && user.repassword && user.password !== user.repassword) {
        error.repwd = '两次密码不一致';
        error.isError = true;
    }
    return error;
}