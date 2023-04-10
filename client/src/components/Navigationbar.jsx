import { Link } from "react-router-dom";

function Navigationbar() {

  

  const handleOnClick = (e, id, path) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    
  };

  return (
    <div className="relative z-30 w-full shadow-md">
      <div className="w-[77%]  flex flex-row justify-between items-center py-5 bg-white mx-auto ">
        <nav>
          <a href="#" className="text-black font-semibold text-4xl">
            Merry
          </a>
          <a href="#" className="text-red-500 font-bold text-4xl">
            Match
          </a>
        </nav>
        <nav>
          <ul className="flex flex-row items-center">
            <li className="mr-[56px] text-base font-bold hover:text-[#191C77]">
              <a
                href="http://localhost:5173/"
                onClick={(e) => handleOnClick(e, "why-merry")}
              >
                Why Merry Match?
              </a>
            </li>
            <li className="mr-[56px] text-base font-bold hover:text-[#191C77]">
              <Link to="/" href="http://localhost:5173/" onClick={(e) => handleOnClick(e, "how-to", "/")}>
                How to Merry
              </Link>
            </li>
            <Link to="/login"><button className="bg-red-500 hover:bg-red-600 text-white font-bold mx-5 px-6 py-2 rounded-full h-[66] ">
              Login
            </button></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigationbar;