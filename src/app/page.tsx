import { auth } from '@/authConfig'
import { redirect } from 'next/navigation'
import { signInWithGoogle, signInWithLine, signInWithGitHub, signInWithHealthId } from './actions/sign-in'


export default async function Home() {
  const session = await auth()

  // If user is already logged in, redirect to profile
  if (session) {
    redirect('/profile')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8">
            <div className="grid grid-cols-2 gap-6 p-6 border border-gray-300 rounded-lg mt-[25px]">
            <form action={signInWithGoogle}>
              <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg text-lg w-full"
              >
              Login with Google
              </button>
            </form>
            <form action={signInWithLine}>
              <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-6 rounded-lg text-lg w-full"
              >
              Login with LINE
              </button>
            </form>
            <form action={signInWithGitHub}>
              <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3.5 px-6 rounded-lg text-lg w-full"
              >
              Login with GitHub
              </button>
            </form>
            <form action={signInWithHealthId}>
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3.5 px-6 rounded-lg text-lg w-full">Login with Health ID</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}