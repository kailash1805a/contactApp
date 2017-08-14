/**
 * Author: Kailash kumar
 */

/**
 * create configuration class object
 */
var config = new Config();

var MasterContact = function () {
    this.list = [];
};

/**
 * Get list of contact 
 */
MasterContact.prototype.getList = function (callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            this.list = JSON.parse(this.responseText);
            callback(this.list);
        }
    };
    xhttp.open("GET", config.BASE_URL + "?results=10", true);
    xhttp.send();
}