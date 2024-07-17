import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const axiosSecure = useAxiosSecure();
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault()
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const response = await axiosSecure.post('/login', { email, password })
        if (response.data.status === 200) {
            // todo : load userdata from database and set the state.
            const userData = {
                name: 'John Doe',
                email: 'john.doe@example.com',
              };
            login(userData);
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className="max-w-7xl mx-auto">
            This is login page.
            <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-3">
                    <label>Email :</label>
                    <input className="px-5 py-2 rounded-full border focus:outline-none" type="email" name="email" placeholder='Your email' />
                </div>
                <div className="flex flex-col gap-3 my-3">
                    <label>Password :</label>
                    <input className="px-5 py-2 rounded-full border focus:outline-none" type="password" name="password" placeholder='Enter password' />
                </div>
                <input className="bg-[#ffaa00d7] px-5 py-2 rounded-full text-white font-medium hover:bg-[#ED056F] hover:cursor-pointer" type="submit" value="Login" />
            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Login;