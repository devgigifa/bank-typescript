document.addEventListener("DOMContentLoaded", function() {
    let saldo = 3000;
    
    const elementoSaldo = document.querySelector(".saldo-valor .valor");
    if (elementoSaldo) {
        elementoSaldo.textContent = saldo;
    } else {
        console.error("Elemento para saldo não encontrado.");
    }

    const elementoFormulario = document.querySelector(".block-nova-transacao form");
    if (elementoFormulario) {
        elementoFormulario.addEventListener("submit", function(event) {
            event.preventDefault();

            if (!elementoFormulario.checkValidity()) {
                alert("Preencha todos os campos!");
                return;
            }

            const inputTipoTransação = elementoFormulario.querySelector("#tipoTransacao");
            const inputValor = elementoFormulario.querySelector("#valor");
            const inputData = elementoFormulario.querySelector("#data");

            let tipoTransação = inputTipoTransação.value;
            let valor = parseFloat(inputValor.value); // Certificando que o valor é numérico
            let data = inputData.value;

            if (tipoTransação === 'Depósito') {
                saldo += valor;
            } else if (tipoTransação === 'Transferência' || tipoTransação === 'Pagamento de Boleto') {
                saldo -= valor;
            } else {
                alert('Tipo de transação é inválido');
                return;
            }

            if (elementoSaldo) {
                elementoSaldo.textContent = saldo;
            }

            const novaTransacao = {
                tipoTransação: tipoTransação,
                valor: valor,
                data: data
            };

            console.log(novaTransacao);
            elementoFormulario.reset();
        });
    } else {
        console.error("Formulário não encontrado.");
    }
});
