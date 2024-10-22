import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StarRating from "./StarRating";
import axios from "axios";
import toast from "react-hot-toast";

function FeedBackCard() {
  const [stars, setStars] = useState(5);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://om-tours-backend.vercel.app/api/users/feedback",
        data
      );
      toast.success("Your feedback has been submitted successfully");
    } catch (err) {
      console.error(err);
      toast.error("There was error submitting feedback");
    }
  };

  useEffect(
    function () {
      setValue("stars", stars);
    },
    [stars, setValue]
  );

  return (
    <div className=" min-h-[30rem] max-h-[50rem] w-[30rem] px-5 py-5 bg-slate-900 flex flex-col justify-center items-center rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <h1 className="text-white text-[2rem]">Give Feedback</h1>
        <p className="text-white">
          Write your views and suggestions about OmTours and helps providing a
          better experience
        </p>
        <StarRating
          maxRating={5}
          size={24}
          onSetRating={setStars}
          defaultRating={5}
        />
        <div className="mb-6">
          <label htmlFor="" className="text-white">
            What are main the reasons for your rating?
          </label>
          <textarea
            type="text"
            placeholder="Enter your feedback"
            id="comments"
            className="w-full min-h-[10rem] px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            {...register("comments", { required: "This field is required." })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white rounded-sm px-2 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedBackCard;
