// log_in.js
// Authentication js, not written yet, just a placeholder for now...
// David Lenkner, 2017

$(function() {

	// Not implemented yet, to-do is to put in log-in
	// Note, should be here via https

    $("#logInForm input").jqBootstrapValidation({
        preventSubmit: true,
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // Fail Message
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	.append("</button>");
            $('#success > .alert-danger').append("<strong>Sorry, invalid username/password combination, please try again.");
            $('#success > .alert-danger').append('</div>');
            // Clear all fields
            $('#logInForm').trigger("reset");
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
