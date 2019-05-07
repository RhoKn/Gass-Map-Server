/*
    Controller created for test of cleaning the address of the api
    TODO: Delete this controller or change name for the real one and move the method cleanAddress() if needed.
*/

function cleanAddress(){

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
            "calle": "Libramiento Tepic-Mazatlán No. 48  Col. Rodeo de la Punta  Tepic",
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
            "calle": "Av. Tercer Anillo Periférico No. 151  Colonia Primavera",
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

    var colonia = "";
    var numero = "";
    var calle = "";
    var flag = false;

    var numeroRegex = /\No.+[0-9]/g;
    var coloniaRegex = /\Col.+[a-zA-Z0-9]/g;
    var i = 0;

    result.map(element => {
        console.log("calle: " + numeroRegex.exec(element.calle));
        console.log("colonia: " + coloniaRegex.exec(element.calle));
    });
}

cleanAddress();