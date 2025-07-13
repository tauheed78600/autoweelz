import React, { useState } from 'react';
import SellNowImage from '../assets/sellnowImage.jpeg';
import { Check, MoveLeft, MoveRight } from 'lucide-react';

function SellNow() {
  const [page, setPage] = useState(1);
  const [formDetails, setFormDetails] = useState({
    name: "",
    number: "",
    email: "",
    vehicleNumber: "",
    brand: "",
    bikeName: "",
    owner: "",
    model: "",
    kmDriven: "",
    sellTime: "",
  });
  const [errors, setErrors] = useState({});

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for the field being updated
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Validation Function
  const validate = () => {
    const newErrors = {};
    if (!formDetails.name) newErrors.name = "Name is required";
    if (!formDetails.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formDetails.number) {
      newErrors.number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formDetails.number)) {
      newErrors.number = "Phone number must be 10 digits";
    }
    if (!formDetails.vehicleNumber) newErrors.vehicleNumber = "Vehicle number is required";
    if (!formDetails.brand) newErrors.brand = "Brand is required";
    if (!formDetails.bikeName) newErrors.bikeName = "Bike name is required";
    if (!formDetails.model) newErrors.model = "Model year is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle Form Submission
  const handleSubmit = () => {
    if (validate()) {
      console.log("Form Details:", formDetails);
      alert("Form submitted successfully!");
    } else {
      console.log("Validation Errors:", errors);
    }
  };

  return (
    <div className="mt-20 p-6 flex justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1 border border-gray-200 rounded-lg shadow-md p-4">
        {/* Image Section */}
        <div>
          <img
            src={SellNowImage}
            alt="Sell Now"
            className="h-[500px] w-[350px] rounded-lg object-cover transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Form Section */}
        <div className="p-6">
          {page === 1 ? (
            <div>
              <p className="font-semibold text-blue-900 text-xl">Step {page} of 3</p>
              <p className="font-extrabold text-2xl text-blue-900">Your Information</p>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Your Name</label>
                  <input
                    name="name"
                    value={formDetails.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="border border-gray-500 p-2 rounded-full"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Your Email</label>
                  <input
                    name="email"
                    value={formDetails.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className="border border-gray-500 p-2 rounded-full"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Your Phone Number</label>
                  <input
                    name="number"
                    value={formDetails.number}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="border border-gray-500 p-2 rounded-full"
                  />
                  {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
                </div>
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Your Vehicle Number</label>
                  <input
                    name="vehicleNumber"
                    value={formDetails.vehicleNumber}
                    onChange={handleChange}
                    placeholder="MH12GY6678"
                    className="border border-gray-500 p-2 rounded-full"
                  />
                  {errors.vehicleNumber && (
                    <p className="text-red-500 text-sm">{errors.vehicleNumber}</p>
                  )}
                </div>
              </div>
            </div>
          ) : page === 2 ? (
            <div>
              <p className="font-semibold text-blue-900 text-xl">Step {page} of 3</p>
              <p className="font-extrabold text-2xl text-blue-900">Your Vehicle Information</p>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Your Bike Brand</label>
                  <input
                    name="brand"
                    value={formDetails.brand}
                    onChange={handleChange}
                    placeholder="Ex: Honda"
                    className="border border-gray-500 p-2 rounded-full"
                  />
                  {errors.brand && <p className="text-red-500 text-sm">{errors.brand}</p>}
                </div>
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Your Bike Name</label>
                  <input
                    name="bikeName"
                    value={formDetails.bikeName}
                    onChange={handleChange}
                    placeholder="Ex: Pulsar 220"
                    className="border border-gray-500 p-2 rounded-full"
                  />
                  {errors.bikeName && <p className="text-red-500 text-sm">{errors.bikeName}</p>}
                </div>
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Ownership (Optional)</label>
                  <select
                    name="owner"
                    value={formDetails.owner}
                    onChange={handleChange}
                    className="p-2 border border-gray-500 rounded-full"
                  >
                    <option value="">Select Ownership</option>
                    <option value="First Owner">First Owner</option>
                    <option value="Second Owner">Second Owner</option>
                    <option value="Third Owner">Third Owner</option>
                  </select>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-blue-900 text-xl">Step {page} of 3</p>
              <p className="font-extrabold text-2xl text-blue-900">Your Vehicle Details</p>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Your Bike Model Year</label>
                  <input
                    name="model"
                    value={formDetails.model}
                    onChange={handleChange}
                    placeholder="Ex: 2024"
                    className="border border-gray-500 p-2 rounded-full"
                  />
                  {errors.model && <p className="text-red-500 text-sm">{errors.model}</p>}
                </div>
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Kilometers Driven (Optional)</label>
                  <input
                    name="kmDriven"
                    value={formDetails.kmDriven}
                    onChange={handleChange}
                    placeholder="Ex: 24000"
                    className="border border-gray-500 p-2 rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-blue-900 font-semibold">Sell Time? (Optional)</label>
                  <input
                    name="sellTime"
                    value={formDetails.sellTime}
                    onChange={handleChange}
                    placeholder="Ex: 1 month"
                    className="border border-gray-500 p-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4 p-2">
            {page !== 1 && (
              <button
                onClick={() => setPage((prev) => prev - 1)}
                className="bg-gray-500 transition-all duration-200 ease-in-out font-bold hover:bg-gray-400 p-3 rounded-xl text-white w-24 flex flex-row gap-2 items-center"
              >
                <MoveLeft /> Back
              </button>
            )}
            {page !== 3 ? (
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="bg-blue-600 transition-all duration-200 ease-in-out font-bold hover:bg-blue-900 p-3 rounded-xl text-white w-24 flex flex-row gap-2 items-center"
              >
                Next <MoveRight />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-blue-600 transition-all duration-200 ease-in-out font-bold hover:bg-blue-900 p-3 rounded-xl text-white w-28 flex flex-row gap-2 items-center"
              >
                Submit <Check className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellNow;