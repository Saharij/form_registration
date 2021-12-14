import ScrollOut from "scroll-out";

ScrollOut({
  parallax: true,
});

$(document).ready(function() {

  $("#form").validate({
    rules: {
      first_name: {
        required: true,
        minlength: 2,
      },
      last_name: {
        required: true,
        minlength: 2,
      },
      country: {
        required: true,
      },
      phone: "required",
      password: {
        required: true,
        minlength: 5,
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password",
      },
      email: {
        required: true,
        validEmail: true,
      },

      errorPlacement: function(label, element) {
        label.addClass('arrow');
        label.insertAfter(element);
      },
      wrapper: 'span'
    }
  });

})

jQuery.validator.addMethod("validEmail", function(value, element) {
  return this.optional(element) || /^.+@gmail.com$/.test(value);
}, "Only someEmail@gmail.com email addresses are allowed")
