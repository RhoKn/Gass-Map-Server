/*
    Controller created for test of cleaning the address of the api
    TODO: Delete this controller or change name for the real one and move the method cleanAddress() if needed.
*/

function cleanAddress(){
    /*
        Variables donde se guardaran las partes de la direccion
        TODO: Cambiar esto para que se adecue con el modelo segun corresponda.
    */
    let colonia = "";
    let numero = "";
    let calle = "";
    let ciudad = "";

    /*
        Regex
    */
    let numeroRegex = /\No\.+\s+[0-9]+/;
    let coloniaRegex = /\Col+[^a-np-z]+.+/;
    let calleRegex = /\No\.+\s+[0-9]+\s+\Col+[^a-np-z]+.+/;
    let ciudadRegex = /\Col.+\s\s/;
    /*
        Iteramos por cada elemento en el arreglo result
    */
    result.map(element => {
        // Se reemplaza la parte del string original que coincida con No.xxx Colxxx por nada para obtener solo la calle.
        calle = element.calle.replace(calleRegex, "");

        //Regex.exec retorna un arreglo con la parte del string que hizo match con la regex
        numero = numeroRegex.exec(element.calle)
        colonia = coloniaRegex.exec(element.calle)
        ciudad = colonia.toString().replace(ciudadRegex, "");

        ciudad = ciudad.toString();
        colonia = colonia[0].tocString().replace(ciudad, "");

        calle = calle.toString();
        numero = numero.toString();
        colonia = colonia.toString();

        console.log(calle);
        console.log(numero);
        console.log(colonia);
        console.log(ciudad);
        
    });
}

cleanAddress();