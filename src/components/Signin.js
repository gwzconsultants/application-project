import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="h-full">
      <div className="w-8/12 mx-auto py-5">
        {/* Navlinks */}
        <div className="flex flex-nowrap gap-2 text-lg">
          <Link to="/" className="underline">
            Home
          </Link>
          <p>></p>
          <Link to="/signin">Signin</Link>
        </div>
        {/* Signin Heading */}
        <div className="text-left pt-10 pb-2 border-red-700 border-b">
          <h1 className="text-[38px] font-medium">Sign in to the IRCC portal</h1>
        </div>
        {/* Form */}
        <form className="text-left py-5">
          <div>
            {/* Email Input */}
            <div>
              <p className="text-xl font-bold">
                <span className="text-red-600 pr-2">*</span>Email address
                <span className="text-red-600 pl-2">(required)</span>
              </p>
              <input
                class="peer"
                type="email"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition peer-invalid:border-red-500"
              />
            </div>
            {/* Password Input */}
            <div className="mt-8">
              <p className="text-xl font-bold">
                <span className="text-red-600 pr-2">*</span>Password
                <span className="text-red-600 pl-2">(required)</span>
              </p>
              <input
                type="password"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition"
              />
            </div>
            {/* Submit Button */}
            <div className="mt-10">
              <Link to="/terms" className="w-2/4 text-xl py-4 px-4 bg-[#335075] text-white rounded-lg">
                Sign in
              </Link>
            </div>
          </div>
        </form>

        {/* Signup Link Container */}
        <div className="flex flex-nowrap gap-4">
          <p className="text-xl">Need an account?</p>
          <Link to="/signup" className="underline text-xl text-[#335075]">
            Sign up
          </Link>
        </div>

        {/* Forget Password Container */}
        <div className="flex flex-nowrap mt-8">
          <Link to="#" className="underline text-xl text-[#335075]">
            Forgot Your Password?
          </Link>
        </div>

        {/* Date Modified Container */}
        <div className="mt-8 flex flex-nowrap">
          <p className="text-lg">Date modified: 2022-06-14</p>
        </div>

        {/* Report a Problem Container */}
        <div className="flex justify-center items-center flex-nowrap box-border mt-8 bg-[#eaebed] w-1/5 rounded-lg border-4 hover:border-[#284162] transition-all shadow-lg">
          <Link to="#" className="text-base text-[#284162] p-2">
            Report a problem on this page
          </Link>
        </div>
      </div>
      </div>
  );
};
export default Signin;
