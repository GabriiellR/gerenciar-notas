class Login {

    url = `${helperClass.urlBase}/alunos`;

    CarregarInformacoesLogin() {
        var btnSignin = document.querySelector("#signin");
        var btnSignup = document.querySelector("#signup");

        var body = document.querySelector("body");


        btnSignin.addEventListener("click", function () {
            body.className = "sign-in-js";
        });

        btnSignup.addEventListener("click", function () {
            body.className = "sign-up-js";
        })
    }

     RealizarLogin() {


        var email = $('#email').val();
        var senha = $('#senha').val();

        var cadastros = this.BuscarCadastros();

        $.each(cadastros, (index, cadastro) => {

            if(cadastro.senha == senha && cadastro.email == email){
                alert('login bem-sucedio');
                return;
            }


            alert('Senha ou usuário inválidos')

        });
    }

    BuscarCadastros() {

        return new Promise((resolve, reject) => {

            var settings = {
                "url": this.url,
                "method": "GET"
            }

            $.ajax(settings).done((response) => {

                return resolve(response);

            }).fail(() => {
                alert('Erro ao realizar login');
            });
        })
    }

     CadastrarAluno() {

    }


}

var loginClass = new Login();

