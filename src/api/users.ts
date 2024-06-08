import { pocketbase } from "./pocketbase-client";
import { BaseAuthStore } from "pocketbase";
import axios from "axios";


function objectToFormData(obj: any): FormData {
    const formData = new FormData()
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            formData.append(key, obj[key])
        }
    }

    return formData
}

export async function auth(user: any) {
    const { email, password } = user

    await pocketbase.collection("users").authWithPassword(email, password)

    let userModel = pocketbase.authStore.model

    return userModel
}

export async function sendVerificationToken(email: string) {
    const url = "http://localhost:42069/email-verification"
    const res = await axios.post(url, { email })

    return await res.data
}

export async function verifyEmail(email:string, token: string) {
    const url = "http://localhost:42069/email-verification"

    const res = await axios.post(url, { email, token })

    return await res.data
}

export async function create(user: any) {
    await pocketbase.collection('users').create(user)
}

export async function update(user: any, data: any) {
    await pocketbase.collection("users").update(user, data)
}

export async function get(user: any = undefined) {
    if (user) {
        return await pocketbase.collection("users").getOne(user)
    }
    
    return await pocketbase.collection("users").getFullList()
}