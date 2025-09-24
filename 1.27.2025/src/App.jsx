import "./App.css";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log("Information:", data);
  // };

  const submitted = async (data) => {
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://form-handling.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setResponseMessage("Registration successful");
        reset();
      } else {
        setResponseMessage(result.message || "Something went Wrong");
      }
    } catch (error) {
      setLoading(false);
      setResponseMessage("Failed to connect to Api");
      console.error("Api Error:", error);
    }
  };

  const reveal = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-11/12 lg:w-[100%] mx-auto my-12 items-center grid grid-cols-1 lg:grid-cols-2 ">
        <div className="lg:w-[80%]">
          <h1 className="text-white text-2xl font-bold lg:text-5xl text-center lg:text-left py-6">
            Learn to code by watching others
          </h1>
          <p className="text-center lg:text-left text-white">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div>
          <div className="bg-blue-900 rounded-md my-5 p-3 shadow-lg">
            <p className="text-white text-center p-4 md:p-0">
              Try it free 7 days then $20/mo. thereafter
            </p>
          </div>
          <form
            onSubmit={handleSubmit(submitted)}
            className="relative flex flex-col gap-4 bg-white p-9 rounded-md shadow-lg"
          >
            <div className="relative">
              <input
                {...register("firstname", {
                  required: "First Name is required",
                })}
                className=" w-full relative outline-0 border-1 border-gray-500 px-3 py-3 rounded-md"
                placeholder="First Name"
                type="text"
              />
              {errors.firstname && (
                <p style={{ color: "red" }}>{errors.firstname.message}</p>
              )}
            </div>
            <div className="relative">
              <input
                {...register("lastname", { required: "Last Name is required" })}
                className=" w-full relative outline-0 border-1 border-gray-500 px-3 py-3 rounded-md"
                placeholder="Last Name"
                type="text"
              />
              {errors.lastname && (
                <p style={{ color: "red" }}>{errors.lastname.message}</p>
              )}
            </div>
            <div className="relative">
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                className=" w-full relative outline-0 border-1 border-gray-500 px-3 py-3 rounded-md"
                placeholder="Email"
                type="email"
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            </div>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                className=" w-full relative outline-0 border-1 border-gray-500 px-3 py-3 rounded-md"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
              {showPassword ? (
                <FaEye
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "35%",
                    cursor: "pointer",
                  }}
                  onClick={reveal}
                />
              ) : (
                <FaEyeSlash
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "35%",
                    cursor: "pointer",
                  }}
                  onClick={reveal}
                />
              )}
            </div>
            <button
              type="submit"
              className="px-3 outline-0 py-3 rounded-md hover:bg-green-600 bg-[#38CC8C] text-white"
            >
              {loading ? "Loading..." : "CLAIM YOUR FREE TRIAL"}
            </button>
            {responseMessage && (
              <p
                style={{
                  marginTop: "20px",
                  color: responseMessage.includes("successful")
                    ? "green"
                    : "red",
                }}
              >
                {responseMessage}
              </p>
            )}
            <p className="text-center">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-red-500 font-bold">Terms and Services</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;