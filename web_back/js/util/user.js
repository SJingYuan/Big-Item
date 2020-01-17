var Url = "http://10.253.1.37:8000";

var user = {
  //发送请求
  login: function (name, password) {
    return $.post(Url + "/admin/login", {
      "user_name": name,
      "password": password
    })
  },
  //用户推出
  logout: function () {
    return $.post(Url + "/admin/logout")
  },
  //获取用户信息
  getInfo: function () {
    return $.get(Url + '/admin/getuser')
  },
};