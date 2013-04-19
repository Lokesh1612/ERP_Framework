var MenuModel = function(data) {
    this.id = ko.observable(data.id);
    this.name = ko.observable(data.name);
};

var SubMenuModel = function (data) {
    this.id = ko.observable(data.id);
    this.name = ko.observable(data.name);
};

var addModel = function (data) {
    this.id = ko.observable(data.id);
    this.html = ko.observable(data.html);
}

var ViewModel = function () {
    this.menus = ko.observableArray();
    this.submenus = ko.observableArray();
    this.addview = ko.observable();
    this.tableview = ko.observable();
};

$(function () {
    var viewModel = new ViewModel();
    viewModel.menus.push(new MenuModel({ id: "1", name: "Inventory" }));

    viewModel.submenus.push(new SubMenuModel({ id: "1", name: "Customer Center" }));
    viewModel.submenus.push(new SubMenuModel({ id: "2", name: "Invoice" }));
    viewModel.submenus.push(new SubMenuModel({ id: "3", name: "Receive Payment" }));

    viewModel.addview = "<div> <form> <fieldset> <div class=\"controls controls-row\"> <div class=\"span4\"> <label>First Name</label> <input type=\"text\" name=\"firstName\" class=\"span12\"/> </div> <div class=\"span4\"> <label>Middle Name</label> <input type=\"text\" name=\"middleName\" class=\"span12\"/> </div> <div class=\"span4\"> <label>Last Name</label> <input type=\"text\" name=\"lastName\" class=\"span12\"/> </div> </div> <div class=\"controls controls-row\"> <div class=\"span12\"> <label>Company</label> <input type=\"text\" name=\"company\" class=\"span12\"/> </div> </div> <div class=\"controls controls-row\"> <div class=\"span12\"> <label>Display Name</label> <input type=\"text\" name=\"displayName\" class=\"span12\"/> </div> </div> <div class=\"controls controls-row\"> <div class=\"span4\"> <label>Phone</label> <input type=\"text\" name=\"phone\" class=\"span12\"/> </div> <div class=\"span4\"> <label>Mobile</label> <input type=\"text\" name=\"mobile\" class=\"span12\"/> </div> <div class=\"span4\"> <label>Fax</label> <input type=\"text\" name=\"fax\" class=\"span12\"/> </div> </div> <div class=\"controls controls-row\"> <div class=\"span4\"> <label>Other</label> <input type=\"text\" name=\"other\" class=\"span12\"/> </div> <div class=\"span8\"> <label>Website</label> <input type=\"text\" name=\"website\" class=\"span12\"/> </div> </div> <div class=\"tabbable\"> <ul class=\"nav nav-tabs\"> <li class=\"active\"><a href=\"#pane1\" data-toggle=\"tab\">Address</a></li> <li><a href=\"#pane2\" data-toggle=\"tab\">Notes</a></li> </ul> <div class=\"tab-content\"> <div id=\"pane1\" class=\"tab-pane active\"> <div class=\"span6\"> <strong>Billing Address</strong> <div class=\"well controls controls-row\"> <div class=\"span12\"> <label>Street</label> <input type=\"text\" name=\"billStreet\" class=\"span12\"/> </div> <div class=\"span12\"> <div class=\"span4\"> <label>City/Town</label> <input type=\"text\" name=\"billCity\" class=\"span12\"/> </div> <div class=\"span4\"> <label>State</label> <input type=\"text\" name=\"billState\" class=\"span12\"/> </div> <div class=\"span4\"> <label>Zip</label> <input type=\"text\" name=\"billZip\" class=\"span12\"/> </div> </div> <div class=\"span12\"> <label>country</label> <input type=\"text\" name=\"billCountry\" class=\"span12\"/> </div> </div> </div> <div class=\"span6\"> <strong>Shipping Address</strong> <div class=\"well controls controls-row\"> <div class=\"span12\"> <label>Street</label> <input type=\"text\" name=\"shipStreet\" class=\"span12\"/> </div> <div class=\"span12\"> <div class=\"span4\"> <label>City/Town</label> <input type=\"text\" name=\"shipCity\" class=\"span12\"/> </div> <div class=\"span4\"> <label>State</label> <input type=\"text\" name=\"shipState\" class=\"span12\"/> </div> <div class=\"span4\"> <label>Zip</label> <input type=\"text\" name=\"shipZip\" class=\"span12\"/> </div> </div> <div class=\"span12\"> <label>country</label> <input type=\"text\" name=\"shipCountry\" class=\"span12\"/> </div> </div> </div> </div> <div id=\"pane2\" class=\"tab-pane\"> <strong>Notes</strong> <div class=\"controls controls-row\"> <div class=\"span12\"> <textarea class=\"input-block-level\" name=\"notes\"></textarea> </div> </div> </div> </div> </div> </div> <button type=\"submit\" class=\"btn btn-primary\">Submit</button> <input type=\"hidden\" name=\"Customer\" /> </fieldset> </form> </div>";
    viewModel.tableview = "<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"table table-hover table-bordered table-condensed height-set scroll-y\" id=\"example\"><thead><tr><th>Display Name</th><th>Company</th><th>Phone</th><th>Mobile</th><th>Fax</th><th>Website</th><th>Billing Address</th><th>Shipping Address</th><th>Notes</th></tr></thead></table>";
    ko.applyBindings(viewModel); // This makes Knockout get to work
});