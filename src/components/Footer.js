import { Link } from "react-router-dom";

// assets
import canada from '../assets/footer.svg';

const Footer = () => {
  return (
    <div className="w-full max-auto">
        <div className="w-11/12 mx-auto flex justify-between items-center py-6">
            <ul className="flex justify-center items-center gap-4">
                <li><Link to="/contact" className="transition py-2 px-3 hover:bg-gray-100">Contact information</Link></li>
                <li className="list-disc ml-4"><Link to="/toc" className="transition py-2 px-3 hover:bg-gray-100" >Terms and conditions</Link></li>
                <li className="list-disc ml-4"><Link to="/privacy" className="transition py-2 px-3 hover:bg-gray-100" >Privacy</Link></li>
            </ul>
            <div>
                <img src={canada} alt="canada" />
            </div>
        </div>
    </div>
  )
}
export default Footer