"use strict";
exports.__esModule = true;
exports.sendGalleryObject = void 0;
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var folders;
(function (folders) {
    folders[folders["first_page"] = 0] = "first_page";
    folders[folders["second_page"] = 1] = "second_page";
    folders[folders["third_page"] = 2] = "third_page";
    folders[folders["fourth_page"] = 3] = "fourth_page";
    folders[folders["fifth_page"] = 4] = "fifth_page";
})(folders || (folders = {}));
function sendGalleryObject(url) {
    // let str = querystring.parse(url, "=");
    var userUrl = new URL(url);
    console.log(userUrl.searchParams);
}
exports.sendGalleryObject = sendGalleryObject;
var objects = [];
