import { Link } from "react-router-dom";
import { useState } from "react";

// assets
import warning from "../assets/warning.png";
import closeButton from "../assets/cross.svg";
import first from "../assets/first.svg";
import last from "../assets/last.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import Table from "./Table";
import TableEmpty from "./TableEmpty";

const Dashboard = () => {
  const [isWarning, setIsWarning] = useState(true);
  return (
    <div className="h-full">
      <div className="w-8/12 mx-auto py-5">
        {/* Navlinks */}
        <div className="flex flex-nowrap gap-2 text-lg">
          <Link to="/" className="underline">
            Home
          </Link>
          <p>></p>
          <Link to="/signin">Your account</Link>
        </div>
        {/* User Actions Container */}
        <div className="flex justify-end items-center gap-2">
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
          <h1 className="text-[38px] font-medium">My IRCC portal account</h1>
        </div>
        {/* Warning Container */}
        {isWarning && (
          <div className="transition-all relative my-4 py-7 px-5 flex items-center bg-[#f9f4d4] border-l-4 border-l-orange-400">
            <img
              src={closeButton}
              alt="close"
              className="w-5 h-5 absolute top-6 right-8 cursor-pointer"
              onClick={() => setIsWarning(false)}
            />
            <div className="mr-10">
              <img src={warning} alt="warning" />
            </div>
            <div className="text-[22px] text-left w-3/4">
              <p>If you have an existing IRCC account:</p>
              <li>
                This portal account is not connected with your IRCC account.
              </li>
              <li>
                You'll only see visitor visa, transit visa or study permit
                applications you create and submit via this Portal account.
              </li>
              <li>
                To view your other applications, access messages and status
                updates for these applications, or link paper applications, sign
                in to your IRCC account.
              </li>
            </div>
          </div>
        )}
        {/* Start application and citizenship */}
        <div className="flex gap-24 mt-10 text-left">
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-medium">Start an application</p>
            <Link to="#" className="underline text-[22px] text-[#335075]">
              Apply for a visitor visa, transit visa or a study permit
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-medium">Start an application</p>
            <Link to="#" className="underline text-[22px] text-[#335075]">
              Download Citizenship e-Certificate
            </Link>
          </div>
        </div>
        {/* Submitted Container */}
        <div className="flex flex-col mt-10 text-left">
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-medium">
              View the applications you submitted
            </p>
            <p className="text-[22px] text-gray-700">
              Apply for a visitor visa, transit visa or a study permit
            </p>
          </div>
          <div className="shadow-xl flex flex-col mt-5 text-left">
            {/* <div className="flex gap-10 justify-between  text-2xl text-white font-medium items-center py-6 px-4 bg-[#335075]">
              <p>Application type</p>
              <p>Application number</p>
              <p>Application name</p>
              <p>Date submitted</p>
              <p>Current status</p>
              <p>Action</p>
            </div>
            <div className="flex justify-center bg-gray-100 py-6 text-2xl">
              <p>No data available in table</p>
            </div> */}
            <Table />
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
              <p>5 of 12</p>
              <img src={first} alt="first" />
              <img src={previous} alt="previous" />
              <img src={next} alt="next" />
              <img src={last} alt="last" />
            </div>
          </div>
        </div>
        {/* Unsubmitted Container */}
        <div className="flex flex-col mt-10 text-left">
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-medium">
              Continue an application you haven't submitted
            </p>
            <p className="text-[22px] text-gray-700">
              Continue working on an application or a profile you haven't
              submitted, or delete it from your account.
            </p>
          </div>
          <div className="shadow-xl flex flex-col mt-5 text-left">
            {/* <div className="flex gap-10 justify-between text-2xl text-white font-medium items-center py-6 px-4 bg-[#335075]">
              <p>Application type</p>
              <p>Date created</p>
              <p>Days left to submit</p>
              <p>Date last saved</p>
              <p>Action</p>
            </div>
            <div className="flex justify-center bg-gray-100 py-6 text-2xl">
              <p>No data available in table</p>
            </div> */}
            <TableEmpty />
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
        </div>
        {/* Account Messages */}
        <div className="flex flex-col gap-3 mt-10 text-left">
          <p className="text-4xl font-medium">Account Messages</p>
          <p className="text-[22px] text-gray-700">
            Read messages related to your account. Messages about a submitted
            application are on your application status page.
          </p>
          <p className="text-[22px] text-gray-700 my-6">You have no message.</p>
        </div>
        {/* Date Modified Container */}
        <div className="mt-5 flex flex-nowrap">
          <p className="text-lg">Date modified: 2022-06-14</p>
        </div>
        {/* Report a Problem Container */}
        <div className="flex justify-center items-center flex-nowrap box-border mt-10 bg-[#eaebed] w-1/5 rounded-lg border-4 hover:border-[#284162] transition-all shadow-lg">
          <Link to="#" className="text-base text-[#284162] p-2">
            Report a problem on this page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
