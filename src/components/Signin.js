import { Link } from "react-router-dom";

const Signin = () => {
    document.title = "Sign in";

  return (
    <div className="h-full">
      <div className="w-8/12 mx-auto py-5">
        {/* Navlinks */}
        <div className="flex flex-nowrap gap-2 text-lg">
          <Link to="/" className="underline">
            Home
          </Link>
          <p>></p>
          <Link to="/signin">Sign in</Link>
        </div>
        {/* Signin Heading */}
        <div className="text-left pb-2">
          <h1 className="h1-page-title">Sign in to the IRCC portal</h1>
        </div>
        {/* Form */}
        <form className="text-left py-5">
          <div>
            {/* Email Input */}
            <div>
              <p className="text-xl font-bold form-input">
                <span className="pr-2 form-input red-bold">*</span>Email address
                <span className="pl-2 form-input red-bold">(required)</span>
              </p>
              <input
                class="peer"
                type="email"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition peer-invalid:border-red-500"
              />
            </div>
            {/* Password Input */}
            <div className="mt-8">
              <p className="text-xl font-bold form-input">
                <span className="pr-2 red-bold">*</span>Password
                <span className="pl-2 red-bold">(required)</span>
              </p>
              <input
                type="password"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition"
              />
            </div>
            {/* Submit Button */}
            <div className="mt-10">
              <Link to="/terms" className="signin-button text-xl py-4 px-4 bg-[#335075] text-white rounded-lg">
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
