/*
    Controller created for test of cleaning the address of the api
    TODO: Delete this controller or change name for the real one and move the method cleanAddress() if needed.
*/

function cleanAddress(){

    /*
        Sample
    */
    var result = [
        {
            "_id": "587fbd68edfe99480a072f14",
            "calle": "Av. Adolfo López Mateos No. 1604  Col. Melchor Ocampo  Juárez",
            "rfc": "DGA930823KD3",
            "date_insert": "2017-01-18T19:09:26.784Z",
            "regular": "15.71",
            "colonia": "",
            "numeropermiso": "PL/760/EXP/ES/2015",
            "fechaaplicacion": "",
            "permisoid": "2041",
            "longitude": "-106.4514",
            "latitude": "31.71947",
            "premium": "17.93",
            "razonsocial": "DÍAZ GAS  S.A. DE C.V.",
            "codigopostal": "32380",
            "dieasel": ""
        },{
            "_id": "587fbd68edfe99480a072f77",
            "calle": "Libramiento Nombre de Dios No. 48  Col. Rodeo de la Punta  Tepic",
            "rfc": "GOC9303301F4",
            "date_insert": "2017-01-18T19:09:26.860Z",
            "regular": "16.33",
            "colonia": "",
            "numeropermiso": "PL/420/EXP/ES/2015",
            "fechaaplicacion": "07/01/2017 01:35:00 p. m.",
            "permisoid": "2292",
            "longitude": "-104.9266",
            "latitude": "21.52014",
            "premium": "18.1",
            "razonsocial": "GRUPO OCTANO  S.A. DE C.V.",
            "codigopostal": "63117",
            "dieasel": ""
        },{
            "_id": "587fbd68edfe99480a072f76",
            "calle": "Av. Colmena Nombre de dios No. 151  Colonia Primavera  Springfield",
            "rfc": "GAS060322BI6",
            "date_insert": "2017-01-18T19:09:26.860Z",
            "regular": "16.14",
            "colonia": "",
            "numeropermiso": "PL/758/EXP/ES/2015",
            "fechaaplicacion": "",
            "permisoid": "2291",
            "longitude": "-103.7026",
            "latitude": "19.2684",
            "premium": "17.9",
            "razonsocial": "GASOPRIM S.A. DE C.V.",
            "codigopostal": "28015",
            "dieasel": ""
        }
    ]

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
        colonia = colonia[0].toString().replace(ciudad, "");

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