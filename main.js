const http = require("http");
const axios = require('axios');

http.createServer((request,response)=> {
    if(request.url == "/api/proveedores")
    {
        axios({
            method: 'get',
            url: 'https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json',
            Headers: {"Content-Type":"aplication/json"}
        }).then((res)=>{
                const crearFilas  = (item)=>
                    `<tbody>
                    <tr>
                    <td>${item.idproveedor}</td>
                    <td>${item.nombrecompania}</td>
                    <td>${item.nombrecontacto}</td>
                    </tr>
                    </tbody>
                    `;

                const json = JSON.parse(JSON.stringify(res.data));
                const filas = json.map(crearFilas).join("");
                const htmlProveedor = (filas) => 
                ` <html>
                  <head>
                      <meta charset="UTF-8">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
                  </head>
                  <body>
                      <h1 style="text-align:center">Listado de proveedores</h1>
                      <table class="table table-striped">
                      <thead>
                          <tr>
                              <th>Id Proveedor</th>
                              <th>Nombre Compañía</th>
                              <th>Nombre Contacto</th>
                          </tr>
                      </thead>
                     ${filas}
                      </table>
                  </body>
                </html>
              `; 
                
                response.end(htmlProveedor(filas));
            })
    }
    else if(request.url == "/api/clientes"){
        axios({
            method: 'get',
            url: 'https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json',
            Headers: {"Content-Type":"aplication/json"}
        }).then((res)=>{
            const crearFilas  = (item)=>
            `<tbody>
            <tr>
            <td>${item.idCliente}</td>
            <td>${item.NombreCompania}</td>
            <td>${item.NombreContacto}</td>
            </tr>
            </tbody>
            `;

        const json = JSON.parse(JSON.stringify(res.data));
        const filas = json.map(crearFilas).join("");
        const htmlCliente = (filas) => 
                ` <html>
                  <head>
                      <meta charset="UTF-8">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
                  </head>
                  <body>
                      <h1 style="text-align:center">Listado de proveedores</h1>
                      <table class="table table-striped">
                      <thead>
                          <tr>
                              <th>Id Cliente</th>
                              <th>Nombre Compañía</th>
                              <th>Nombre Contacto</th>
                          </tr>
                      </thead>
                     ${filas}
                      </table>
                  </body>
                </html>
              `; 
              response.end(htmlCliente(filas));
            })
    }
    else{
        response.end("Ruta no valida")
    }


       
    
}).listen(8081);