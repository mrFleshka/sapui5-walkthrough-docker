sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    // You can use return or extend declaration path (first param).
    return Controller.extend("sapui5.walkthrough.controller.App", {
        onShowHello : function () {
            MessageToast.show("Hello World");
        }
    });
});