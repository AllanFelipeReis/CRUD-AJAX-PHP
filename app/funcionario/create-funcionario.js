$(document).ready(function(){
 
    $(document).on('click', '.create-employee-button', function(){
        
        $.getJSON("http://localhost/CRUD-AJAX-PHP/api/funcionario/read.php", function(data){

            
        var create_employee_html=`
            <div id='read-employee' class='btn btn-primary pull-right read-employee-button'>
                <span class='glyphicon glyphicon-list'></span> Listar Funcionários
            </div>

            <form id='create-employee-form' action='#' method='post' border='0'>
                <table class='table table-hover table-responsive table-bordered'>
            
                    <tr>
                        <td>Nome</td>
                        <td><input type='text' name='name' class='form-control' required /></td>
                    </tr>
            
                    <tr>
                        <td>CPF</td>
                        <td><input type='text' name='cpf' class='form-control' required /></td>
                    </tr>
            
                    <tr>
                        <td>Gênero</td>
                        <td>
                            <select class='form-control' name='gender'>
                                <option value='Masculino'>Masculino</option>
                                <option value='Feminino'>Feminino</option>
                            </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Data de Nascimento</td>
                        <td><input type='date' name='birthDate' class='form-control' required /></td>
                    </tr>
        
                    <tr>
                        <td></td>
                        <td>
                            <button type='submit' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-plus'></span> Cadastrar
                            </button>
                        </td>
                    </tr>
            
                </table>
            </form>`;

            $("#page-content").html(create_employee_html);
            
            changePageTitle("Cadastro");
        });
        
    });
 
    $(document).on('submit', '#create-employee-form', function(){

        var form_data=JSON.stringify($(this).serializeObject());

        $.ajax({
            url: "http://localhost/CRUD-AJAX-PHP/api/funcionario/create.php",
            type : "POST",
            contentType : 'application/json',
            data : form_data,
            success : function(result) {
                showFuncionario();
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
        
        return false;
    });
});
