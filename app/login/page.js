import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 overflow-auto">
      <div className="max-w-sm w-full space-y-8 bg-white rounded-md shadow-md p-8">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-[50px] h-[50px] rounded-full bg-blue-700"></div>
          <h4 className="text-gray-300 text-lg font-semibold">B2Metric</h4>
          <h2 className="mt-6 text-center text-2xl font-semibold text-gray-900">
            Login in to B2Metric
          </h2>

          <h5 className="text-gray-300 text-sm font-semibold">
            Enter your email and password below
          </h5>
        </div>

        <LoginForm />

        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Dont have an account?
            <a
              href="#"
              className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
