

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md ">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full border rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full border rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-blue-500 hover:bg-blue-800 text-white rounded-md py-2">
              Register
            </button>
            <p className="text-right text-gray-500">Have an account?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
