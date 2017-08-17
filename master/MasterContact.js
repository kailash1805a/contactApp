/**
 * Author: Kailash kumar
 */

var objConfig = new Config();

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
            localStorage.setItem('contacts', this.responseText);
            callback(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", objConfig.BASE_URL + "?results=10", true);
    xhttp.send();
}