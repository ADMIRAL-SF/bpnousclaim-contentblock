
$(document).ready(function() {
    $('.js-example-basic-single').select2({
      placeholder: 'Select an option',
      width: '100%'
    });

    var issuance = $('#issuance_schedule');

    var issuanceSettings = $('#issuance_options');

    issuance.change(function(){ //when the rating changes
			var value= this.checked;						
			issuanceSettings.addClass('hidden'); //hide everything and reveal as needed
			
			if (value == 'on'){
				issuanceSettings.removeClass('hidden'); //show feedback_bad					
			}
		});	
});