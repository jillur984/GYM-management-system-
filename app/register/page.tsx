export default async function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 md:mt-8 to-gray-500 flex items-center justify-center">
      <div className="card w-96 bg-white shadow-xl p-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Trainee Registration
        </h2>
        <form className="space-y-4">
          {/* Full Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 hover:scale-105 transition-transform"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <a href="/pages/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
