class MateriaClass {

    url = `${helperClass.urlBase}/materia`

    BuscarMaterias(materiaId) {
        try {

            return new Promise((resolve, reject) => {

                var url = materiaId ? `${this.url}/${materiaId}` : this.url;

                var settings = {
                    "url": url,
                    "method": "GET"
                }

                $.ajax(settings).done((response) => {

                    return resolve(response);

                }).fail(() => {
                    throw new Error("Erro ao buscar matérias.")
                })
            })
        }
        catch (e) {
            alert(e.error);
            console.error(e.error);
        }

    }

}
var materiaClass = new MateriaClass();