
const Admin = require("../models/adminModel");
const AdminRepository = require("../repositories/adminRepository");


/* ----------------------------------------------------------------------------------------------
*  |                                           ADMIN SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/


class AdminService {


    static async createAdmin(admin) {

        try {
            await AdminRepository.createAdmin(admin);
        } catch (e) {
            throw new Error(e);
        }

    }

    static async updateAdmin(admin) {

        try {
            await AdminRepository.updateAdmin(admin);
        } catch (e) {
            throw new Error(e);
        }

    }

    static async getAdmin(id) {
        
        try {
            await AdminRepository.getAdmin(id);
        } catch (e) {
            throw new Error(e);
        }

    }

    static async getAdmins() {

        try {
            await AdminRepository.getAdmins();
        } catch (e) {
            throw new Error(e);
        }
    }

    static async deleteAdmin(id) {

        try {
            await AdminRepository.deleteAdmin(id);
        } catch (e) {
            throw new Error(e);
        }

    }

}


module.exports = AdminService;