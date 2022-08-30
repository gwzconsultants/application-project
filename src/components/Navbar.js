import header from "../assets/header.svg";

const Navbar = () => {
  return (
    <div className="flex flex-nowrap py-8 w-full border-b-black border-b-4">
        <img src={header} alt="header" className="w-8/12 h-7 mx-auto"/>
    </div>
  )
}
export default Navbar