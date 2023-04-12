const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const htmlContent = `<div>
<div id="1">
  <div class="d-inline-block">
    <p class="fw-bold">
      <a class="cursor-pointer" onclick="changeStep(1, 1)">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      Etapa <span class="text-primary" id="etapa">1</span> de 4
    </p>
  </div>
  <br />
  <div>
    <h3>Seja bem-vindo(a)!</h3>
  </div>
  <form id="form">
    <div>
      <div class="mb-3">
        <label for="email" class="form-label">Insira seu email</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon3">@</span>
          <input
            type="text"
            class="form-control"
            id="email"
            aria-describedby="basic-addon3 basic-addon4"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="pf">
            <label class="form-check-label" for="pf">
              Pessoa Física
            </label>
        </div>
      </div>
      <div class="col">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="pj" checked>
          <label class="form-check-label" for="pj">
            Pessoa Jurídica
          </label>
        </div>
      </div>
    </div>
    <br />
    <div class="d-grid gap-2 col-6 mx-auto">
      <button
        class="btn btn-primary"
        type="button"
        onclick="checkType()"
        
      >
        Continuar
      </button>
    </div>
  </form>
</div>
<div id="2" class="d-none">
  <div class="d-inline-block">
    <p class="fw-bold">
      <a class="cursor-pointer" onclick="changeStep(2, 1)">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      Etapa <span class="text-primary" id="etapa">2</span> de 4
    </p>
  </div>
  <br />
  <div>
    <h3>Pessoa Física</h3>
  </div>
  <div>
    <div class="mb-3">
      <label for="nome" class="form-label">Nome</label>
      <input
        type="text"
        class="form-control"
        id="nome"
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="cpf" class="form-label">CPF</label>
      <input
        type="text"
        class="form-control"
        id="cpf"
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="nasc" class="form-label">Data de Nascimento</label>
      <input
        type="text"
        class="form-control"
        id="nasc"
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="telefone" class="form-label">Telefone</label>
      <input
        type="text"
        class="form-control"
        id="telefone"
        aria-describedby="basic-addon3 basic-addon4"
      />
    </div>
  </div>
  <br />
  <div class="d-grid gap-2 col-6 mx-auto">
    <button
      class="btn btn-primary"
      type="button"
      onclick="checkData(false)"
    >
      Continuar
    </button>
  </div>
</div>
<div id="3" class="d-none">
  <div class="d-inline-block">
    <p class="fw-bold">
      <a class="cursor-pointer" onclick="changeStep(3, 1)">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      Etapa <span class="text-primary" id="etapa">2</span> de 4
    </p>
  </div>
  <br />
  <div>
    <h3>Pessoa Jurídica</h3>
  </div>
  <div>
    <div class="mb-3">
      <label for="razaoSocial" class="form-label">Razão Social</label>
      <input
        type="text"
        class="form-control"
        id="razaoSocial"
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="cnpj" class="form-label">CNPJ</label>
      <input
        type="text"
        class="form-control"
        id="cnpj"
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="abertura" class="form-label">Data de Abertura</label>
      <input
        type="text"
        class="form-control"
        id="abertura"
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="telefone" class="form-label">Telefone</label>
      <input
        type="text"
        class="form-control"
        id="telefonepj"
        aria-describedby="basic-addon3 basic-addon4"
      />
    </div>
  </div>
  <br />
  <div class="d-grid gap-2 col-6 mx-auto">
    <button
      class="btn btn-primary"
      type="button"
      onclick="checkData(true)"
    >
      Continuar
    </button>
  </div>
</div>
<div id="4" class="d-none">
  <div class="d-inline-block">
    <p class="fw-bold">
      <a class="cursor-pointer" onclick="document.getElementById('pf').checked ? changeStep(4, 2) : changeStep(4,3)">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      Etapa <span class="text-primary" id="etapa">3</span> de 4
    </p>
  </div>
  <br />
  <div>
    <h3>Senha de acesso</h3>
  </div>
  <div>
    <div class="mb-3">
      <label for="senha" class="form-label">Senha</label>
      <input
        type="text"
        class="form-control"
        id="senha"
        aria-describedby="basic-addon3 basic-addon4"
      />
    </div>
  </div>
  <br />
  <div class="d-grid gap-2 col-6 mx-auto">
    <button
      class="btn btn-primary"
      type="button"
      onclick="checkPassword()"
    >
      Continuar
    </button>
  </div>
</div>
<div id="5" class="d-none">
  <div class="d-inline-block">
    <p class="fw-bold">
      <a class="cursor-pointer" onclick="changeStep(5, 4)">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      Etapa <span class="text-primary" id="etapa">4</span> de 4
    </p>
  </div>
  <br />
  <div>
    <h3>Revise suas informações</h3>
  </div>
  <div>
    <div class="mb-3">
      <label for="emailFim" class="form-label">Email</label>
      <input
        type="text"
        class="form-control"
        id="emailFim"
        disabled
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="nomeFim" class="form-label">Nome/Razão Social</label>
      <input
        type="text"
        class="form-control"
        id="nomeFim"
        disabled
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="cnpjFim" class="form-label">CPF/CNPJ</label>
      <input
        type="text"
        class="form-control"
        id="cnpjFim"
        disabled
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="dataFim" class="form-label">Data de Nascimento/Abertura</label>
      <input
        type="text"
        class="form-control"
        id="dataFim"
        disabled
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="telefoneFim" class="form-label">Telefone</label>
      <input
        type="text"
        class="form-control"
        id="telefoneFim"
        disabled
        aria-describedby="basic-addon3 basic-addon4"
      />
      <label for="senhaFim" class="form-label">Senha</label>
      <input
        type="text"
        class="form-control"
        id="senhaFim"
        disabled
        aria-describedby="basic-addon3 basic-addon4"
      />
    </div>
  </div>
  <br />
  <div class="d-grid gap-2 col-6 mx-auto">
    <button
      class="btn btn-primary"
      type="button"
      onclick="sendData()"
    >
      Continuar
    </button>
  </div>
</div>
<br>
<div id="errorAlert" class="d-none alert alert-danger fade show" role="alert">
  <strong>Atenção!</strong> Preencha todos os campos!
</div>
<div id="successAlert" class="d-none alert alert-dismissible alert-success fade show" role="alert">
<strong>Uhul!</strong> Informações registradas com sucesso!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</div>`

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/registration', (req, res) => {
  res.send(htmlContent)
})

function isEmptyObject(obj) {
for (var key in obj) {
    if (!obj[key]) {
        return false;
    }
}
return true;
}

app.post('/registration', (req, res) => {
    console.log('Got body:', req.body);

    if(!isEmptyObject(req.body)) {
        return res.status(400).send({
            message: 'Preencha todos os campos!'
         });
    }
    res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})