import express from 'express';


export class AuthRouter {
    constructor(authService) {
        this.authService = authService
    }

    router() {
        const router = express.Router()

        router.post('/login', this.login)
        router.post('/register', this.register);

        return router
    }

    login = async (req, res) => {
        try {
            const user = await this.authService.getUserByEmail(req.body.user.email)

            if (user[0]) {
                const userInfo = await this.authService.authenticateEmailAndPw(req.body.user)

                res.status(200).json({ userInfo: userInfo[0] })
            } else {
                res.status(401).json({ msg: "Email or password is not correct" });
                return;
            }

        } catch (e) {
            console.log(e)

            res.status(500).json({ msg: e.toString() })
        }
    }

    register = async (req, res) => {
        try {
            const userInfo = await this.authService.addUser(req.body.userInfo)

            res.status(200).json({ userInfo })
        } catch (e) {
            console.log(e)

            res.status(500).json({ msg: e.toString() })
        }
    }
}