import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 6) {
      setError("Password should at least 6 character");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password didn't match");
      return;
    }
    if (!/\d{2,}$/.test(password)) {
      setError("Password must end with at least 2 numbers");
      return;
    }
    if (!/[!@#%^&*]/.test(password)) {
      setError("Please add a special character like !,@,#,%,^,&,*");
      return;
    }
    setError("");

    console.log(name, photo, email, password, confirmPassword);
    registerUser(email, password)
    .then(result => {
      setUser(result.user)
    })
    .catch(error => setError(error.message))
  };

  return (
    <div className="w-[40%] mx-auto min-w-[500px] border-2 border-gray-300 p-4 rounded-xl">
      <form onSubmit={handleRegister} className="space-y-3">
        <div>
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Photo</p>
          <input
            type="text"
            name="photo"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="text"
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <p>Confirm password</p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        {error && <small className="text-red-500">{error}</small>}
        <button type="submit" className="btn btn-primary w-full mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
