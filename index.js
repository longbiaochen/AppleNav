/* =============================================================================
* Template/index.js
*
* ------------------------------------------------------------
* Copyright 2012 Exacloud, Inc.
* http://www.exacloud.cn/
* =========================================================================== */

// ================= GLOBAL VARIABLES ==========================================

// ================= INIT FUNCTIONS ============================================
$(function() {
	// start your codes here
	
});

// ================= UTILITY FUNCTIONS ==========================================
// string formatter
String.prototype.format = function() {
	var pattern = /\{\d+\}/g;
	var args = arguments;
	return this.replace(pattern, function(capture) {
		return args[capture.match(/\d+/)];
	});
}; 