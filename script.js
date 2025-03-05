/* 全局样式 */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    text-align: center;
}

main {
    padding: 20px;
}

/* 首页图片 */
.home-image img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

/* 注册登录界面 */
.auth-section {
    margin: 20px 0;
}

.auth-forms {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.auth-forms form {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 48%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.auth-forms h2 {
    font-size: 24px;
    margin-bottom: 15px;
}

.auth-forms label {
    display: block;
    margin-bottom: 5px;
}

.auth-forms input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.auth-forms button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

.auth-forms button:hover {
    background-color: #45a049;
}

/* 甘松项目 */
.projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
}

.project {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.project h2 {
    font-size: 20px;
    margin-bottom: 15px;
}

.project img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px;
}

.project .btn {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.project .btn:hover {
    background-color: #45a049;
}

/* 页脚 */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
}