import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post("https://om-tours-backend.vercel.app/api/contact", data);
      toast.success("Your query has been submitted successfully");
    } catch (err) {
      console.error(err);
      toast.error("There was error submitting query.");
    }
  };

  return (
    <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif]">
      <h1 className="text-3xl text-gray-800 font-extrabold text-center">
        Contact us
      </h1>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          {...register("email", { required: "This field is required." })}
        />
        <input
          type="text"
          placeholder="Mobile"
          id="mobile"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          {...register("mobile", { required: "This field is required." })}
        />
        <textarea
          type="text"
          id="message"
          placeholder="Message"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          {...register("message", { required: "This field is required." })}
        />
        <input
          type="text"
          placeholder="Thoughts"
          id="thoughts"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
          {...register("thoughts", { required: "This field is required." })}
        />

        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
