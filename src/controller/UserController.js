const User = require('../models/user')
var crypto = require('crypto');

module.exports = {

    async createUser(req, res) {
        var { name, email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if (user)
            return res.status(200).send({ error: 'User early existis ' });

        try {

            const hash = crypto
                .createHash('sha256')
                .update(password)
                .digest('hex');
                
            password = hash;

            const user = await User.create({ name, email, password })
            res.send(user)
        } catch (err) {
            res.status(400).send({ error: 'Registration failed ' + err });
        }
    },

    async userListing(req, res) {
        const { id } = req.params

        const user = await User.findOne({ where: { id } })

        if (!user)
            return res.status(400).send({ error: 'User early existis ' });

        try {
            const user = await User.findOne({ where: { id } })
            res.send(user)
        } catch (err) {
            res.status(400).send({ error: 'User Listing failed ' + err });
        }
    },

    async userListingAll(req, res) {

        var { email, password } = req.body


        const user = await User.findOne({ where: { email } })
        const pass = user.dataValues.password

        const hash = crypto.createHash('sha256').update(password).digest('hex');
        password = hash;

        if (pass != password)
            return res.status(400).send({ error: 'Invalid password' });

        try {
            const user = await User.findAll()
            res.send(user)
        } catch (err) {
            res.status(400).send({ error: 'User Listing failed ' + err });
        }
    },

    async updateUser(req, res) {
        const { id } = req.params
        const { name, email, password } = req.body
        const user = await User.findOne({ where: { id } })

        if (!user)
            return res.status(400).send({ error: 'User not existis ' });

        try {
            const user = await User.update({ name, email, password }, { where: { id } })
            res.status(200).send({ error: 'update sucess ' });
        } catch (err) {
            res.status(400).send({ error: 'update failed ' + err });
        }

    },

    async deleteUser(req, res) {
        const { id } = req.params

        const user = await User.findOne({ id })

        if (!user)
            return res.status(400).send({ error: 'User not existis ' });

        try {
            const user = await User.destroy({ where: { id } })
            res.status(200).send({ error: 'user successfully deleted ' });
        } catch (err) {
            res.status(400).send({ error: 'fails to delete user ' + err });
        }

    },

}