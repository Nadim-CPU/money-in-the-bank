
const Admin = require("../models/adminModel")

/* ----------------------------------------------------------------------------------------------
*  |                                        ADMIN REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/

class AdminRepository {


    /**
     * Creates New Admin
     * @param {Admin} admin 
     * @returns 
     */
    static async createAdmin(admin) {

        const createdAdmin = await Admin.create({
            adminNumber: admin.number,
            userID: admin.userID
        });
        return createdAdmin;
        
    }

    /**
     * Updates The Admin With A New Number/UserID
     * @param {Admin} admin 
     * @returns 
     */
    static async updateAdmin(admin) {

        const [updatedAdmin] = await Admin.update({
            adminNumber: admin.number,
            userID: admin.userID
        }, {
            where: { adminID: admin.id }
        }
        );
        return updatedAdmin;
    }

    /**
     * Gets An Admin Using Their ID
     * @param {int} id 
     * @returns 
     */
    static async getAdmin(id) {
        return await Admin.findByPk(id);
    }

    /**
     * Gets Every Admin
     * @returns 
     */
    static async getAdmins() {
        return await Admin.findAll();
    }

    /**
     * Deletes An Admin Using Their ID
     * @param {int} id 
     * @returns 
     */
    static async deleteAdmin(id) {
        return await Admin.destroy({
            where: { adminID: id }
        });
    }
}

module.exports = AdminRepository;