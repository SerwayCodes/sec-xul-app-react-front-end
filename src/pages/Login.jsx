export default function Login() {
  return (
    <div className="min-h-screen bg-[#FCFAFA] flex items-center justify-center relative px-4">
      <div className="absolute top-10 text-center">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Welcome, log into your account!
        </h1>
      </div>
      <div className="bg-white  bg-[#FFFFFF]rounded-xl shadow-lg px-8 py-10 w-full max-w-md flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Login
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="mb-4 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3D3D3D] text-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3D3D3D] text-gray-800"
        />
        <button className="bg-[#3D3D3D] text-white font-semibold py-3 rounded-md hover:bg-[#292929] transition">
          Login
        </button>
      </div>
      <div className="absolute bottom-10 text-center w-full">
        <p>
          forgot password?{" "}
          <a href="#" className="text-blue-500">
            Click here
          </a>
        </p>
      </div>
    </div>
  );
}
