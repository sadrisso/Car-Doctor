import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect("users");
  const user = await userCollection.findOne({ email });

  if (!user) return { success: false, user: null };

  const isPasswordOk = await bcrypt.compare(password, user?.password);

  if (!isPasswordOk) return { success: false, password: null };

  return { success: true, user };

};
