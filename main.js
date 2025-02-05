// Seleciona o formulário e os elementos das mensagens de sucesso e erro
const form = document.getElementById('meu-formulario');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

// Garante que as mensagens comecem ocultas ao carregar a página
window.onload = function () {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
};

// Função que valida se o número B é maior que o número A
function validaNumero(numeroA, numeroB) {
    return numeroB > numeroA; // Retorna true se B for maior que A, senão retorna false
}

// Adiciona um evento ao formulário para capturar o envio
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o recarregamento da página ao enviar o formulário

    // Obtém os valores dos campos e converte para número
    const numeroA = parseFloat(document.getElementById('campoA').value);
    const numeroB = parseFloat(document.getElementById('campoB').value);

    // Verifica se o número B é maior que o número A
    if (validaNumero(numeroA, numeroB)) {
        // Exibe a mensagem de sucesso e esconde a de erro
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        // Exibe a mensagem de erro e esconde a de sucesso
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});
