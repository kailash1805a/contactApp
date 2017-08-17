/**
 * Author: Kailash kumar
 */

/**
 * create master contact class object 
 */
var objMasterContact = new MasterContact();

var ContactMaster = function () { };

/**
 * init function for onload application functionality
 */
ContactMaster.init = function () {
    
    var contactSearch = document.getElementById('contact-search');
    contactSearch.addEventListener('keyup', function (event) {
        var customList = [];
        var contactListInformation = JSON.parse(localStorage.getItem('contacts'));
        
        var buildingListContainer = document.getElementById('sideList');

        if (event.target.value != "") {
            
            contactListInformation.results.forEach(function (currentItem, index) {
                if (currentItem.name.first.indexOf(event.target.value) !== -1) {
                    customList.push(currentItem);
                }
            });

            // build custom contact list 
            ContactMaster.buildContactList(customList, buildingListContainer);
        }else {
            
            // build all contact list 
            ContactMaster.buildContactList(contactListInformation.results, buildingListContainer);
        }
    });
}

/**
 * Build contact list
 */
ContactMaster.buildContactList = function(contactList, rootElement){

    rootElement.innerHTML = "";

    var ul = document.createElement('ul'),
        li = document.createElement('li'),
        img = document.createElement('img'),
        span = document.createElement('span'),
        list = document.createDocumentFragment();

    ul.className = "list-group";

    contactList.forEach(function (item, index) {
        var cloneImg = img.cloneNode(false);
        cloneImg.setAttribute('src', item.picture.thumbnail);
        cloneImg.className = "img-circle";

        var cloneLI = li.cloneNode(false);
        cloneLI.setAttribute('id', item.phone);

        cloneLI.className = "list-group-item";
        var nameSpan = span.cloneNode(false);
        nameSpan.setAttribute('id', item.phone);
        nameSpan.appendChild(document.createTextNode(item.name.first));
        cloneLI.appendChild(cloneImg);
        cloneLI.appendChild(nameSpan);
        list.appendChild(cloneLI);
    })

    ul.appendChild(list);
            
    rootElement.appendChild(ul);

    rootElement.addEventListener('click', function (event) {
        if (event.target) {
            var sideDetails = document.getElementById("sideDetails");
            sideDetails.style.display = 'block';
            var uniqueId = event.target.id;
            // get localstorage contact list
            var contactListInformation = JSON.parse(localStorage.getItem('contacts'));
            contactListInformation.results.forEach(function (currentItem, index) {
                if (currentItem.phone == uniqueId) {
                    document.getElementById('contactName').textContent = currentItem.name.first + " " + currentItem.name.last;
                    document.getElementById('contactLocation').textContent = currentItem.location.street + " " + currentItem.location.city + " " + currentItem.location.state + " " + currentItem.location.postcode;
                    document.getElementById('email').textContent = currentItem.email;
                    document.getElementById('contactPhone').textContent = currentItem.phone;
                    document.getElementById('contactNat').textContent = currentItem.nat;
                    document.getElementById('contactPicture').setAttribute('src', currentItem.picture.medium);
                }
            });
        }
    });
}


ContactMaster.prototype = Object.create(MasterContact.prototype);
var objContactmaster = new ContactMaster();

/**
 * on load application init function calling
 */
ContactMaster.init();

/**
 * on load get contact list API call
 */
objContactmaster.getList(function (contactList) {
    var buildingListContainer = document.getElementById('sideList');

    /**
     * build contact list DOM
     */
    ContactMaster.buildContactList(contactList.results, buildingListContainer);
});

