import dbConnect from "@/lib/dbConnect"

export const loginUser = async (payload) => {
    const {email, password} = payload;
    const userCollection = dbConnect("users")
    const user = await userCollection.findOne({email})

    if (user) {
        return {success: true, user}
    }

    return {success: false, user: null}
}