const Filter = ({ handleFilterPersons }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      filter shown with <input onChange={handleFilterPersons} />
    </div>
  );
};
export default Filter;
