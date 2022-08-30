import { Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
import data from "../data/applicant_data.json"

const Table = () => {
  // const { data } = useFetch("https://jsonkeeper.com/b/O4YQ");
  return (
    <div>
      <table className="text-center w-full table-auto border-collapse border-2 border-gray-200">
        <thead className="text-white text-xl bg-[#335075]">
          <tr>
            <th className="py-6 px-4">Application Type</th>
            <th className="py-6 px-4">Application number</th>
            <th className="py-6 px-4">Application name</th>
            <th className="py-6 px-4">Date submitted</th>
            <th className="py-6 px-4">Current status</th>
            <th className="py-6 px-4">Action</th>
          </tr>
        </thead>
        {data &&
          data.map((item) => (
            <tbody key={item.number} className="even:bg-gray-100">
              <tr>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  {item.type}
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  {item.number}
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  {item.name}
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  {item.date}
                </td>
                <td className="font-semibold text-lg py-8 px-4 border-2 border-gray-200">
                  {item.status}
                </td>
                <td className="font-semibold text-lg text-[#335075] underline py-8 px-4 border-2 border-gray-200">
                  <Link to={`/application-details`}>
                    Check full application status
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};
export default Table;
