'use server'
import { signIn } from '@/authConfig'
import { redirect } from 'next/navigation';

export const signInWithGoogle = async () => {
    await signIn("google", { redirectTo: "/dashboard" })
}

export const signInWithLine = async () => {
    await signIn("line", { redirectTo: "/dashboard" })
}

export const signInWithGitHub = async () => {
    await signIn("github", { redirectTo: "/dashboard" })
}


export const signInWithHealthId = async () => {
    const clientId = process.env.HEALTH_CLIENT_ID;
    const redirectUri = 'http://localhost:3000/api/auth/healthid';
    const url = `https://moph.id.th/oauth/redirect?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    redirect(url);
}


