$(document).ready(function () {
    $('#RegistrationForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission behavior
        $('.error').text('');
        var isValid = true; // Initialize isValid to true

        // Validate name
        var name = $('#name').val();
        if (!name.trim() || !/^[A-Za-z ]+$/.test(name)) {
            $('#passmsg1').text('Name must not contain numbers or symbols').css('color','red');
            
            isValid = false;
        }

        // Validate email
        var email = $('#email').val();
        if (!isValidEmail(email)) {
            $('#invalid_email').text('Invalid email format');
            isValid = false;
        }

        // Validate password
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();
        if (!password || !confirmPassword) {
            $('#passmsg4').text('Passwords cannot be empty').css('color','red');
            isValid = false;
        } else if (password !== confirmPassword) {
            $('#passmsg5').text('Passwords do not match').css('color','red');
            isValid = false;
        }

        // Validate mobile number
        var mobile = $('#phone-no').val();
        if (!mobile.trim() || !/^[6-9]\d{9}$/.test(mobile)) {
            $('#passmsg2').text('Invalid mobile number').css('color','red');
            isValid = false;
        }

        // Validate message
        var message = $('#message').val();
        if (!message.trim()) {
            $('#passmsg3').text('Message is required').css('color','red');
            isValid = false;
        }

        // Check if all fields are filled
        if (!name.trim() || !email.trim() || !mobile.trim() || !message.trim() || !password || !confirmPassword) {
            $('#passmsg').text('All fields are required').css('color','red');
            isValid = false;
        }

        // If isValid is still true, proceed to add data to the table
        if (isValid) {
            var newRow = '<tr>' +
                '<td>' + ($('#userDataTable tbody tr').length + 1) + '</td>' +
                '<td>' + name + '</td>' +
                '<td>' + email + '</td>' +
                '<td>' + mobile + '</td>' +
                '<td>' + message + '</td>' +
                '<td>' + password + '</td>' +
                '</tr>';
            $('#userDataTable tbody').append(newRow);

            // Reset form fields
            $('#RegistrationForm')[0].reset();
        }
    });
});

// Function to validate email format
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Update character count on input
$('#message').on('input', function () {
    var charCount = $(this).val().length;
    $('#count').text(charCount + '/20');
});