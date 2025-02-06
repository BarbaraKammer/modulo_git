$(document).ready(function() {
    // Adicionar tarefa ao clicar no botão
    $('#form-tarefa').submit(function(e) {
        e.preventDefault(); // Evita o envio do formulário

        const tarefa = $('#tarefa').val(); // Pega o valor do input

        if (tarefa) {
            // Cria um novo item da lista
            const li = $('<li></li>').text(tarefa);

            // Adiciona o item na lista
            $('#lista-tarefas').append(li);

            // Limpa o campo de entrada
            $('#tarefa').val('');
        }
    });

    // Marcar tarefa como concluída (adicionando e removendo a linha no texto)
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
