"use strict";
/* ------------------------------------------------------- */
// npm i express-async-errors
require('express-async-errors')

const Todo = require('../models/todo')

const priority = {
    '1' : 'High', 
    '0' : 'Normal', 
    '-1': 'Low'
}

module.exports = {

    list: async (req, res) => {

        // const data = await Todo.findAll()
        const data = await Todo.findAndCountAll()       //---> todo mongoDB değilde Sequelize ile yapıldığı için farklı komutları kullanıyorum
        // public klasöründen çağırdığım dosya
        res.render('todoList', {data, priority})        //---> aslında apide kayıtlı bilgi var ancak template'e yansıtamıyordum. Burada todoList template'ine veri  
    },                                                  //---> gönderiyorum ki eşleşsin görüntülensin

    create: async (req, res) => {

        if (req.method == 'POST') {                     //---> metodum postsa yani form verileri geliyordur, datayı oluştur ve yönlendirmeyi yap diyorum
            // console.log(req.body)
            // Save:
            const data = await Todo.create(req.body)
            // Redirect homepage:
            res.redirect('/view')

        } else {                                        //---> eğer form verisi gelmiyorsa yani metod get ise ona göre yönlendiriyorum
            // Template:            
            res.render('todoCreate')                    
        }
    },

    read: async (req, res) => {

   
        
        const data = await Todo.findByPk(req.params.id)
    
        res.render('todoRead', {todo: data.dataValues, priority})
    
    },

    update: async (req, res) => {

        if (req.method == 'POST') {

            // Update:
            const isUpdated = await Todo.update(req.body, { where: { id: req.params.id } })
            
            // Redirect to home:
            res.redirect('/view')

        } else { // GET
            const data = await Todo.findByPk(req.params.id)                     //---> Forma tıkladığımda mevcut verinin gelmesi için seçim yapıyorum     
            // Template:
            res.render('todoUpdate', { todo: data })
        }
    },

    delete: async (req, res) => {

        // Model.destroy({ filter })
        const isDeleted = await Todo.destroy({ where: { id: req.params.id } }) //---> burada zaten filtreleme yapıp siliyorum. sonrasında yönlendirme kalıyor
        // redirect to homepage
        res.redirect('/view')
       
    }
}