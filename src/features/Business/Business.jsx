
import { BusinessCard, BusinessField, BusinessLabel } from "./Business.styles";

const Business = ({ business }) => {
  return (
    <BusinessCard>
      <BusinessField><BusinessLabel>Name:</BusinessLabel> {business.name}</BusinessField>
      <BusinessField><BusinessLabel>Address:</BusinessLabel> {business.address}</BusinessField>
      <BusinessField><BusinessLabel>Phone:</BusinessLabel> {business.phone}</BusinessField>
      <BusinessField><BusinessLabel>Email:</BusinessLabel> {business.email}</BusinessField>
      <BusinessField><BusinessLabel>Website:</BusinessLabel> {business.website}</BusinessField>
      <BusinessField><BusinessLabel>Category:</BusinessLabel> {business.category}</BusinessField>
      <BusinessField><BusinessLabel>Description:</BusinessLabel> {business.description}</BusinessField>
    </BusinessCard>
  );
};

export default Business;
