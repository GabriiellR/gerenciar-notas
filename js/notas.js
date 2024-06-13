class NotasClass {

    url = `${helperClass.urlBase}/notas`;

    CarregarTelaNotas() {
        this.BuscarInformacoesParaMontarTabela();
        this.InicializarComponentes();
    }


    async BuscarInformacoesParaMontarTabela() {

        var notas = await this.BuscarNotas();
        var alunos = await alunoClass.BuscarAlunos();
        var materias = await materiaClass.BuscarMaterias();
        var elemento = $('#notas');

        var datatable = new DataTable(elemento, {
            "data": notas,
            "columns": [
                {
                    "data": "id"
                }, {
                    "data": "alunoId",
                    render(alunoId) {

                        var aluno = alunos.find((aluno) => {
                            return aluno.id == alunoId
                        })

                        return aluno.nome
                    }
                },
                {
                    "data": "notaId"
                }, {
                    "data": "materiaId",
                    render(materiaId) {

                        var materia = materias.find((materia) => {
                            return materia.id == materiaId
                        })

                        return materia.nome
                    }
                }
            ]

        })
    }

    BuscarNotas() {
        try {

            return new Promise((resolve, reject) => {

                var settings = {
                    "url": this.url,
                    "method": "GET"
                }

                $.ajax(settings).done((response) => {

                    return resolve(response);

                }).fail(() => {
                    throw new Error("Erro ao buscar notas.")
                })
            })
        }
        catch (e) {
            alert(e.error);
            console.error(e.error);
        }
    }


    InicializarComponentes() {
        $('.dropdown-trigger').dropdown();
        $('.modal').modal();
    }
}
var notasClass = new NotasClass();