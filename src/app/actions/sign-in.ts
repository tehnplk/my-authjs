'use server'
import { signIn } from '@/authConfig'
import { redirect } from 'next/navigation';

export const signInWithGoogle = async () => {
    await signIn("google", { redirectTo: "/profile" })
}

export const signInWithLine = async () => {
    await signIn("line", { redirectTo: "/profile" })
}

export const signInWithGitHub = async () => {
    await signIn("github", { redirectTo: "/profile" })
}

export const signInWithUsername = async (formData: FormData) => {
    const data_login = Object.fromEntries(formData);

    if (data_login.username && data_login.password) {
        await signIn("credentials", {
            ...data_login,
            redirectTo: "/profile"
        })
    }
}

export const signInWithHealthId = async () => {
    const clientId = process.env.HEALTH_CLIENT_ID;
    const redirectUri = 'http://localhost:3000/api/auth/healthid';
    const url = `https://moph.id.th/oauth/redirect?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    redirect(url);
}


