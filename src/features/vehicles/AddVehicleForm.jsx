import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateVehicle } from "./useCreateVehicle";
import { useEditVehicle } from "./useEditVehicle";

function AddVehicleForm({ vehicleToEdit = {}, onCloseModal }) {
  const { createVehicle, isCreating } = useCreateVehicle();
  const { editVehicle, isEditing } = useEditVehicle();
  const [files, setFiles] = useState(null);

  const { _id: editId, ...editValues } = vehicleToEdit;
  const isEditSession = Boolean(editId);

  const accessToken = localStorage.getItem("token");
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  async function onSubmit(data) {
    if (!isEditSession) {
      const formData = new FormData();
      Object.keys(data).forEach((item) => formData.append(item, data[item]));

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append("images", file);
      }

      createVehicle(
        { formData, accessToken },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    } else {
      const formData = data;

      editVehicle(
        { formData, accessToken, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Add New Vehicle
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Vehicle Name
          </label>
          <input
            type="text"
            placeholder="Enter vehicle name"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            {...register("name", { required: "This field is required." })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Brand</label>
          <select
            id="brand"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            {...register("brand", { required: "This field is required." })}
          >
            <option value="toyota">Toyota</option>
            <option value="force">Force</option>
            <option value="volvo">Volvo</option>
            <option value="mahindra">Mahindra</option>
            <option value="maruti suzuki">Maruti Suzuki</option>
            <option value="tata">Tata</option>
          </select>
          {errors.brand && (
            <span className="text-red-500 text-sm">{errors.brand.message}</span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            id="images"
            className="w-full"
            onChange={(e) => setFiles(e.target.files)}
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="airConditioned"
            className="mr-2"
            {...register("airConditioned", {
              required: "This field is required.",
            })}
          />
          <label className="text-gray-700 font-medium">Air Conditioned</label>
          {errors.airConditioned && (
            <span className="text-red-500 text-sm ml-2">
              {errors.airConditioned.message}
            </span>
          )}
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="wifi"
            className="mr-2"
            {...register("wifi", { required: "This field is required." })}
          />
          <label className="text-gray-700 font-medium">WiFi</label>
          {errors.wifi && (
            <span className="text-red-500 text-sm ml-2">
              {errors.wifi.message}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Transmission Type
          </label>
          <select
            id="transmissionType"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            {...register("transmissionType", {
              required: "This field is required.",
            })}
          >
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
          </select>
          {errors.transmissionType && (
            <span className="text-red-500 text-sm">
              {errors.transmissionType.message}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Average
          </label>
          <input
            type="number"
            placeholder="Enter vehicle average"
            id="average"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            {...register("average", { required: "This field is required." })}
          />
          {errors.average && (
            <span className="text-red-500 text-sm">
              {errors.average.message}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            type="number"
            placeholder="Enter vehicle price"
            id="price"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            {...register("price", { required: "This field is required." })}
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors.price.message}</span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter vehicle description"
            id="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            {...register("description", {
              required: "This field is required.",
            })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Capacity
          </label>
          <input
            type="number"
            placeholder="Enter vehicle capacity"
            id="capacity"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            {...register("capacity", { required: "This field is required." })}
          />
          {errors.capacity && (
            <span className="text-red-500 text-sm">
              {errors.capacity.message}
            </span>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 shadow-md transition duration-300"
            disabled={isCreating}
          >
            {isCreating ? "Adding..." : "Add Vehicle"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddVehicleForm;
