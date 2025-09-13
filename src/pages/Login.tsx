const Login = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 px-4">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            UsahaPro
          </h2>
          <p className="text-gray-400 text-center mb-4">
            Silahkan masuk untuk melanjutkan
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input type="password" placeholder="********" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="flex items-center justify-end text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400">
                Lupa Password?
              </a>
            </div>

            <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Masuk
            </button>
          </form>

          <p className="text-gray-400 text-center mt-8 text-sm">
            Belum punya akun?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Daftar disini
            </a>
          </p>
          <p className="text-center mt-4 text-sm">
            <a href="/" className="text-center mt-4 text-sm text-blue-400 hover:underline">
              Kembali ke Halaman Awal
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login