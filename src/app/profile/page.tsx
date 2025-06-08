
import { auth, signOut } from '@/authConfig'
const LogOut = async () => {
    "use server"
    await signOut({ redirect: true, redirectTo: "/" })
}

export default async function ProfilePage() {
    const session = await auth()
    const rawProfile = (session?.user as any)?.profile;
    const profileData = rawProfile ? JSON.parse(rawProfile) : session?.user;
    console.log("Profile session:", session);

    return (
        <div className='flex flex-col items-center py-15'>
            <form action={LogOut} className="mb-8">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-xl">Sign out</button>
            </form>

            <div className="w-full max-w-2xl px-4">
                <div className="bg-gray-50 shadow-md rounded-lg p-6 mt-8 w-[80%] mx-auto">
                    <h2 className="text-xl font-semibold mb-3">Profile (JSON.stringify)</h2>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm whitespace-pre-wrap break-all">
                        {JSON.stringify(profileData, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    )
}