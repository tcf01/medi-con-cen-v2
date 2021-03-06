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
            const userInfo = await this.authService.authenticateEmailAndPw(req.body.loginInfo)
            

            if (userInfo.length > 0) {
                res.json(userInfo[0])
            } else {
                res.json({ msg: "Email or password is not correct" });
            }
        } catch (e) {
            console.log(e)

            res.json({ msg: e.toString() })
        }
    }

    register = async (req, res) => {
        try {
            const userInfo = await this.authService.addUser(req.body.registerInfo)

            res.status(200).json({ userInfo })
        } catch (e) {
            console.log(e)

            res.json({ msg: e.toString() })
        }
    }
}