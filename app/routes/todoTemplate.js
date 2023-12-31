"use strict"
/* ------------------------------------------------------- */
const router = require('express').Router()

// Call TODO Controller:
const todoTemplate = require('../controllers/todoTemplate')



// router.get('/', todoTemplate.list)

// router.get('/create', todoTemplate.create)              
// router.post('/create', todoTemplate.create)                 //---> Form verilerini doldurup create butonuna bastıımda çalışacak olan route

// router.get('/:id', todoTemplate.read)

// router.get('/:id/update', todoTemplate.update)              //---> Form görüntüleme 
// router.post('/:id/update', todoTemplate.update)             //---> Formu işleme

// router.get('/:id/delete', todoTemplate.delete)

router.all('/', todoTemplate.list)
router.all('/create', todoTemplate.create)
router.all('/:id', todoTemplate.read)
router.all('/:id/update', todoTemplate.update)
router.all('/:id/delete', todoTemplate.delete)



module.exports = router