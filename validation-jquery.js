jQuery(document).ready(function() {
	jQuery('input[name="register"]').click(function(e){
		var username = jQuery('input[name="username"]').val();
		var isValid = /^[a-zA-Z0-9_]*$/.test(username);
		if(isValid){

		}else{
			alert('Only this format [A-Z, a-z, 0-9, _] is allowed in username field.');
			e.preventDefault();
		}
	});
});
