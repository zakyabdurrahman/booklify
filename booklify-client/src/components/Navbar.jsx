import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

function Navbar() {
    const username = useSelector((state) => state.user.username);

    return (
        <>
             <div className="w-screen h-20 bg-indigo-500 flex justify-between items-center px-6">
                <div>
                    <p>Menus</p>
                </div>
                <Link to="/">
                    <h1 className="text-white font-bold text-2xl">Booklify</h1>
                </Link>
                
                
                <details className="dropdown">
                <summary className="btn m-1 bg-indigo-500 text-white border-transparent hover:bg-indigo-500 hover:border-transparent">{username}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a className="text-red-600">Logout</a></li>
                </ul>
                </details>
            </div>
        
        </>
    )
}

export default Navbar
