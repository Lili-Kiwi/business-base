const Business = ({ business }) => {
  return (
    <div>
      <>
        {business.name}
        {business.address}
        {business.phone}
        {business.email}
        {business.phone}
        {business.website}
        {business.category}
        {business.image}
      </>
    </div>
  );
};

export default Business;
