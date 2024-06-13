class Login {

    url = `${helperClass.urlBase}/administradores`;

    async RealizarLogin() {

        var email = $('#email-login').val();
        var senha = $('#senha-login').val();

        var cadastros = await this.BuscarCadastros();

        $.each(cadastros, (index, cadastro) => {

            if (cadastro.senha == senha && cadastro.email == email) {
                cadastro.senha = null;

                localStorage.setItem('sessao', JSON.stringify(cadastro));
                location.href = "notas.html";
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

    RemoverSessao() {
        localStorage.removeItem('sessao');
        location.href = "index.html";
    }
}

var loginClass = new Login();

