$(document).ready(function(){
 
    $(document).on('click', '.read-one-person-button', function(){

        var id = $(this).attr('data-id');

        $.getJSON("http://localhost/CRUD-AJAX-PHP/api/pessoa/read_one.php?id=" + id, function(data){

        var read_one_person_html=`
        
            <div id='read-person' class='btn btn-primary pull-right read-person-button'>
                <span class='glyphicon glyphicon-list'></span> Listar Pessoas
            </div>

            <table class='table table-bordered table-hover'>
            
                <tr>
                    <td>Nome</td>
                    <td>` + data.name + `</td>
                </tr>
            
                <tr>
                    <td>CPF</td>
                    <td>` + data.cpf + `</td>
                </tr>
            
                <tr>
                    <td>Gênero</td>
                    <td>` + data.gender + `</td>
                </tr>
            
                <tr>
                    <td>Data de aniversario</td>
                    <td>` + data.birthDate + `</td>
                </tr>
            
            </table>`;
        $("#page-content").html(read_one_person_html);
            
        changePageTitle("Detalhes");
        });
    });
 
});