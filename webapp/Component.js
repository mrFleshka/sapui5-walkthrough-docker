sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
], function (UIComponent, JSONModel, HelloDialog, Device) {
    "use strict";
    return UIComponent.extend("sapui5.walkthrough.Component", {
        metadata : {
            manifest: "json"
        },
        init : function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                recipient : {
                    name : "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            this.setModel(oDeviceModel, "device");

            // set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());

            // create the views based on the url/hash
            this.getRouter().initialize();
        },

        exit : function() {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog : function () {
            this._helloDialog.open();
        }
    });
});