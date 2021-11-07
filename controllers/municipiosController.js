import { promisify } from 'util'
import con from '../database/connection.js'

export const nmunicipio = async (req, res) => {
    const { MunicipioNombre,CodigoPostal } = req.body
    // construir la data que será insertada
    const data = {
        MunicipioNombre:MunicipioNombre,
        CodigoPostal:CodigoPostal
    }
   
    con.query('INSERT INTO municipios SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            return
        }
        res.redirect('/municipios')
    })
}

export const umunicipio = async(req,res,next) =>{
    const { MunicipioNombre,CodigoPostal,idMunicipio } = req.body
   con.query( 'UPDATE municipios SET  MunicipioNombre=?,CodigoPostal=? WHERE idMunicipio = ?',[MunicipioNombre,CodigoPostal,idMunicipio],(err, result)=>{
     res.redirect('/municipios')
   })
}

export const mmunicipio = async(req, res, next) =>{
    const { idMunicipio } = req.body
    con.query('SELECT * FROM municipios where idMunicipio = ?',[idMunicipio], async (err, result) => {
        // console.log(result);
          req.data =  result[0]
          next()
      })
}

export const bmunicipio = async(req, res, next) =>{
    const { idMunicipio } = req.body
    con.query('DELETE FROM municipios where idMunicipio = ?',[idMunicipio], async (err, result) => {
        // console.log(result);
          res.redirect("municipios")
      })
}

export const municipios = async (req, res, next) => {
    con.query('SELECT * FROM municipios', async (err, result) => {
      //console.log(result);
        req.Dcl =  result
        next()
        
    })  
}