

const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              className="mb-4"
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              className="mb-6"
            />
            <Button variant="contained" color="primary" fullWidth>
              Log In
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
