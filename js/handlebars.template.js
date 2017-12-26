(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <!-- Brand and toggle get grouped for better mobile display -->\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                              <span class=\"sr-only\">Toggle navigation</span>\r\n                              <span class=\"icon-bar\"></span>\r\n                              <span class=\"icon-bar\"></span>\r\n                              <span class=\"icon-bar\"></span>\r\n                            </button>\r\n                <a class=\"navbar-brand\" href=\"#\">SellNow</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a href=\"#/\">Login</a></li>\r\n                    <li><a href=\"#/signup\">Signup</a></li>\r\n                    <li><a href=\"#/product\">Product</a></li>\r\n                    <li><a href=\"#/user\">User</a></li>\r\n                    <li><a href=\"#/home\">Home</a></li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>";
},"useData":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Home Page -</h1>";
},"useData":true});
templates['landingpage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <!-- Brand and toggle get grouped for better mobile display -->\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                              <span class=\"sr-only\">Toggle navigation</span>\r\n                              <span class=\"icon-bar\"></span>\r\n                              <span class=\"icon-bar\"></span>\r\n                              <span class=\"icon-bar\"></span>\r\n                            </button>\r\n                <a class=\"navbar-brand\" href=\"#\">SellNow</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a href=\"#/\">Login</a></li>\r\n                    <li><a href=\"#/signup\">Signup</a></li>\r\n                    <li><a href=\"#/product\">Product</a></li>\r\n                    <li><a href=\"#/user\">User</a></li>\r\n                    <li><a href=\"#/home\">Home</a></li>\r\n\r\n                </ul>\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li class=\"dropdown\">\r\n                        <a href=\"javascript.void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            <i class=\"fa fa-user\"></i> <span class=\"caret\"></span>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a href=\"#\">Profile</a></li>\r\n                            <li><a href=\"#\">Logout</a></li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div id=\"landingpageContent\"></div>";
},"useData":true});
templates['login'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1>Login Page - "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<div id=\"loginForm\"></div>\r\n<button class=\"btn btn-primary\" onclick=\"LoginController.login();\">Login</button>";
},"useData":true});
templates['product'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Product Page</h1>";
},"useData":true});
templates['signup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Signup Page</h1>";
},"useData":true});
templates['user'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>User Page</h1>";
},"useData":true});
})();