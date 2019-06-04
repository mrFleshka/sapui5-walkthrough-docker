sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";
    new ComponentContainer({
        name: "sapui5.walkthrough",
        settings : {
            id : "walkthrough"
        },
        async: true
    }).placeAt("content");
});