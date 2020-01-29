var Url = "http://localhost:8000";
var list = {
  obj: function (key, state) {
    return $.get(Url + `/admin/search?key=${key}&state=${state}`)
  },
  filters: function () {
    return $.get(Url + "/admin/search")
  },
  search: function () {
    return $.get(Url + "/admin/category_search")
  }
}