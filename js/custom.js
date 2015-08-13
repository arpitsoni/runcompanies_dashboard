/******************************************************************
Site Name: RUN COMPANIES
Author: archit@htmlexperts.co.in

Stylesheet: Main JS for Run Companies
******************************************************************/
$(document).ready(function() {
	
	// ----------------------------------------------functionaality for projects.html

	// functionality for showing and hiding the add member section
		$('#teamAddMember').hide();
		$('#addMemberTeam').click(function(){
			$('#teamAddMember').show();
			$('#teamDefault').hide();
		});
		$('#backBtnAddTeam').click(function() {
			$('#teamAddMember').hide();
			$('#teamDefault').show();
		});

});