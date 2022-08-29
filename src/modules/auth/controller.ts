import { NextFunction, Response, Request } from "express";
import GithubService from "./github-service";
import GoogleService from "./google-service";
import UsersService from "../users/service";
import FacebookService from "./facebook-service";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import appConfig from "../../common/app-config";

class AuthController {
  private githubService: GithubService;
  private usersService: UsersService;
  private googleService: GoogleService;
  private facebookService: FacebookService;
  constructor() {
    this.githubService = new GithubService();
    this.usersService = new UsersService();
    this.googleService = new GoogleService();
    this.facebookService = new FacebookService();
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.authGithubCallback = this.authGithubCallback.bind(this);
  }

  public authGithubCallback = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const code = req.query.code as string;
      const githubUser = this.githubService.getGithubUser({ code });
      res.send(githubUser);
    } catch (err) {
      // console.log(err)
      res.send("ERROR");
    }
  };
  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      // const templates = await this.service.get()
      // return res.send(templates)
    } catch (err) {
      next(err);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      // const data = req.body
      // await designManager.loadShape(data)
      // const base64Image = await designManager.downloadTemplate()
      // const imageURL = await uploadImageToS3(base64Image)
      // const template = await this.service.create({ ...data, metadata: { ...data.metadata, preview: imageURL } })
      // return res.send(template)
    } catch (err) {
      next(err);
    }
  }

  public async remove(req: Request, res: Response, next: NextFunction) {
    // try {
    //   const id = req.params.id
    //   const template = await this.service.remove(id)
    //   return res.send(template)
    // } catch (err) {
    //   next(err)
    // }
  }
  public getUserByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.body.token;
    const decoded = jwt.verify(token, "secret") as any;

    const user = await this.usersService.findUserById(decoded.id);
    return res.send({
      object: "user",
      data: {
        ...user,
        token,
      },
      message: "current user",
    });
  };

  public getGoogleAuthURL = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const action = req.body.action;
      const googleAuthURL = this.googleService.getGoogleAuthURL({ action });
      res.send({
        object: "googleAuthURL",
        data: {
          url: googleAuthURL,
        },
        message: "created google auth url",
      });
    } catch (err) {
      next(err);
    }
  };

  public authGoogleCallback = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const code = req.query.code as string;
      const state = req.query.state as string;
      const { action } = JSON.parse(state);
      const googleUser = await this.googleService.getGoogleUser({ code });

      if (action === "signin") {
        const email = googleUser.email;
        const user = await this.usersService.findUser({ email });
        if (user) {
          const token = jwt.sign({ id: user.id }, "secret");
          res.redirect(
            `${appConfig.authRedirectUrl}?action=signin&token=${token}`
          );
        } else {
          return res.send({ object: "error", message: "Invalid credentials" });
        }
      } else {
        const email = googleUser.email;
        const user = await this.usersService.findUser({ email });
        if (user) {
          return res.send({
            object: "error",
            message: "email is in use",
          });
        }

        const savedUser = await this.usersService.createUser({
          ...googleUser,
          type: "GOOGLE",
        });
        const token = jwt.sign({ id: savedUser.id }, "secret");
        return res.send({
          object: "user",
          data: { ...savedUser, token },
          message: "signup success",
        });
      }
    } catch (err) {
      res.send("ERROR");
    }
  };

  public getFacebookAuthURL = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const action = req.body.action;
      const facebookAuthURL = this.facebookService.getFacebookAuthURL({
        action,
      });
      res.send({
        object: "facebookAuthURL",
        data: {
          url: facebookAuthURL,
        },
        message: "created facebookAuthURL",
      });
    } catch (err) {
      next(err);
    }
  };

  public authFacebookCallback = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const code = req.query.code as string;
      const action = req.query.action as string;
      const facebookUser = await this.facebookService.getFacebookUser({
        code,
        action,
      });
      if (action === "signin") {
        const email = facebookUser.email;
        const user = await this.usersService.findUser({ email });
        if (user) {
          const token = jwt.sign({ id: user.id }, "secret");
          return res.redirect(
            `${appConfig.authRedirectUrl}?action=signin&token=${token}`
          );
          // return res.send({
          //   object: "user",
          //   data: {
          //     ...user,
          //     token,
          //   },
          //   message: "signin success",
          // })
        } else {
          return res.send({ object: "error", message: "Invalid credentials" });
        }
      } else {
        const email = facebookUser.email;
        const user = await this.usersService.findUser({ email });
        if (user) {
          return res.send({
            object: "error",
            message: "email is in use",
          });
        }

        const savedUser = await this.usersService.createUser({
          ...facebookUser,
          type: "FACEBOOK",
        });
        const token = jwt.sign({ id: savedUser.id }, "secret");
        // return res.send({ object: "user", data: { ...savedUser, token }, message: "signup success" })
        return res.redirect(
          `${appConfig.authRedirectUrl}?action=signin&token=${token}`
        );
      }
    } catch (err) {
      // console.log(err)
      res.send("ERROR");
    }
  };

  public signin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userInfo = req.body;

      const user = await this.usersService.findUser({ email: userInfo.email });
      if (user) {
        const isMatch = await bcrypt.compare(userInfo.password, user.password);
        if (isMatch) {
          const token = jwt.sign({ id: user.id }, "secret");
          return res.send({
            object: "user",
            data: { ...user, token },
            message: "signin success",
          });
        }
      }
      return res.send({
        object: "error",
        message: "user not found",
      });
    } catch (err) {
      next(err);
    }
  };

  public signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body;
      const password = await bcrypt.hash(user.password, 8);
      const savedUser = await this.usersService.createUser({
        ...user,
        password: password,
        type: "regular",
        verified: false,
      });
      const token = jwt.sign({ id: savedUser.id }, "secret");
      return res.send({
        object: "user",
        data: { ...savedUser, token },
        message: "signup success",
      });
    } catch (err) {
      next(err);
    }
  };
}

export default AuthController;
