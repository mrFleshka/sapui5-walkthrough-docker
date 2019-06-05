/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "sapui5/walkthrough/test/unit/model/formatter"
    ], function () {
        QUnit.start();
    });
});