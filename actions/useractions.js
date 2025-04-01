"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"
import { use } from "react"
import connectDb from "@/db/connectDb"

export const fetchuser = async (username) => {
    await connectDb();
    let u = await User.findOne({username: username});
    let user = u.toObject({flattenObjectIds: true});    
    return user;
}

export const fetchpayments = async (username) => {
    await connectDb();
    // find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({to_user: username}).sort({amount: -1}).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)

    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({username: oldusername})
        if(u) {
            return {error: "Username already exists"}
        }
    }
    await User.updateOne({email: ndata.email}, ndata)
}
