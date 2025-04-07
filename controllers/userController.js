const User = require('../models/userModel')
const UserService = require('../services/userService')


class UserController {

    static async createUser(req, res) {

        try {
            const { firstName, lastName, username, password, phoneNbr, dob, address} = req.body;
            const user = { firstName, lastName, username, password, phoneNbr, dob, address };
            const result = await UserService.createUser(user);
            res.status(200).json(result);

        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async changeUserPassword(req, res) {

        try {
            const { id } = req.params;
            const { password } = req.body;

            const user = await UserService.readUser(id);
            // Check if such user exists
            if (!user) {
                return res.status(404).json({ message: "User not found"});
            }

            const result = await UserService.changeUserPassword({ id, password });
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async changeUserPhone(req, res) {

        try {
            const { id } = req.params;
            const { phoneNbr } = req.body;

            const user = await UserService.readUser(id);

            if (!user) {
                return res.status(404).json({ message: "User not found"})
            }

            const result = await UserService.changeUserPhone({ id, phoneNbr });
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async changeUserAddress(req, res) {

        try {
            const { id } = req.params;
            const { address } = req.body;


            const user = await UserService.readUser(id);

            if (!user) {
                return res.status(404).json({ message: "User not found"});
            }

            const result = await UserService.changeUserAddress({ address });
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async deleteUser(req, res) {
        
        try {
            const { id } = req.params;
            const result = await UserService.deleteUser(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getUsers(req, res){

        try {
            const result = await UserService.readUsers();
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: 'Internal Server error', Error: e.message});
        }
    }

    static async getUser(req, res){

        try {
            const {id} = req.params;
            const result = await UserService.readUser(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: 'Internal Server error', Error: e.message});
        }
    }


    static async login(req, res) {

        try {
            const { username, password } = req.body;
            const user = await UserService.authenticate(username, password);
            
            res.status(200).json({message: "Authenticated", user})
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Error Logging In! Are you sure you entered the right credentials?", error: e.message});
        }
    }
}

module.exports = UserController;