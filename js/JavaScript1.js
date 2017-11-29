$(window).load(function() {

    setTimeout(function() {
		var widthSize=$( window ).width()*.8;
		$('#colorPickerDiv').css({
		'width': widthSize,
		'height': widthSize
		});
		$('#colorPickerInput').wheelColorPicker({ 
		format: 'hsv',
		sliders: 'w',
		layout: 'block',
		autoResize: false,
		cssClass: 'picker'
	});
	
    }, 20);
}); 