class AlunoClass {

    url = `${helperClass.urlBase}/alunos`;
    instanciaAtual = [];

    BuscarAlunos(alunoId) {
        try {
            return new Promise((resolve, reject) => {

                var url = alunoId ? `${this.url}/${alunoId}` : this.url;

                var settings = {
                    "url": url,
                    "method": "GET"
                }

                $.ajax(settings).done((response) => {

                    return resolve(response);

                }).fail(() => {
                    throw new Error("Erro ao buscar alunos.")
                })
            })
        }
        catch (e) {
            alert(e.error);
            console.error(e.error);
        }

    }
}

var alunoClass = new AlunoClass();