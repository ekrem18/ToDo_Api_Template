"use strict"
/* ------------------------------------------------------- */
const router = require('express').Router()

// Call TODO Controller:
const todoTemplate = require('../controllers/todoTemplate')

// router.route('/')
//     .get(todoTemplate.list) // LIST
//     .post(todoTemplate.create) // CREATE

// router.route('/:id')
//     .get(todoTemplate.read) // READ
//     .put(todoTemplate.update) // UPDATE
//     .delete(todoTemplate.delete) // DELETE

router.get('/', todoTemplate.list)

router.get('/create', todoTemplate.create)

router.get('/:id', todoTemplate.read)

router.get('/:id/delete', todoTemplate.delete)



module.exports = router