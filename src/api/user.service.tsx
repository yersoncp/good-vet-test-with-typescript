import { IUser } from "../interfaces/user.interface"

export const findUserById = (id: number): Promise<IUser> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'John',
                email: 'jhon@genium.io'
            })
        }, 500)
    })
}
