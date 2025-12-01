import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { secretKey, tokens} from './data';
import { RequestWithUser } from './types';
import { getUserData} from './generalFunctions';

// Middleware to authenticate JWT token
export function authenticateToken(req: RequestWithUser, res: Response, next: NextFunction) {
    const token: any = req.cookie.token
    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) {
            return res.sendStatus(401);
        }
        const payload = decoded as JwtPayload;
        if (token.lenght > 0 &&
            tokens.find(tokenUser => tokenUser.token === token && payload.username === tokenUser.username) !== undefined) {
                req.usermane = payload.username;
                req.userdata = getUserData(req.username as string);
                req.userRights = getUserRights(req.userdata?.role as string);
                next();
        }
        return res.sendStatus(401);
            });
    }

    /**
     * @param requiredRight
     * @returns
     */

    export function ChekRight(requiredRight: string) {
        return (req: RequestWithUser, res: Response, next: NextFunction) => {
            console.log('CHECK RIGHTS: ',req.userRights);
            console.log('RIGHTS:', req.userRights);

            if (req.userRights?.includes(requiredRight)) {
                next();
            } else {
                console.log('401 ===> INSUFFICIENT RIGHTS');
                return res.sendStatus(401);
            }
    }
}