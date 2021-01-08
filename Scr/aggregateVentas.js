/*Artículos de tipo A*/

db.ventaselectrodomesticos.aggregate([
    { $match: { Tipo: "A" }}
])

{ "_id" : ObjectId("5ff7241cc03cbe77d3c381b4"), "id" : 1, "Artículo" : "Impresora", "Tipo" : "A", "Precio Venta €" : 158, "Precio Compra €" : 95, "UD" : 27, "Fecha de venta" : ISODate("2000-08-23T00:00:00Z"), "Cliente" : "7", "Fabricante" : "Canon", "Premium" : true }
{ "_id" : ObjectId("5ff7241cc03cbe77d3c381b5"), "id" : 2, "Artículo" : "Ordenador", "Tipo" : "A", "Precio Venta €" : 685, "Precio Compra €" : 589, "UD" : 58, "Fecha de venta" : ISODate("2001-08-12T00:00:00Z"), "Cliente" : "1", "Fabricante" : "Lenovo", "VIP" : true }
{ "_id" : ObjectId("5ff7241cc03cbe77d3c381b6"), "id" : 3, "Artículo" : "Televisor", "Tipo" : "A", "Precio Venta €" : 1000, "Precio Compra €" : 859, "UD" : 80, "Fecha de venta" : ISODate("2002-08-04T00:00:00Z"), "Cliente" : "2", "Fabricante" : "Samnsung", "VIP" : true }
{ "_id" : ObjectId("5ff7241cc03cbe77d3c381c0"), "id" : 13, "Artículo" : "Impresora", "Tipo" : "A", "Precio Venta €" : 98, "Precio Compra €" : 50, "UD" : 6, "Fecha de venta" : ISODate("2001-05-23T00:00:00Z"), "Cliente" : "6", "Fabricante" : "Zanussi" }
{ "_id" : ObjectId("5ff7241cc03cbe77d3c381c1"), "id" : 14, "Artículo" : "Televisor", "Tipo" : "A", "Precio Venta €" : 839, "Precio Compra €" : 752, "UD" : 54, "Fecha de venta" : ISODate("2003-07-12T00:00:00Z"), "Cliente" : "4", "Fabricante" : "Lenovo", "VIP" : true }
{ "_id" : ObjectId("5ff7241cc03cbe77d3c381ca"), "id" : 23, "Artículo" : "Ordenador", "Tipo" : "A", "Precio Venta €" : 390, "Precio Compra €" : 259, "UD" : 26, "Fecha de venta" : ISODate("2002-08-04T00:00:00Z"), "Cliente" : "3", "Fabricante" : "Lenovo", "VIP" : true }
{ "_id" : ObjectId("5ff7241cc03cbe77d3c381cb"), "id" : 24, "Artículo" : "Ordenador", "Tipo" : "A", "Precio Venta €" : 847, "Precio Compra €" : 724, "UD" : 7, "Fecha de venta" : ISODate("2003-05-21T00:00:00Z"), "Cliente" : "7", "Fabricante" : "Samnsung" }
{ "_id" : ObjectId("5ff7241cc03cbe77d3c381cc"), "id" : 25, "Artículo" : "Televisor", "Tipo" : "A", "Precio Venta €" : 698, "Precio Compra €" : 521, "UD" : 4, "Fecha de venta" : ISODate("2000-08-23T00:00:00Z"), "Cliente" : "6", "Fabricante" : "Sony" }
{ "_id" : ObjectId("5ff7241cc03cbe77d3c381d0"), "id" : 29, "Artículo" : "Impresora", "Tipo" : "A", "Precio Venta €" : 56, "Precio Compra €" : 20, "UD" : 29, "Fecha de venta" : ISODate("2003-08-23T00:00:00Z"), "Cliente" : "2", "Fabricante" : "Zanussi" }


/* Tipos de artículos de tipo A*/

db.ventaselectrodomesticos.aggregate([
    { $match: { Tipo: "A" }},
    { $group: { _id: "$Artículo"}}
])

{ "_id" : "Impresora" }
{ "_id" : "Ordenador" }
{ "_id" : "Televisor" }


/* Precio máximo de artículos de tipo C*/
db.ventaselectrodomesticos.aggregate([
    { $match: { Tipo: "C" }},
    { $group: { _id: "$Artículo", PrecioMáximo: {$max:"$Precio Venta €"}}}
])

{ "_id" : "Secadora", "PrecioMáximo" : 758 }
{ "_id" : "Lavadora", "PrecioMáximo" : 785 }

/*veremos cuantas unidades se han vendido de cada producto*/

    db.ventaselectrodomesticos.aggregate([
          {$group:
            {_id: "$Artículo", UnidadesVendidas: { $sum: "$UD"}}}
 ])
 { "_id" : "Vitroceramica", "UnidadesVendidas" : 111 }
{ "_id" : "Microondas", "UnidadesVendidas" : 50 }
{ "_id" : "Televisor", "UnidadesVendidas" : 138 }
{ "_id" : "Batidora", "UnidadesVendidas" : 64 }
{ "_id" : "Secadora", "UnidadesVendidas" : 84 }
{ "_id" : "Aspiradora", "UnidadesVendidas" : 154 }
{ "_id" : "Frigorifico", "UnidadesVendidas" : 155 }
{ "_id" : "Impresora", "UnidadesVendidas" : 62 }
{ "_id" : "Lavadora", "UnidadesVendidas" : 264 }
{ "_id" : "Calefactor", "UnidadesVendidas" : 81 }
{ "_id" : "Ordenador", "UnidadesVendidas" : 91 }
{ "_id" : "Horno", "UnidadesVendidas" : 174 }


/* Pedido maximo de cada cliente*/

    db.ventaselectrodomesticos.aggregate([
        {$group:{ _id: "$Cliente", PedidoMaximo: { $max: { $multiply: [ "$Precio Venta €", "$UD" ] } },
              } },
            ])

            { "_id" : "4", "PedidoMaximo" : 45306 }
            { "_id" : "6", "PedidoMaximo" : 43200 }
            { "_id" : "2", "PedidoMaximo" : 80000 }
            { "_id" : "1", "PedidoMaximo" : 39730 }
            { "_id" : "5", "PedidoMaximo" : 76930 }
            { "_id" : "3", "PedidoMaximo" : 49920 }
            { "_id" : "7", "PedidoMaximo" : 39364 }

