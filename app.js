let userId, customEvent, customAttributeName, customAttributeValue;

//change user
document.getElementById("submit_userid").addEventListener("click", function () {
    userId = document.getElementById("change_userid").value;
    braze.changeUser(userId);
});

//log custom event
document.getElementById("submit_customevent").addEventListener("click", function () {
    customEvent = document.getElementById("add_customevent").value;
    braze.logCustomEvent(customEvent);

    alert("Submitted custom event to Braze: " + customEvent);
});

//log custom attribute
document.getElementById("submit_customattribute").addEventListener("click", function () {
    customAttributeName = document.getElementById("custom_attribute_name").value;
    customAttributeValue = document.getElementById("custom_attribute_value").value;
    braze.getUser().setCustomUserAttribute(customAttributeName, customAttributeValue);

    alert("Submitted custom attribute to Braze with name: " + customAttributeName + " and value: " + customAttributeValue);
});