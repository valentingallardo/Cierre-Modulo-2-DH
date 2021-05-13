let autos = [{
    marca: "Ford",
    modelo: "Fiesta",
    precio: 150000,
    km: 200,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido: false,
    }, {
    marca: "Toyota",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false,
    }]




let concesionaria = {
    autos: autos,
  
    buscarAuto: function(patente){
    const busqueda = autos.find(auto => {
        return auto.patente == patente
    })
    if (busqueda == undefined){
        return null;
    } else{
    return busqueda;
    }
},

    venderAuto: function(patenteBusq){
        const autoEncontrado = this.buscarAuto(patenteBusq);
        if (autoEncontrado) {autoEncontrado.vendido = true};
        },
}



    concesionaria.venderAuto("JJK116");
    console.log(concesionaria.autos);