// var Url = "http://192.168.172.56:8000";
// var Url = "http://192.168.124.15:8000";
var Url = "http://192.168.43.94:8000";
var category = {
  //获取数据
  get: function () {
    return $.get(Url + "/admin/category_search")
  },
  //添加分类
  add: function (name, slug) {
    return $.post(Url + "/admin/category_add", { 'name': name, 'slug': slug })
  },
  del: function (id) {
    return $.post(Url + "/admin/category_delete", { 'id': id })
  },
  edit:function(id,name,slug){
    return $.post(Url+"/admin/category_edit",{"id":id,"name":name,"slug":slug})
  }
}