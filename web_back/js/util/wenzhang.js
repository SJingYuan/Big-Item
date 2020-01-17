var Url = "http://10.253.1.37:8000";
var category = {
  //获取数据
  get: function () {
    return $.get(Url + "/admin/category_search")
  },
  //添加分类
  add: function (name,slug) {
    return $.post(Url + "/admin/category_add",{'name':name,'slug':slug})
  },
  del:function(id){
    return $.post(Url+"/admin/category_delete",{'id':id})
  }
}