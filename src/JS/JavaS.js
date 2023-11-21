document.addEventListener("DOMContentLoaded", function () {
    // Aguarda o evento "DOMContentLoaded" para garantir que o documento HTML foi totalmente carregado.

    const button = document.querySelector("button[type='submit']");
    // Seleciona o botão do tipo "submit" no documento.

    document.getElementById("formulario").addEventListener("submit", function (event) {
        // Adiciona um ouvinte de evento para o envio do formulário.

        event.preventDefault();
        // Impede o envio do formulário padrão para evitar que a página seja recarregada.

        const nome = document.getElementById("nome").value;
        const data = document.getElementById("data").value;
        const hora = document.getElementById("hora").value;
        const pessoas = document.getElementById("pessoas").value;
        const email = document.getElementById("email").value;
        // Obtém os valores dos campos do formulário.

        const reservaInfo = `Nome: ${nome}\nData: ${data}\nHora: ${hora}\nNúmero de Pessoas: ${pessoas}\nE-mail para Contato: ${email}`;
        // Cria uma string com as informações do formulário formatadas.

        const blob = new Blob([reservaInfo], { type: "text/plain" });
        // Cria um objeto Blob contendo as informações formatadas.

        const url = window.URL.createObjectURL(blob);
        // Cria um URL para o Blob, tornando-o acessível como um recurso de download.

        const a = document.createElement("a");
        a.href = url;
        a.download = "reserva.txt"; // Nome do arquivo a ser baixado.
        a.style.display = "none";   
        document.body.appendChild(a);
        // Cria um elemento de âncora invisível que aponta para o URL do Blob.

        a.click();
        // Simula um clique no elemento âncora para iniciar o download.

        window.URL.revokeObjectURL(url);
        // Libera o recurso do URL do Blob.

        document.getElementById("formulario").reset();
        // Redefine o formulário para limpar os campos após o envio.
    });
});
