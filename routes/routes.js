import express from 'express'
import { clientes,ncliente,mcliente, ucliente, bcliente } from '../controllers/clientesController.js'
import { municipios,nmunicipio,mmunicipio, umunicipio, bmunicipio } from '../controllers/municipiosController.js'
const router = express.Router()




//Clientes
//Traer Clientes
router.get('/clientes', clientes,(req, res) => {
    res.render('clientes', {clientes:req.Dcl})
})

router.get('/ncliente', (req, res) => {
    res.render('ncliente')
})
router.post('/mcliente',mcliente, (req, res) => {
    console.log(req.data);
    res.render('mcliente', {cliente:req.data})
})

//Municipios
router.get('/municipios', municipios,(req, res) => {
    res.render('municipios', {municipios:req.Dcl})
})

router.get('/nmunicipio', (req, res) => {
    res.render('nmunicipio')
})
router.post('/mmunicipio',mmunicipio, (req, res) => {
    console.log(req.data);
    res.render('mmunicipio', {municipio:req.data})
})



//Controllers Cliente
router.post('/ncliente',ncliente)
router.post('/ucliente',ucliente)
router.post('/bcliente',bcliente)
//Controllers Municipio
router.post('/nmunicipio',nmunicipio)
router.post('/umunicipio',umunicipio)
router.post('/bmunicipio',bmunicipio)

export default router