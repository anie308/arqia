import { Request } from "express"
import { verifyToken } from "./token"

export const bearerExtractor = async function (req: Request) {
    const { authorization } = req.headers
    const bearerValue: any = authorization?.split(" ")[1]
    return await verifyToken(bearerValue)
}