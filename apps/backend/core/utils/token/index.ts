import { Configs } from "../../configs";
const jwt = require('jsonwebtoken');
import { randomBytes } from "crypto";


const secretKey = Configs.project.JWT.key

// Function to generate JWT token
export const generateToken = (payload: object, expiresIn: any) => {
    return jwt.sign(payload, secretKey, { expiresIn });
}

// Function to verify JWT token
export const verifyToken = (token: any) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        return { success: true, decoded };
    } catch (error) {
        return { success: false, error: 'Invalid token' };
    }
}

//Function to generate randomToken
export const generateRandomToken = (bytes:number) => {
    const token = randomBytes(bytes).toString("hex").toUpperCase()
    return token

}