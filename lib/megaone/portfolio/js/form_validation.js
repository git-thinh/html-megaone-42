
var name_validater = function validater(name){
    var check;
    //for name

    if(name != ""){

        if(name.match("^[a-zA-Z\(\) ]+$")){
            if(name.length<3){
                $("#error").removeClass('alert-success');
                $('input[id="candidate_name"]').removeClass('user-success');
                $('input[id="candidate_name"]').addClass('user-danger');
                $("#error").addClass('alert-danger');
                $("#error").text('Please enter atleast 3 character in Name');
                //return false;
                check=false;
            }else{
                $('input[id="candidate_name"]').removeClass('user-danger');
                $('input[id="candidate_name"]').addClass('user-success');
                $("#error").removeClass('alert-danger');
                $("#error").addClass('alert-success');
                $("#error").text('Looking nice');
                //return true;
                check=true;
            }
        }else{
            $("#error").removeClass('alert-success');
            $('input[id="candidate_name"]').removeClass('user-success');
            $('input[id="candidate_name"]').addClass('user-danger');
            $("#error").addClass('alert-danger');
            $("#error").text('Name contains only alphabet');
            //return false;
            check=false;
        }
        ////end name
        //last
    }else{
        $("#error").removeClass('success');
        $('input[id="candidate_name"]').removeClass('user-success');
        $('input[id="candidate_name"]').addClass('user-danger');
        $("#error").addClass('alert-danger');
        $("#error").text('Name is empty');
        check=false;
    }

    return check;
}

//email validator
var validateEmail = function(elementValue) {
    var emailPattern = /^[a-zA-Z].[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}
var email_validater = function validater(email){
    var check;
    if(email != ""){
        var valid = validateEmail(email);

        if (!valid) {

            $("#error").removeClass('alert-success');
            $('input[id="user_email"]').removeClass('user-success');
             $('input[id="user_email"]').addClass('user-danger');
            $("#error").addClass('alert-danger');
            $("#error").text('Wrong Format Email');
            check=false;

        } else {
            $("#error").removeClass('alert-danger');
            $('input[id="user_email"]').removeClass('user-danger');
            $('input[id="user_email"]').addClass('user-success');
            $("#error").addClass('alert-success');
            $("#error").text('Looking Good');
            check=true;

        }
    }else{
        $("#error").removeClass('alert-success');
        $('input[id="user_email"]').removeClass('user-success');
        $('input[id="user_email"]').addClass('user-danger');
        $("#error").addClass('alert-danger');
        $("#error").text('Email is Required');
        check=false;
    }
    return check;
}

//subject
var sub_validater = function validater(sub){
    var check;
    //for name

    if(sub != ""){


                $('input[id="user_subject"]').removeClass('user-danger');
                $('input[id="user_subject"]').addClass('user-success');
                $("#error").removeClass('alert-danger');
                $("#error").addClass('alert-success');
                $("#error").text('Looking nice');
                check=true;

    }else{
        $("#error").removeClass('alert-success');
        $('input[id="user_subject"]').removeClass('user-success');
        $('input[id="user_subject"]').addClass('user-danger');
        $("#error").addClass('alert-danger');
        $("#error").text('Subject is Required');
        check=false;
    }

    return check;
}

//message validator

var msg_validater = function validater(msg){
    var check;
    //for name

    if(msg != ""){


        $('textarea[id="user_message"]').removeClass('user-danger');
        $('textarea[id="user_message"]').addClass('user-success');
        $("#error").removeClass('alert-danger');
        $("#error").addClass('alert-success');
        $("#error").text('Looking Nice');
        check=true;

    }else{
        $("#error").removeClass('alert-success');
        $('textarea[id="user_message"]').removeClass('user-success');
        $('textarea[id="user_message"]').addClass('user-danger');
        $("#error").addClass('alert-danger');
        $("#error").text('Message is Required');
        check=false;
    }

    return check;
}


// main function
function user_register_validate(){

    var name=$("#candidate_name").val();
    var email=$("#user_email").val();
    var subject=$("#user_subject"). val();
    var msg=$("#user_message").val();



    var getname=name_validater(name);
    if(getname){
        var getemail=email_validater(email);
        if (getemail){
            var getsub=sub_validater(subject);
            if(getsub) {
                var getmsg=msg_validater(msg);
                if(getmsg) {
                    var post_data = {
                        'userName': name,
                        'userEmail': email,
                        'userSubject': subject,
                        'userMessage': msg
                    };

                    //disable submit button on click
                    $(".user-contact").attr("disabled", "disabled");
                    $("#error").text('Sending');
                    $(".user-contact").text('Sending ....');

                    //////Ajax post data to server
                    $.post('contact.php', post_data, function (response) {


                        //alert(JSON.parse(response));
                        var  output;
                        // load json data from server and output message
                        if (response.type == 'error') {

                            output = '<div class="alert-danger">' + response.text + '</div>';
                        } else {

                            output = '<div class="alert-success">' + response.text + '</div>';

                            //reset values in all input fields
                            $('.contact-form input').val('');
                            $('.contact-form textarea').val('');
                        }

                        $("#error").hide().html(output).slideDown();

                        // enable submit button on action done
                        $(".user-contact").removeAttr("disabled");
                        $(".user-contact").text('SUBMIT');

                    },'json');


                }
            }
        }

    }
    else{
        // alert("fail");
    }





}

// function yahooo(){
    // alert("yes");
// }


// contact form

