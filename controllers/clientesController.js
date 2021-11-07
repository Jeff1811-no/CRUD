import { promisify } from 'util'
import con from '../database/connection.js'

export const ncliente = async (req, res) => {
    const { NoIdentificacion, ClienteNombre, ClienteApellido, NoTelefono,idMunicipio } = req.body
    // construir la data que será insertada
    const data = {
        NoIdentificacion:NoIdentificacion, 
        ClienteNombre:ClienteNombre, 
        ClienteApellido: ClienteApellido, 
        NoTelefono: NoTelefono,
        idMunicipio: idMunicipio
    }
   
    con.query('INSERT INTO clientes SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }
        res.redirect('/clientes')
    })
}

export const ucliente = async(req,res,next) =>{
    const { clienteid, NoIdentificacion, ClienteNombre, ClienteApellido, NoTelefono,idMunicipio } = req.body
   con.query( 'UPDATE clientes SET  NoIdentificacion=?, ClienteNombre=?, ClienteApellido=?, NoTelefono=?,idMunicipio=? WHERE idCliente = ?',[NoIdentificacion, ClienteNombre, ClienteApellido, NoTelefono,idMunicipio, clienteid],(err, result)=>{
     res.redirect('/clientes')
   })
}

export const mcliente = async(req, res, next) =>{
    const { clienteid } = req.body
    con.query('SELECT * FROM clientes where idCliente = ?',[clienteid], async (err, result) => {
        // console.log(result);
          req.data =  result[0]
          next()
      })
}

export const bcliente = async(req, res) =>{
    const { clienteid } = req.body
    con.query('DELETE FROM clientes where idCliente = ?',[clienteid], async (err, result) => {
        // console.log(result);
          res.redirect("clientes")
      })
}

export const clientes = async (req, res, next) => {
    con.query('SELECT * FROM clientes', async (err, result) => {
      //console.log(result);
        //console.log(result[0].idCliente);
        req.Dcl =  result
        next()
        
    })  
}