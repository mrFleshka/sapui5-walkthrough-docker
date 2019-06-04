sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageToast"
], function (Button, MessageToast) {
    "use strict";
    var button = new Button({
        text: "GO",
        press: function () {
            MessageToast.show("Lets START!");
        },

    });
    button.placeAt("content");
});