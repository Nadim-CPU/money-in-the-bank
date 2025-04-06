

const UserRepository = require("../repositories/userRepository")

/* ----------------------------------------------------------------------------------------------
*  |                                            USER SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/


class UserService {

    static async createUser(user) {

        try {
            await UserRepository.createUser(user);
        } catch(e) {
            throw new Error(e);
        }

    }

    static async changeUserPassword(user) {

        try {
            await UserRepository.changeUserPassword(user);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async changeUserPhone(user) {

        try {
            await UserRepository.changeUserPhone(user);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async changeUserAddress(user) {

        try {
            await UserRepository.changeUserAddress(user);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async readUser(id) {
        
        try {
            await UserRepository.readUser(id);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async deleteUser(id) {

        try {
            await UserRepository.deleteUser(id);
        } catch(e) {
            throw new Error(e);
        }
    }

    static async authenticate(username, password) {
        
        try {
            await UserRepository.authenticate(username, password)
        } catch(e) {
            throw new Error(e);
        }
    }

}


module.exports = UserService;