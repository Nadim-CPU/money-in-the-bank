
const User = require("../models/userModel");

/* ----------------------------------------------------------------------------------------------
*  |                                         USER REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/
class UserRepository {
    
    /**
     * Creates New User
     * @param {User} user 
     * @returns createdUser
     */
    static async createUser(user) {

        const createdUser = await User.create({
            userFirstName: user.firstName,
            userLastName: user.lastName,
            userUserName: user.username,
            userPassword: user.password,
            userPhoneNbr: user.phoneNbr,
            userDOB: user.dob,
            userAddress: user.address
        });
        return createdUser;

    }

    /**
     * Changes a User's Password
     * @param {User} user 
     * @returns 
     */
    static async changeUserPassword(user) {
        const [changedUser] = await User.update({
            userPassword: user.password
        }, {
            where: { userID: user.id }
        }
        );
        return changedUser;
    }
    /**
     * Updates A User's Phone Number
     * @param {User} user 
     * @returns updatedUser 
     */
    static async changeUserPhone(user) {
        const [updatedUser] = await User.update({
            userPhoneNbr: user.phoneNbr
        }, {
            where: { userID: user.id }
        }
        );
        return updatedUser;
    }

    /**
     * Updates a User's Address
     * @param {User} user 
     * @returns updatedUser
     */
    static async changeUserAddress(user) {
        const [updatedUser] = await User.update({
            userAddress: user.address
        }, {
            where: { userID: user.id }
        }
        );
        return updatedUser;
    }

    /**
     * Gets a User Using Their ID
     * @param {int} id 
     * @returns 
     */
    static async getUser(id) {
        return await User.findByPk(id);
    }

    /**
     * Gets Every User In The DB
     * @returns allUsers
     */
    static async getUsers() {
        return await User.findAll();
    }

    /**
     * Deletes A User Using Their ID
     * @param {int} id
     * 
     */
    static async deleteUser(id) {
        return await User.destroy({
            where: { userID: id }
        }
        );
    }

    /**
     * Authenticates The Login To Ensure Right User Login
     * @param {String} username 
     * @param {String} password 
     * @returns 
     */
    static async authenticate(username, password) {
        return await User.findAll({ 
            where: { userUserName: username, userPassword: password } 
        }
        );
    }
}


module.exports = UserRepository;