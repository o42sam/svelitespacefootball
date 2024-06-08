import PocketBase from 'pocketbase'

const adminEmail = import.meta.env.VITE_ADMIN_EMAIL
const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD

export const pocketbase = new PocketBase('http://127.0.0.1:8090')

async function authenticateAdmin() {
    await pocketbase.admins.authWithPassword(adminEmail, adminPassword)
}

authenticateAdmin()