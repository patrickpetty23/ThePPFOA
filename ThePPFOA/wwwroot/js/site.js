// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    $(document).on('keypress', function (e) {
        // Check if the Enter key is pressed
        if (e.which === 13) {
            // Trigger the click event on the submit button
            $('#submitBtn').click();
        }
    });
    $('#submitBtn').on('click', function () {
        var hours = $('#hours').val();
        var ammo9mm = $('#ammo9mm').val();
        var ammo556 = $('#ammo556').val();
        var ammo22lr = $('#ammo22lr').val();

        if (hours == "" || ammo9mm == "" || ammo556 == "" || ammo22lr == "") {
            alert('Please fill out all required fields.')
        }

        // Check if hours is a positive number.
        if ((!isNaN(hours) && hours > 0) || hours == "") {
            // Perform calculation here
            var totalCost = hours * 50; // Assuming $50 per hour
        }
        else {
            alert('Please enter a valid positive number for hours.');
        }

        // Check if 9mm ammo is a positive number.
        if ((!isNaN(ammo9mm) && ammo9mm >= 0) || ammo9mm == "") {
            totalCost += ammo9mm * 0.30; // Assuming $0.30 per 9mm bullet
        }
        else {
            alert('Please enter a valid positive number for 9mm ammo.');
        }

        // Check if 5.56 ammo is a positive number.
        if (!isNaN(ammo556) && ammo556 >= 0) {
            totalCost += ammo556 * 0.50; // Assuming $0.50 per 5.56 bullet
        }
        else {
            alert('Please enter a valid positive number for 5.56 ammo.');
        }

        // Check if 22LR ammo is a positive number.
        if (!isNaN(ammo22lr) && ammo22lr > 100) {
            totalCost += (ammo22lr - 100) * 0.05; // Assuming $0.50 per .22 LR bullet
        }
        else if (!isNan(ammo22lr) && ammo22lr >= 0 && ammo22lr <= 100) {
            totalCost = totalCost
        }
        else {
            alert('Please enter a valid positive number for 22LR ammo.');
        }

        $('#output').text('$' + totalCost.toFixed(2)); // Display result in the output box
        
    });

    $('#clearBtn').on('click', function() {
        // Clear input fields
        $('#hours').val('');
        $('#ammo9mm').val('');
        $('#ammo556').val('');
        $('#ammo22lr').val('');

        // Clear output box
        totalCost = ""
        $('#output').text(totalCost);

        // Reset focus to the hours input box
        $('#hours').focus();
    });


});