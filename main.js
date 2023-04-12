var xhr = new XMLHttpRequest();
var url = 'http://localhost:3000/registration'

xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data = this.responseText;

        document.querySelector('#content').innerHTML = data
    }

};

xhr.open('GET', url, true);
xhr.send();

function changeStep(currentStep, nextStep) {
    document.getElementById(currentStep).classList.add('d-none')
    
    document.getElementById(nextStep).classList.remove('d-none')

}

function checkType () {
    if(!document.querySelector('#email').value.trim().length) {
        document.querySelector('#errorAlert').classList.remove('d-none')
        return
    }
    if(document.querySelector('#pj').checked){
        changeStep(1, 3)
    } else if(document.querySelector('#pf').checked){
        changeStep(1, 2)
    }
    document.querySelector('#errorAlert').classList.add('d-none')
}

function checkData(pj) {
    if(pj) {
        if(!document.querySelector('#razaoSocial').value.trim().length
        || !document.querySelector('#abertura').value.trim().length
        || !document.querySelector('#cnpj').value.trim().length
        || !document.querySelector('#telefonepj').value.trim().length) {
            document.querySelector('#errorAlert').classList.remove('d-none')
            return;
        }
    
        changeStep(3,4)
    } else {
        if(!document.querySelector('#cpf').value.trim().length
        || !document.querySelector('#nasc').value.trim().length
        || !document.querySelector('#nome').value.trim().length
        || !document.querySelector('#telefone').value.trim().length) {
            document.querySelector('#errorAlert').classList.remove('d-none')
            return;
        }
    
        changeStep(2,4)

    }

    document.querySelector('#errorAlert').classList.add('d-none')
}

function checkPassword() {
    if(!document.querySelector('#senha').value.trim().length) {
        document.querySelector('#errorAlert').classList.remove('d-none')
        return;
    }
    document.querySelector('#emailFim').value = document.querySelector('#email').value

    if(document.getElementById('pj').checked) {
        document.querySelector('#nomeFim').value = document.querySelector('#razaoSocial').value
        document.querySelector('#telefoneFim').value = document.querySelector('#telefonepj').value
        document.querySelector('#dataFim').value = document.querySelector('#abertura').value
        document.querySelector('#cnpjFim').value = document.querySelector('#cnpj').value
    }
    if(document.getElementById('pf').checked) {
        document.querySelector('#nomeFim').value = document.querySelector('#nome').value
        document.querySelector('#telefoneFim').value = document.querySelector('#telefone').value
        document.querySelector('#dataFim').value = document.querySelector('#nasc').value
        document.querySelector('#cnpjFim').value = document.querySelector('#cpf').value
    }

    document.querySelector('#senhaFim').value = document.querySelector('#senha').value

    changeStep(4,5)

    document.querySelector('#errorAlert').classList.add('d-none')
}

function sendData () {
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        email: document.querySelector('#emailFim').value,
        nome: document.querySelector('#nomeFim').value,
        telefone: document.querySelector('#telefoneFim').value,
        data: document.querySelector('#dataFim').value,
        cnpj: document.querySelector('#cnpjFim').value,
        senha: document.querySelector('#senhaFim').value
    }));

    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return;
    
        if (this.status == 200) {
            var data = this.responseText;
            document.querySelector('#content').innerHTML = data
            document.querySelector('#successAlert').classList.remove('d-none')
        }
    
    };
}
