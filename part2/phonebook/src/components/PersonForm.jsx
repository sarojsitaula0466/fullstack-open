const PersonForm = ({
  handleSubmit,
  setNewName,
  setPhoneNumber,
  newName,
  phoneNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:{" "}
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
