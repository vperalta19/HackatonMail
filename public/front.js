$( document ).ready(function() {
});

$("form").submit(function(e){
    e.preventDefault();
    console.log('hola')
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/sendMail",
        contentType : 'application/json',
        dataType: 'json',
        data: JSON.stringify({ 
            "nombre": $("#nombre").val(), 
            "email" : $("#email").val()
        }),
        success: function(response) {

            // $("#feedback").removeClass('invisible');
            $("#feedback").html(response);

            if (response != "El correo fue enviado exitosamente") {
                $("#feedback").addClass('alert-danger');
            } else {
                $("#feedback").addClass('alert-success');
            }
            $("#form").trigger("reset");
        }
    });
})
