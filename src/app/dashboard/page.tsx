import { auth, signOut } from '@/authConfig'


export default async function Dashboard() {
    const session = await auth()
    const rawProfile = (session?.user as any)?.profile;
    const profileData = rawProfile ? JSON.parse(rawProfile) : session?.user;
    console.log("Dashboard session:", session?.user);
    console.log("Dashboard profileData:", profileData);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-8'>
            <form action={async () => {
                "use server"
                await signOut({ redirect: true, redirectTo: "/" })
            }} className="mb-8">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-xl">Sign out</button>
            </form>

            <div className="w-full max-w-2xl px-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
                <div className="bg-gray-50 shadow-md rounded-lg p-6 mt-8">
                    <h2 className="text-xl font-semibold mb-3">Processed Profile Data (Formatted)</h2>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm whitespace-pre-wrap break-all">
                        {JSON.stringify(profileData, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    )
}