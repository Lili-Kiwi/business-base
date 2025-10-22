import { useState } from "react";
import { URL, categoryOptions } from "../shared/constants.jsx";
import { actions as businessesActions } from "../reducers/businesses.reducer.jsx";

const AddBusiness = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBusiness(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addBusiness = async (business) => {
    const token = `Bearer ${import.meta.env.VITE_PAT}`;
    const options = {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: business,
      }),
    };

    try {
      const resp = await fetch(URL, options);
      if (!resp.ok) {
        throw new Error(
          `Failed to save business: ${resp.status} ${resp.statusText}`
        );
      }
      const data = await resp.json();
      if (data && data.id) {
        dispatch({ type: businessesActions.addBusiness, record: data });
        setFormData({ name: "", address: "", category: "" });
      }
    } catch (err) {
      console.error("Failed to add business", err);
    }
  };

  return (
    <>
      <div>AddBusiness</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Business Name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <select
          id="dropdown"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select an option
          </option>

          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button type="submit">Add Business</button>
      </form>
    </>
  );
};

export default AddBusiness;
