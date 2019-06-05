sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    // You can use return or extend declaration path (first param).
    return Controller.extend("sapui5.walkthrough.controller.App", {
        onOpenDialog : function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});