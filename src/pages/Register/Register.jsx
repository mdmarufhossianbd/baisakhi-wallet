
const Register = () => {
    const handleReg =(e) => {
        e.preventDefault();
        const user = {
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.password.value
        }
        console.log(user);
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
                        <label className="font-medium mb-3">Password : </label>
                        <input className="px-4 py-2 border rounded-full focus:outline-none" type="password" name="password" placeholder="your password" required />
                    </div>
                    <input className="bg-[#ffaa00d7] px-5 py-2 rounded-full text-white font-medium hover:bg-[#ED056F] hover:cursor-pointer" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;