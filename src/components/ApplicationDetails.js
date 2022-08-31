import { Link } from "react-router-dom";

// assets
import search from "../assets/search.svg";
import first from "../assets/first.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import last from "../assets/last.svg";
import icon1 from "../assets/details-icon/icon1.png";
import icon2 from "../assets/details-icon/icon2.png";
import icon3 from "../assets/details-icon/icon3.png";
import icon4 from "../assets/details-icon/icon4.png";
import icon5 from "../assets/details-icon/icon5.png";
import icon6 from "../assets/details-icon/icon6.png";
import icon7 from "../assets/details-icon/icon7.png";
import question from "../assets/details-icon/question-icon.png";
import { useEffect } from "react";
import data from "../data/applicant_data.json"

const ApplicationDetails = () => {
  var url_string = window.location.href
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  var record = {}
  for(var i = 0; i<data.length;i++) {
    if(data.at(i).number === id) {
      record = data.at(i);
      break;
    }
  }
  console.log(record)
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div className="w-full">
      <div className="w-8/12 mx-auto py-5">
        {/* Navlinks */}
        <div className="flex flex-nowrap gap-2 text-lg">
          <Link to="/" className="underline">
            Home
          </Link>
          <p>></p>
          <Link to="/application-details">Application status</Link>
        </div>
        {/* User Actions Container */}
        <div className="flex justify-end items-center gap-2 pt-4">
          <p className="text-lg mr-2">Signed in as KARAN SINGH</p>
          <button className="transition duration-300 px-4 py-3 rounded-lg font-medium text-[#335075] bg-gray-100 border-2 border-white hover:border-[#335075]">
            Account home
          </button>
          <button className="transition duration-300 px-4 py-3 rounded-lg font-medium text-[#335075] bg-gray-100 border-2 border-white hover:border-[#335075]">
            Account profile
          </button>
          <button className="transition duration-300 px-4 py-3 rounded-lg font-medium text-[#335075] bg-gray-100 border-2 border-white hover:border-[#335075]">
            Help
          </button>
          <button className="transition duration-300 px-4 py-3 rounded-lg font-medium text-white bg-[#335075] border-2 border-[#335075] hover:border-gray-100">
            Sign out
          </button>
        </div>
        {/* Dashboard Heading */}
        <div className="text-left pt-10 pb-2 border-red-700 border-b">
          <h1 className="text-[38px] font-medium">Application status</h1>
        </div>
        {/* Additional documents text */}
        <div className="flex gap-5 text-xl font-normal my-4">
          <p>Check the status and review the details of your application.</p>
          <Link to="#" className="text-[#335075] underline">
            How to submit additional documents
          </Link>
        </div>
        {/* Application Status & Information */}
        <div className="flex gap-12 my-8 text-left">
          <div className="shadower w-2/4 h-fit">
            <p className="text-[34px] font-semibold bg-[#eaebed] p-3">
              Application Status
            </p>
            <p className="text-xl font-normal my-5 px-3">
              We are processing your application. We will send you a message
              when there is an update or if we need more information from you.
            </p>
            <p className="text-xl font-bold my-5 px-3">Latest update:</p>
            <p className="text-xl font-bold my-5 px-3">
              Biometrics - {record.biometric.date}:{" "}
              <span className="font-normal">Completed</span>
            </p>
          </div>
          <div className="shadower w-2/4">
            <p className="text-[34px] font-semibold bg-[#eaebed] p-3">
              Applicant information
            </p>
            <p className="text-xl font-bold mb-2 mt-5 px-3">
              Principal applicant:{" "}
              <span className="font-normal">{record.name}</span>
            </p>
            <p className="text-xl font-bold my-2 px-3">
              Unique Client Identifier (UCI):{" "}
              <span className="font-normal">{record.uci}</span>
            </p>
            <p className="text-xl font-bold my-2 px-3">
              Application number:{" "}
              <span className="font-normal">{record.number}</span>
            </p>
            <p className="text-xl font-bold my-2 px-3">
              Date received: <span className="font-normal">{record.dateReceived}</span>
            </p>
            <p className="text-xl font-bold my-2 px-3">Biometrics:</p>
            <p className="text-xl font-bold px-3 ml-8">
              Biometrics number:{" "}
              <span className="font-normal">{record.biometric.number}</span>
            </p>
            <p className="text-xl font-bold px-3 ml-8">
              Date of biometrics enrolment:{" "}
              <span className="font-normal">{record.biometric.dateReceived}</span>
            </p>
            <p className="text-xl font-bold mb-5 px-3 ml-8">
              Expiry date: <span className="font-normal">{record.biometric.expiryDate}</span>
            </p>
          </div>
        </div>
        {/* Estimated Remaining Time */}
        <div className="py-8 border-t-2 border-b-2 border-gray-300 text-left">
          <p className="mb-3 text-[34px] font-semibold">
            Estimated remaining processing time
          </p>
          <div className="py-4 bg-[#c2cbd6]"></div>
          <div className="flex justify-between py-3">
            <p className="font-bold text-xl">
              Application recieved:{" "}
              <span className="font-medium">{record.date}</span>
            </p>
            <p className="font-bold text-xl">Estimated completion date*</p>
          </div>
          <p className="text-xl font-normal my-5">
            * The estimated processing time may change depending on how many
            applications we receive and other factors. This progress bar show
            the time elapsed since we received your application.
          </p>
        </div>
        {/* Details about application status */}
        <div className="py-8 text-left">
          <p className="mb-3 text-[34px] font-semibold">
            Details about your application status
          </p>
          <p className="text-xl font-normal my-3">
            When we get your application, there are a series of steps it may go
            through before we make a decision. Use the following table to find
            out the current status of each application step.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <img src={icon1} alt="icon1" className="w-8 h-8" />
            <p className="text-2xl font-semibold">Review of eligibility</p>
            <img src={question} alt="question" className="w-5 h-5" />
          </div>
          <li className="text-xl mt-3 list-disc ml-2 font-normal">
            Your application is in progress. We will send you a message when we
            start reviewing your eligibility.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={icon2} alt="icon2" className="w-8 h-8" />
            <p className="text-2xl font-semibold">Review of medical results</p>
            <img src={question} alt="question" className="w-5 h-5" />
          </div>
          <li className="text-xl mt-3 list-disc ml-2 font-normal">
            You do not need a medical exam. We will send you a message if this
            changes.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={icon3} alt="icon3" className="w-8 h-8" />
            <p className="text-2xl font-semibold">Review of additional documents</p>
            <img src={question} alt="question" className="w-5 h-5" />
          </div>
          <li className="text-xl mt-3 list-disc ml-2 font-normal">
            We do not need additional documents.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={icon4} alt="icon4" className="w-8 h-8" />
            <p className="text-2xl font-semibold">Interview</p>
            <img src={question} alt="question" className="w-5 h-5" />
          </div>
          <li className="text-xl mt-3 list-disc ml-2 font-normal">
            You do not need a interview. We will send you a message if this
            changes.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={icon5} alt="icon5" className="w-8 h-8" />
            <p className="text-2xl font-semibold">Biometrics</p>
            <img src={question} alt="question" className="w-5 h-5" />
          </div>
          <li className="text-xl mt-3 list-disc ml-2 font-normal">
          We need your fingerprints to process your application. Check your messages below for details.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={icon6} alt="icon6" className="w-8 h-8" />
            <p className="text-2xl font-semibold">Background check</p>
            <img src={question} alt="question" className="w-5 h-5" />
          </div>
          <li className="text-xl mt-3 list-disc ml-2 font-normal">
            We are processing your background check. We will send you a message
            if we need more information.
          </li>
          <div className="flex items-center gap-4 mt-5">
            <img src={icon7} alt="icon7" className="w-8 h-8" />
            <p className="text-2xl font-semibold">Final decision</p>
            <img src={question} alt="question" className="w-5 h-5" />
          </div>
          <li className="text-xl mt-3 list-disc ml-2 font-normal">
            Your application was approved. You need to send us your valid passport to finalize your application.
          </li>
        </div>
        {/* Messages about your application */}
        <div className="text-left">
          <p className="text-[34px] font-semibold mb-8">
            Messages about your application
          </p>
          <div className="relative mr-6 my-2 flex w-fit">
            <input
              type="search"
              class="text-xl bg-purple-white border-black rounded border py-5 px-3"
              placeholder="Search"
            />
            <img
              src={search}
              alt="search"
              className="w-4 h-4 absolute right-4 top-7"
            />
          </div>
        </div>
        {/* Messages about application table */}
        <div className="shadower mt-4">
          <table className="text-left w-full table-auto border-collapse border-2 border-gray-200">
            <thead className="text-white text-xl bg-[#335075]">
              <tr>
                <th className="py-6 px-4">Subject</th>
                <th className="py-6 px-4">Data sent</th>
                <th className="py-6 px-4">Data read</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="text-[#335075] cursor-pointer underline font-bold text-lg py-8 px-4 border-2 border-gray-200">
                  Biometrics Collection Letter
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
              </tr>
              <tr>
                <td className="text-[#335075] cursor-pointer underline font-bold text-lg py-8 px-4 border-2 border-gray-200">
                  Client Application Summary
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="text-[#335075] cursor-pointer underline font-bold text-lg py-8 px-4 border-2 border-gray-200">
                  Submission Confirmation
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
              </tr>
              <tr>
                <td className="text-[#335075] cursor-pointer underline font-bold text-lg py-8 px-4 border-2 border-gray-200">
                  Confirmation of Online Application Transmission
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  July 30, 2022
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-5 justify-end py-6 text-xl  font-light">
            <p className="text-gray-400">Items per page:</p>
            <select className="border-b border-b-black">
              <option defaultValue value="5">
                5
              </option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="100">100</option>
            </select>
            <p>0 of 0</p>
            <img src={first} alt="first" />
            <img src={previous} alt="previous" />
            <img src={next} alt="next" />
            <img src={last} alt="last" />
          </div>
        </div>
        {/* Date Modified Container */}
        <div className="mt-10 flex flex-nowrap">
          <p className="text-lg">Date modified: 2022-06-14</p>
        </div>
        {/* Report a Problem Container */}
        <div className="flex justify-center items-center flex-nowrap box-border mt-10 bg-[#eaebed] w-1/4 rounded-lg border-4 hover:border-[#284162] transition-all shadower">
          <Link to="#" className="text-base text-[#284162] p-2">
            Report a problem on this page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ApplicationDetails;
