$(document).ready(function(){
 
    $(document).on('click', '.create-person-button', function(){
        
        $.getJSON("http://localhost/CRUD-AJAX-PHP/api/pessoa/read.php", function(data){

            
        var create_person_html=`
            <div id='read-person' class='btn btn-primary pull-right read-person-button'>
                <span class='glyphicon glyphicon-list'></span> Listar Pessoas
            </div>

            <form id='create-person-form' action='#' method='post' border='0'>
                <table class='table table-hover table-responsive table-bordered'>
            
                    <tr>
                        <td>Name</td>
                        <td><input type='text' name='name' class='form-control' required /></td>
                    </tr>
            
                    <tr>
                        <td>CPF</td>
                        <td><input type='text' name='cpf' class='form-control' required /></td>
                    </tr>
            
                    <tr>
                        <td>Genero</td>
                        <td>
                            <select class='form-control' name='gender'>
                                <option value='Masculino'>Masculino</option>
                                <option value='Feminino'>Feminino</option>
                            </select>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Data de Aniversario</td>
                        <td><input type='date' name='birthDate' class='form-control' required /></td>
                    </tr>
        
                    <tr>
                        <td></td>
                        <td>
                            <button type='submit' class='btn btn-primary'>
                                <span class='glyphicon glyphicon-plus'></span> Cadastrar Pessoa
                            </button>
                        </td>
                    </tr>
            
                </table>
            </form>`;

            $("#page-content").html(create_person_html);
            
            changePageTitle("Cadastrar Pessoa");
        });
        
    });
 
    $(document).on('submit', '#create-person-form', function(){

        var form_data=JSON.stringify($(this).serializeObject());

        $.ajax({
            url: "http://localhost/CRUD-AJAX-PHP/api/pessoa/create.php",
            type : "POST",
            contentType : 'application/json',
            data : form_data,
            success : function(result) {
                showPeople();
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });
        
        return false;
    });
});
