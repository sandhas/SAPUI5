/*global QUnit*/

sap.ui.define([
	"aprendendo/aprendendo/controller/Aprendendo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Aprendendo Controller");

	QUnit.test("I should test the Aprendendo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
