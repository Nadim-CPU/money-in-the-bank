

const UserRepository = require("../repositories/userRepository")

/* ----------------------------------------------------------------------------------------------
*  |                                            USER SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/


class UserService {

    static async createUser(user) {

        try {
            return await UserRepository.createUser(user);
        } catch(e) {
            throw new Error(e);
        }

    }

    static async changeUserPassword(user) {

        try {
           return await UserRepository.changeUserPassword(user);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async changeUserPhone(user) {

        try {
            return await UserRepository.changeUserPhone(user);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async changeUserAddress(user) {

        try {
            return await UserRepository.changeUserAddress(user);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async getUsers() {
        
        try {
            return await UserRepository.getUsers();
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getUser(id) {
        
        try {
            return await UserRepository.getUser(id);
        } catch (e) {
            throw new Error(e);
        }
    }
    static async readUser(id) {
        
        try {
           return await UserRepository.readUser(id);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async deleteUser(id) {

        try {
           return await UserRepository.deleteUser(id);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async authenticate(username, password) {
        
        try {
            return await UserRepository.authenticate(username, password)
        } catch(e) {
            throw new Error(e);
        }
    }

}


module.exports = UserService;