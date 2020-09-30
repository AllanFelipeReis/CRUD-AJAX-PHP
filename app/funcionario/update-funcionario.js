$(document).ready(function(){
 
    $(document).on('click', '.update-employee-button', function(){

        var id = $(this).attr('data-id');

        $.getJSON("http://localhost/CRUD-AJAX-PHP/api/funcionario/read_one.php?id=" + id, function(data){
        
            var name = data.name;
            var cpf = data.cpf;
            var gender = data.gender;
            var birthDate = data.birthDate;
            
            var genders = ['Masculino', 'Feminino'];
            
            if (gender == 'Feminino'){
                genders = ['Feminino', 'Masculino'];
            }

            var update_employee_html=`
                <div id='read-employee' class='btn btn-primary pull-right read-employee-button'>
                    <span class='glyphicon glyphicon-list'></span> Listar Funcionários
                </div>

                <form id='update-employee-form' action='#' method='post' border='0'>
                    <table class='table table-hover table-responsive table-bordered'>
                
                        <tr>
                            <td>Nome</td>
                            <td><input value=\"` + name + `\" type='text' name='name' class='form-control' required /></td>
                        </tr>
                        
                        <tr>
                            <td>CPF</td>
                            <td><input value=\"` + cpf + `\" type='text' name='cpf' class='form-control' required /></td>
                        </tr>
                            <tr>
                                <td>Gênero</td>
                                    <td>
                                        <select class='form-control' name='gender'>
                                            <option value='` + genders[0] + `'>` + genders[0] + `</option>
                                            <option value='` + genders[1] + `'>` + genders[1] + `</option>
                                        </select>
                                    </td>
                        </tr>
                
                        <tr>
                            <td>Data de Nascimento</td>
                            <td><input value=\"` + birthDate + `\" type='date' name='birthDate' class='form-control' required /></td>
                        </tr>

                        <tr>
                
                            <td><input value=\"` + id + `\" name='id' type='hidden' /></td>
                
                            <td>
                                <button type='submit' class='btn btn-info'>
                                    <span class='glyphicon glyphicon-edit'></span> Atualizar
                                </button>
                            </td>
                
                        </tr>
                
                    </table>
                </form>`;
            $("#page-content").html(update_employee_html);
            
            changePageTitle("Atualizar");
        });
        });
    });
     
    $(document).on('submit', '#update-employee-form', function(){
        
        var form_data=JSON.stringify($(this).serializeObject());

        $.ajax({
            url: "http://localhost/CRUD-AJAX-PHP/api/funcionario/update.php",
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