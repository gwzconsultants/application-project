import buildings from "../assets/buildings.png";

const Strip = () => {
  return (
    <div>
      <div className="h-24 mt-10 bg-[#26374a] flex justify-end items-center overflow-hidden">
        <img src={buildings} alt="buildings" className="w-2/5 pb-6 h-28 scale-[1.5]" />
      </div>
    </div>
  );
};
export default Strip;
