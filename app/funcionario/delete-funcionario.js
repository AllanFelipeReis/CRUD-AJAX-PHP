$(document).ready(function(){
 
    $(document).on('click', '.delete-employee-button', function(){
        
        var employee_id = $(this).attr('data-id');

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
                        url: "http://localhost/CRUD-AJAX-PHP/api/funcionario/delete.php",
                        type : "POST",
                        dataType : 'json',
                        data : JSON.stringify({ id: employee_id }),
                        success : function(result) {
                 
                            showFuncionario();
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