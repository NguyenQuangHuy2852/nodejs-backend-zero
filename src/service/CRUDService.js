const db = require('../config/database')

//view all users
const getAllUsers = async () => {
    let [result, fields] = await db.query('SELECT * FROM Users')
    return result
}

//create user
const createUser = async (name, email, city) => {
    try {
        let [rows, fields] = await db.query(
            `INSERT INTO Users (email, name, city)
             VALUES ('${email}', '${name}', '${city}')`
        );
        return rows
    } catch (error) {
        console.log('>>> error', error)
    }
}

//view user by id
const getUserById = async (userId) => {
    let [result, fields] = await db.query(`SELECT * FROM Users where id = '${userId}'`)
    let user = result && result.length > 0 ? result[0] : {}
    return user
}

//update user by id
const updateUserById = async (id, name, email, city) => {
    try {
        let [rows, fields] = await db.query(
            `UPDATE Users SET name = '${name}', email = '${email}', city = '${city}' WHERE id = '${id}'`
        );
        return rows
    } catch (error) {
        console.log('>>> error', error)
    }
}

//delete user by id
const deleteUserById = async (userId) => {
    try {
        let [rows, fields] = await db.query(`DELETE FROM Users WHERE id = '${userId}'`)
        return rows
    } catch (error) {
        console.log('>>> error', error)
    }
}

module.exports = {
    getAllUsers, getUserById, createUser, updateUserById, deleteUserById
}