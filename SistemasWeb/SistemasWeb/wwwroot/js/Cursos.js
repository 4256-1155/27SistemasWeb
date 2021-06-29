﻿
class Cursos extends Uploadpicture {

    RegistrarCurso() {

        var data = new FormData();
        data.append('Input.Nombre', $('#curNombre').val());
        data.append('Input.Descripcion', $('#curDescripcion').val());
        data.append('Input.Horas', $('#curHoras').val());
        data.append('Input.Costo', $('#curCosto').val());
        data.append('Input.Estado', $('#curEstado').val());
        data.append('Input.CategoriaID', $('#curCategoria').val());
        $.each($('input[type=file]')[0].files, (i, file) => {
            data.append('AvatarImage', file);
        });
        $.ajax({
            url: "GetCurso",
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: "POST",
            success:(result)=> {
                try {
                    var item = JSON.parse(result)
                    if (item.Code == "Done") {
                        window.location.href = "Cursos";

                    }
                    else {
                        document.getElementById("mensaje").innerHTML = item.Description;
                    }

                } catch (e) {
                    document.getElementById("mensaje").innerHTML = result;

                }

                console.log(result);

            }  

        });

    }
    EditCurso(curso, cat) {
        let j = 1;
        $("#curNombre").val(curso.Nombre);
        $("#curDescripcion").val(curso.Descripcion);
        $("#curHoras").val(curso.Horas);
        $("#curCosto").val(curso.Costo);
        $("#curEstado").prop("checked", curso.Estado);
        $("#curCursoID").val(curso.CursoID);
        this.Image = curso.Image;

        //Jalando las propiedades del curso al Modal...

    }

}
