sap.ui.define(['sap/m/MessageToast', 'sap/ui/core/mvc/Controller'],
	function (MessageToast, Controller){
	"use strict";

	var PageController = Controller.extend("sap.suite.ui.microchart.sample.ComparisonMicroChartSb.ComparisonMicroChartSb", {

		pressBar: function (oEvent) {
			MessageToast.show("The comparison micro chart bar is pressed.");
		},

		press: function (oEvent) {
			MessageToast.show("The comparison micro chart is pressed.");
		}

	});

	return PageController;

});