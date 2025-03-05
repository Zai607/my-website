  // 简单验证
    if (username && password) {
        alert(`注册成功！用户名: ${username}`);
        // 这里可以添加注册逻辑，例如将数据发送到服务器
    } else {
        alert('请输入用户名和密码！');
    }
});

// 登录表单提交事件
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单默认提交行为
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // 简单验证
    if (username && password) {
        alert(`登录成功！欢迎回来, ${username}`);
        // 这里可以添加登录逻辑，例如跳转到主界面
    } else {
        alert('请输入用户名和密码！');
    }
});
