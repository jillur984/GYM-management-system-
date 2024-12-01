export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="card w-96 bg-white shadow-xl animate-fadeIn">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
            Login
          </h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-4 transition-transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-gray-500">
            Don't have an account?{" "}
            <a href="/pages/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
