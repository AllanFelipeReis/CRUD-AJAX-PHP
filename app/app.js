$(document).ready(function(){
 
    // app html
    var app_html=`
        <div class='container'>
 
            <div class='page-header'>
                <h1 id='page-title'>Lista de Funcionarios</h1>
            </div>
 
            <div id='page-content'></div>
 
        </div>`;
 
    $("#app").html(app_html);
 
});
 
// Troca o titulo
function changePageTitle(page_title){
 
    $('#page-title').text(page_title);
 
    document.title=page_title;
}
 
// Converte em json
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};