
import { BusinessCard, BusinessField, BusinessLabel, UpdateButton, TextArea, Actions, EditIcon } from "./Business.styles";
import { FaPen } from "react-icons/fa";
import { useState } from "react";

const Business = ({ URL, token, business }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(business.description || "");

  const handleEdit = (e) => setUpdatedDescription(e.target.value);

  const handleCancel = (e) => {
    e.preventDefault();
    setUpdatedDescription(business.description || "");
    setIsEditing(false);
  };

  const updateDescription = async (updatedBusiness) => {
    const payload = {
      records: [
        {
          id: business.id,
          fields: {
            name: business.name,
            address: business.address,
            category: business.category,
            phone: business.phone,
            email: business.email,
            website: business.website,
            description: updatedBusiness,
          },
        },
      ],
    };

    const options = {
      method: "PATCH",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      const resp = await fetch(URL, options);
      if (!resp.ok) {
        const errorData = await resp.json();
        console.error('Error response:', errorData);
        throw new Error(`Update failed: ${resp.status}`);
      }
    } catch (err) {
      console.error("Failed to update business", err);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    await updateDescription(updatedDescription);
    setIsEditing(false);
  };

  return (
    <BusinessCard>
      <BusinessField><BusinessLabel>Name:</BusinessLabel> {business.name}</BusinessField>
      <BusinessField><BusinessLabel>Address:</BusinessLabel> {business.address}</BusinessField>
      <BusinessField><BusinessLabel>Phone:</BusinessLabel> {business.phone}</BusinessField>
      <BusinessField><BusinessLabel>Email:</BusinessLabel> {business.email}</BusinessField>
      <BusinessField><BusinessLabel>Website:</BusinessLabel> {business.website}</BusinessField>
      <BusinessField><BusinessLabel>Category:</BusinessLabel> {business.category}</BusinessField>



      <BusinessField>
        <BusinessLabel>Description:</BusinessLabel>
        {isEditing ? (
          <form onSubmit={handleUpdateSubmit}>
            <TextArea value={updatedDescription} onChange={handleEdit} />
            <Actions>
              <button type="button" onClick={handleCancel}>Cancel</button>
              <UpdateButton type="submit" >Update</UpdateButton>
            </Actions>
          </form>
        ) : (
          <span>
            {updatedDescription}
            <EditIcon onClick={() => setIsEditing(true)} title="Edit description">
              <FaPen />
            </EditIcon>
          </span>
        )}
      </BusinessField>
    </BusinessCard>
  );
};

export default Business;
