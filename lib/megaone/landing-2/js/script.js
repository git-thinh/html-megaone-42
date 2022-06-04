
//****************COUNT DOWN START**************************

if ($(".count_down").length) {
    $('.count_down').downCount({
        date: '12/17/2019 12:17:00',
        offset: +10
    });
}


//*************CONTACT FORM DATA SEND**********/

function send_mail() {
    var email=$("#user_email").val();

    var post_data = {
        'userEmail': email
    };
    $("#error").text('Sending');

//////Ajax post data to server
    $.post('landing-2/contact.php', post_data, function (response) {

        var  output;
        // load json data from server and output message
        if (response.type == 'error') {

            output = '<div class="alert-danger">' + response.text + '</div>';
        } else {

            output = '<div class="alert-success">' + response.text + '</div>';

            //reset values in all input fields
            $('.user_email input').val('');
        }

        $("#error").hide().html(output).slideDown();

    },'json');


}