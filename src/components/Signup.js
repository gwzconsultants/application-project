import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-full">
      <div className="w-8/12 mx-auto py-5">
        {/* Navlinks */}
        <div className="flex flex-nowrap gap-2 text-lg">
          <Link to="/" className="underline">
            Home
          </Link>
          <p>></p>
          <Link to="/signin">Sign up</Link>
        </div>
        {/* Signup Heading */}
        <div className="text-left pt-10 pb-2 border-red-700 border-b">
          <h1 className="text-[38px] font-medium">Sign up</h1>
        </div>
        {/* Form */}
        <form className="text-left py-5">
          <div>
            {/* Invite Code */}
            <div>
              <p className="text-xl font-bold">
                <span className="text-red-600 pr-2">*</span>Invite code
                <span className="text-red-600 pl-2">(required)</span>
              </p>
              <input
                type="text"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition"
              />
            </div>
            {/* Email Address */}
            <div className="mt-8">
              <p className="text-xl font-bold">
                <span className="text-red-600 pr-2">*</span>Email address
                <span className="text-red-600 pl-2">(required)</span>
              </p>
              <input
                type="email"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition"
              />
            </div>
            {/* Password Input */}
            <div className="mt-8">
              <p className="text-xl font-bold">
                <span className="text-red-600 pr-2">*</span>Password
                <span className="text-red-600 pl-2">(required)</span>
              </p>
              <p className="text-lg">
                Password must be at least 8 characters, no more than 15
                characters, and must include at least one upper case letter, one
                lower case letter, one special character, and one numeric digit.
              </p>
              <input
                type="password"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition"
              />
            </div>
            {/* Confirm Password Input */}
            <div className="mt-8">
              <p className="text-xl font-bold">
                <span className="text-red-600 pr-2">*</span>Confirm password
                <span className="text-red-600 pl-2">(required)</span>
              </p>
              <input
                type="password"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition"
              />
            </div>
            {/* Surname / lastname Input */}
            <div className="mt-8">
              <p className="text-xl font-bold">
                <span className="text-red-600 pr-2">*</span>Surname / last name
                <span className="text-red-600 pl-2">(required)</span>
              </p>
              <p className="text-lg">
                Write your surname name exactly as the name appears on your
                passport or identity document.
              </p>
              <input
                type="text"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition"
              />
            </div>
            {/* Given name / firstname Input */}
            <div className="mt-8">
              <p className="text-xl font-bold">
                Given name / first name
                <span className="text-[#595959] pl-2">(optional)</span>
              </p>
              <p className="text-lg">
                Write your surname name exactly as the name appears on your
                passport or identity document.
              </p>
              <input
                type="text"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition"
              />
            </div>
            {/* Country Input */}
            <div className="mt-8">
              <p className="text-xl font-bold">
                <span className="text-red-600 pr-2">*</span>Select telephone
                number for the country or territory
                <span className="text-red-600 pl-2">(required)</span>
              </p>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  className="w-5 h-5 checked:bg-[#335075]"
                  id="canada-us"
                />
                <label htmlFor="canada-us" className="text-lg ml-2">
                  Canada/US
                </label>
                <input
                  type="radio"
                  className="w-5 h-5 ml-5 checked:bg-[#335075]"
                  id="other"
                />
                <label htmlFor="other" className="text-lg ml-2">
                  Other
                </label>
              </div>
            </div>
            {/* Phone number input */}
            <div className="mt-8">
              <p className="text-xl font-bold">
                <span className="text-red-600 pr-2">*</span>Telephone number
                <span className="text-red-600 pl-2">(required)</span>
              </p>
              <input
                type="number"
                className="text-xl w-2/4 mt-2 rounded-lg py-9 px-4 h-10 border border-gray-400 hover:border-2 hover:border-black transition"
              />
            </div>
            {/* Submit Button */}
            <div className="mt-10">
              <Link to="/terms" className="w-2/4 text-xl py-4 px-4 bg-gray-200 text-gray-400 rounded-lg">
                Sign in
              </Link>
            </div>
          </div>
        </form>

        {/* Signup Link Container */}
        <div className="flex flex-nowrap gap-4">
          <p className="text-xl">Already have an account?</p>
          <Link to="/signin" className="underline text-xl text-[#335075]">
            Sign in
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
export default Signup;
