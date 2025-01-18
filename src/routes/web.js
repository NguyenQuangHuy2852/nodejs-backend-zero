// declare express
const express = require('express');

// declare router
const router = express.Router()

// import controller
const { getHomePage, getThuanPage, getTestEjsPage, creatUser, getCreateUserPage,
    updateUser, getUpdateUserPage, getDeleteUserPage, deleteUser } = require('../controllers/homeController')

// router.Method('/router', handler)

router.get('/', getHomePage)

router.get('/thuan', getThuanPage)

router.get('/testejs', getTestEjsPage)

router.get('/create', getCreateUserPage)

router.get('/update/:id', getUpdateUserPage)

router.get('/delete-user/:id', getDeleteUserPage)

//create user page
router.post('/create-user', creatUser)

router.post('/update-user', updateUser)

router.post('/delete-user', deleteUser)

//export router
module.exports = router