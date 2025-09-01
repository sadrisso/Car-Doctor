"use server";
import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect("users");
  const user = await userCollection.findOne({ email: payload?.email });

  if (!payload?.password || payload.password.length < 6) {
    return { success: false, message: "Password must be at least 6 characters long." };
  }

  if (user) {
    return {success: false, message: "Email Already Registered"}
  }

  const res = await userCollection.insertOne(payload);
  if (res?.insertedId) {
    console.log("Data Inserted Successfully!")
  }
  return {success: true, message: "Successfully Inserted Data", data: res, insertedId: res.insertedId.toString()}
};
