import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        //     const name = event.target.name.value;
        //   console.log(name);
        const form = new FormData(event.currentTarget);
        console.log(form)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password)

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                alert("Successfully Registered")
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (

        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">


                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form
                            onSubmit={handleRegister}
                            className="card-body">
                            <h1 className="font-bold">Register Your Account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" id="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input id="photo" type="text" name="photo" placeholder="Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" id="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" id="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>

                            </div>

                        </form>
                        <div className="min-w-[250px] ml-4">
                        <div>
                            Already Registered??
                            <Link to="/login"><button className="btn btn-outline btn-error m-2 w-32">Login here</button></Link>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;