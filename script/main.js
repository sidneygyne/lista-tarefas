$(document).ready(function () {

    $('form').on('submit', function (e) {
        // console.log("submit")
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li style="display: none"></li>');

        $(`<h2>${novaTarefa}</h2>`).appendTo(novoItem);


        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#tarefa').val('')
    })

    // Evento de clique para riscar a tarefa 
    $(document).on('click', 'h2', function () {
        $(this).toggleClass('tachado');
});



})

