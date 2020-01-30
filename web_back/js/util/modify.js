var Url = "http://localhost:8000";
var list = {
  // obj: function (key, state, perpage) {
  //   return $.get(Url + `/admin/search?key=${key}&state=${state}&perpage=${perpage}`)
  // },
  obj: function (isParams) {
    return $.get(Url + `/admin/search?key=${isParams.name}&state=${isParams.slug}&perpage=${isParams.visiblecount}`)
  },
  search: function () {
    return $.get(Url + "/admin/category_search")
  },
  del:function(id){
    return $.get(Url+`/admin/article_delete?id=${id}`)
  }
}