import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="h-full">
      <div className="w-8/12 mx-auto py-5">
        {/* Navlinks */}
        <div className="flex flex-nowrap gap-2 text-lg">
          <Link to="/" className="underline">
            Home
          </Link>
        </div>
        {/* Signin Heading */}
        <div className="text-left pt-10 pb-2 border-red-700 border-b">
          <h1 className="text-[38px] font-medium">Terms and conditions</h1>
        </div>
        {/* Agreement Text */}
        <div className="text-left text-xl py-4">
          <p className="mb-4">
            By accessing your account, you are agreeing to abide by the
            following Terms and Conditions of Use:
          </p>
          <li className="list-disc">
            You agree to keep your identification number(s) confidential and to
            not share it (them) with anyone. If you suspect that others have
            obtained your identification number(s), contact us immediately by
            clicking the Contact us link (at the bottom of any IRCC web page)
            and complete a case-specific enquiry.
          </li>
          <li className="list-disc">
            You certify that any information provided by you is true, accurate
            and complete.
          </li>
          <li className="list-disc">
            You understand and accept that as a security measure for
            administrative reasons, we can revoke your access if you fail to
            abide by the Terms and Conditions of Use.
          </li>
          <li className="list-disc">
            You understand and accept that we are not responsible for any losses
            or damages incurred by anyone because of:
            <li className="list-decimal ml-8">
              The use of the information available in your account
            </li>
            <li className="list-decimal ml-8">
              Any restrictions, delay, malfunction or unavailability of your
              account
            </li>
          </li>
          <li className="list-disc">
            You understand and accept that by using your account and applying
            online, we can communicate with you (or your representative, if
            applicable) via email.
          </li>
          <li className="list-disc">
            To continue, choose "I accept" to indicate your acceptance of these
            Terms and Conditions. If you do not agree with these Terms and
            Conditions, choose "I do not accept". Note, you will not be able to
            access your account unless you accept the Terms and Conditions.
          </li>
          <p className="mt-6">
            If you use another type of browser software you should check with
            your software supplier to make sure that your browser has 128-bit
            secure socket layer encryption capability. Note: We are not
            responsible for any difficulties in downloading and installing
            software. Software suppliers are responsible for providing technical
            support. It is important that you sign out and close your browser
            before leaving this computer unattended. This will prevent
            unauthorized access to your personal information.
          </p>
        </div>
        {/* Agreement Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard"
            className="transition duration-300 px-4 py-3 rounded-lg font-medium text-white bg-[#335075] border-2 border-white hover:border-[#335075]"
          >
            I accept
          </Link>
          <Link to="#" className="transition duration-300 px-4 py-3 rounded-lg font-medium text-[#335075] bg-gray-100 border-2 border-white hover:border-[#335075]">
            I do not accept
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
export default Terms;
