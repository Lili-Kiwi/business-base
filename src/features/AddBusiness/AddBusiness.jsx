import { useState } from "react";
import { categoryOptions } from "../../shared/constants.jsx";
import { actions as businessesActions } from "../../reducers/businesses.reducer.jsx";
import { FormWrapper, StyledForm, Label, Input, Select, Button } from "./AddBusiness.styles.js";
import styled from "styled-components";

const TextArea = styled.textarea`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
`;

const AddBusiness = ({ dispatch, URL }) => {
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
    <FormWrapper>
      <h2>Add Business</h2>
      <StyledForm onSubmit={handleSubmit}>
        <Label htmlFor="name">Business Name</Label>
        <Input 
          id="name"
          type="text"
          placeholder="Business Name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />

        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="phone"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="url"
          placeholder="Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />

        <Label htmlFor="category">Category</Label>
        <Select
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
        </Select>

        <Label htmlFor="description">Description</Label>
        <TextArea
          id="description"
          placeholder="Description"
          value={formData.description}
          name="description"
          onChange={handleChange}
        />
        <Button type="submit">Add Business</Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default AddBusiness;
