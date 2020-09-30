$(document).ready(function(){
 
    $(document).on('click', '.delete-person-button', function(){
        
        var person_id = $(this).attr('data-id');

        bootbox.confirm({
        
            message: "<h4>Você tem certeza?</h4>",
            buttons: {
                confirm: {
                    label: '<span class="glyphicon glyphicon-ok"></span> Sim',
                    className: 'btn-danger'
                },
                cancel: {
                    label: '<span class="glyphicon glyphicon-remove"></span> Não',
                    className: 'btn-primary'
                }
            },
            callback: function (result) {
                if(result==true){
 
                    $.ajax({
                        url: "http://localhost/CRUD-AJAX-PHP/api/pessoa/delete.php",
                        type : "POST",
                        dataType : 'json',
                        data : JSON.stringify({ id: person_id }),
                        success : function(result) {
                 
                            showPeople();
                        },
                        error: function(xhr, resp, text) {
                            console.log(xhr, resp, text);
                        }
                    });
                 
                }
            }
        });
    });
});