import { useState } from "react";
import { URL, categoryOptions } from "../shared/constants.jsx";
import { actions as businessesActions } from "../reducers/businesses.reducer.jsx";

const AddBusiness = ({ dispatch }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    category: "",
    description: "",
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
        setFormData({ name: "", address: "", category: "", phone: "", email: "", website: "", description: "" });
      }
    } catch (err) {
      console.error("Failed to add business", err);
    }
  };

  return (
    <>
      <div>Add Business</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Business Name</label>
        <input
          id="name"
          type="text"
          placeholder="Business Name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />

        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="phone"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          placeholder="Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
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

        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="Description"
          value={formData.description}
          name="description"
          onChange={handleChange}
        />
        <button type="submit">Add Business</button>
      </form>
    </>
  );
};

export default AddBusiness;
