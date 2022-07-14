
$(document).ready(function() {
    
   $('.js-example-basic-single').select2({
      placeholder: 'Select an option',
      width: '100%'
    });
	
   $("#start_date").datepicker();
   $("#start_date").datepicker("option", "dateFormat", "yy-mm-dd");

   $("input[name='valid_duration']").on('input', function(e) {
      $(this).val($(this).val().replace(/[^0-9]/g, ''));
   });

    var issuance = $('#issuance_schedule');

    var issuanceSettings = $('#issuance_options');

    issuance.change(function(){ //when the rating changes
			var value= this.checked;
			console.log(value);						
			issuanceSettings.addClass('hidden'); //hide everything and reveal as needed
			
			if (value == true){
				issuanceSettings.removeClass('hidden'); //show feedback_bad					
			}
		});	

    var redemption = $('#redemption_schedule');

    var redemptionSettings = $('#redemption_options');

    if ($('#redemption_schedule').is(':checked')) {
    	redemptionSettings.removeClass('hidden');
    }

    redemption.change(function(){ //when the rating changes
			var value= this.checked;
			console.log(value);						
			redemptionSettings.addClass('hidden'); //hide everything and reveal as needed
			
			if (value == true){
				redemptionSettings.removeClass('hidden'); //show feedback_bad					
			}
		});	

    var availability = $('#availability');

    var availabilitySettings = $('#availability_options');

    availability.change(function(){ //when the rating changes
			var value= this.checked;
			console.log(value);						
			availabilitySettings.addClass('hidden'); //hide everything and reveal as needed
			
			if (value == true){
				availabilitySettings.removeClass('hidden'); //show feedback_bad					
			}
		});	

    var multiclaim = $('#multiclaim');

    var multiclaimSettings = $('#multiclaim_options');

    multiclaim.change(function(){ //when the rating changes
			var value= this.checked;
			console.log(value);						
			multiclaimSettings.addClass('hidden'); //hide everything and reveal as needed
			
			if (value == true){
				multiclaimSettings.removeClass('hidden'); //show feedback_bad					
			}
		});	
});
