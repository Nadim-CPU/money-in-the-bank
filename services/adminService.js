
const Admin = require("../models/adminModel");
const AdminRepository = require("../repositories/adminRepository");


/* ----------------------------------------------------------------------------------------------
*  |                                           ADMIN SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/


class AdminService {


    static async createAdmin(admin) {

        try {
           return await AdminRepository.createAdmin(admin);
        } catch (e) {
            throw new Error(e);
        }

    }

    static async updateAdmin(admin) {

        try {
            return await AdminRepository.updateAdmin(admin);
        } catch (e) {
            throw new Error(e);
        }

    }

    static async getAdmin(id) {
        
        try {
            return await AdminRepository.getAdmin(id);
        } catch (e) {
            throw new Error(e);
        }

    }

    static async getAdmins() {

        try {
            return await AdminRepository.getAdmins();
        } catch (e) {
            throw new Error(e);
        }
    }

    static async deleteAdmin(id) {

        try {
            return await AdminRepository.deleteAdmin(id);
        } catch (e) {
            throw new Error(e);
        }

    }

}


module.exports = AdminService;