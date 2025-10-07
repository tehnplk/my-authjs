
import { signInWithHealthId,} from '../actions/sign-in'

export default function ProviderPage() {
  return (
    <div>
      <h1>Provider Test Page</h1>
      <form action={signInWithHealthId}>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-lg text-lg w-full"
        >
          Login with Provider ID
        </button>
      </form>
    </div>
  );
}
