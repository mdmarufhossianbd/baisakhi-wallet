import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const handleReg = async (e) => {
        e.preventDefault();
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            accountType: e.target.account_type.value,
            phoneNumber : e.target.number.value,
            accountStatus : 'pending'
        }
        const password = e.target.password.value;
        const phoneNumber = e.target.number.value;

        if (password.length < 6) {            
            return toast.error('Password at least 6 charaters.')
        }
        if (phoneNumber.length !== 11)
            { return toast.error('Phone number must be have 11 characters') }
        
        const response = await axiosSecure.post('http://localhost:5000/user', user)
            if (response.data?.insertedId) {
                toast.success('Successfully created your account')
                e.target.reset();
                navigate('/login')
            } else {
                toast.error('Please check your email or password')
            }
        
    }
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div>
                <h2 className="md:text-5xl text-3xl font-semibold text-center">Register Now</h2>
                <form onSubmit={handleReg}>
                    <div className="flex flex-col my-5">
                        <label className="font-medium mb-3">Name : </label>
                        <input className="px-4 py-2 border rounded-full focus:outline-none" type="text" name="name" placeholder="your full name" required />
                    </div>
                    <div className="flex flex-col my-5">
                        <label className="font-medium mb-3">Email : </label>
                        <input className="px-4 py-2 border rounded-full focus:outline-none" type="email" name="email" placeholder="your email" required />
                    </div>
                    <div className="flex flex-col my-5">
                        <label className="font-medium mb-3">Phone : </label>
                        <input className="px-4 py-2 border rounded-full focus:outline-none" type="number" name="number" placeholder="your phone number" required />
                    </div>
                    <div className="flex flex-col my-5">
                        <label className="font-medium mb-3">Password : </label>
                        <input className="px-4 py-2 border rounded-full focus:outline-none" type="password" name="password" placeholder="your password" required />
                    </div>
                    <div className="">
                        <label className="font-medium mb-3">Choose Account type : </label>
                        <select required name="account_type">
                            <option value="agent">Agent</option>
                            <option value="general">General</option>
                        </select>
                        <p><input className="mr-3" type="checkbox" name="agent" required />I agree to accept all terms and conditions of <Link to={'/'} target="blank">Baishakhi Wallet</Link></p>

                    </div>
                    <input className="bg-[#ffaa00d7] px-5 py-2 rounded-full text-white font-medium hover:bg-[#ED056F] hover:cursor-pointer" type="submit" value="Register" />
                </form>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />


        </div>
    );
};

export default Register;