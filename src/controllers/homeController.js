const db = require('../config/database')
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../service/CRUDService')

// Define: controller
const getHomePage = async (req, res) => {
    let result = await getAllUsers()
    return res.render('home.ejs', { listUsers: result })
}

const getThuanPage = (req, res) => {
    res.send('Hello Thu an dep gai!')
}

const getTestEjsPage = (req, res) => {
    res.render('sample.ejs')
}

const getCreateUserPage = (req, res) => {
    res.render('create.ejs')
}

const getUpdateUserPage = async (req, res) => {
    let userId = req.params.id
    let user = await getUserById(userId)
    console.log('>>> user', user)
    res.render('edit.ejs', { userEdit: user });
}

const creatUser = async (req, res) => {
    let { name, email, city } = req.body
    let user = await createUser(name, email, city)
    console.log('>>> you created a user:', user)
    res.send('Create user success!')
}

const updateUser = async (req, res) => {
    let { id, name, email, city } = req.body
    let result = await updateUserById(id, name, email, city)
    console.log('>>> you updated a user:', result)
    res.redirect('/')
}

const getDeleteUserPage = async (req, res) => {
    let userId = req.params.id
    let user = await getUserById(userId)
    res.render('delete.ejs', { userEdit: user });
}

const deleteUser = async (req, res) => {
    let userId = req.body.id
    let result = await deleteUserById(userId)
    console.log('>>> you deleted a user:', result)
    res.redirect('/')
}

// export controller
module.exports = {
    getHomePage, getThuanPage, getTestEjsPage, creatUser, getCreateUserPage,
    getUpdateUserPage, updateUser, getDeleteUserPage, deleteUser
}