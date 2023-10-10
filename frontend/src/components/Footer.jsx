import { Link } from "react-router-dom";
import { socialLinks, quickLinks, quickLinks02, quickLinks03 } from "../data";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer  className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col flex-wrap md:flex-row gap-[30px] ">
          <div className="">
            <span className="h-5 w-5 rounded-full bg-black"></span>
            <p>Copyright {year} Developed by Beetech | Babawale Al-Ameen O</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer