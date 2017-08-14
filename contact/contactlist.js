/**
 * Author: Kailash kumar
 */

/**
 * create master contact class object 
 */
var objMasterContact = new MasterContact();

var Contact = function () { };

/**
 * prototypes properties
 */
Contact.prototype.setContactDetails = function (detailsInfo) {
    console.log(detailsInfo);
}

Contact.prototype.makeDOMList = function (contactList, rootElement) {
    var ul = document.createElement('ul'),
        li = document.createElement('li'),
        list = document.createDocumentFragment();

    for (contact in contactList) {
        if (contactList.hasOwnProperty(contact)) {
            debugger;
            
        }
    }
}


Contact.prototype = objMasterContact;
var objContact = new Contact();
objContact.getList(function (list) {
    console.log(list);
    var contactSideList = "";
    if (list != undefined) {
        objContact.makeDOMList(list, document.getElementById("side-list"));
    }

});
