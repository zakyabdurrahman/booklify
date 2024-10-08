import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import baseUrl from "../utils/constant";

function RegisterPage() {

    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        try {
            const {data} = await axios.post(`${baseUrl}/register`, {
                username: e.target[0].value,
                profileUrl: e.target[1].value,
                password: e.target[2].value
            })

            localStorage.setItem('access_token', data.access_token);
            navigate('/');
            
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <>
            <div className="h-screen flex w-screen justify-center items-center">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">Welcome to Booklify</h2>
                        <p className="text-center">Register your account here</p>
                        <form onSubmit={handleRegister}>
                            <label className="input input-bordered flex items-center gap-2 mt-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Username" />
                            </label>
                             <label className="input input-bordered flex items-center gap-2 mt-6">
                               
                                <input type="text" className="grow" placeholder="Profile Image URL" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mt-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                                </svg>
                                <input type="password" className="grow" placeholder="Password" />
                            </label>
                            <div className="card-actions justify-center mt-4">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                        </form>
                        
                        
                        <p className="text-center text-sm mt-2">Already have an account? <Link to="/login" className="text-blue-600">Login</Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage
