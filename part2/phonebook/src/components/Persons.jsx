const Persons = ({ filteredName, persons, handleDelete }) => {
  const renderedNames = filteredName.length === 0 ? persons : filteredName;

  return (
    <>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {renderedNames.map((person) => {
          return (
            <li key={person.id}>
              <span style={{ marginRight: "5px" }}>{person.name}</span>
              <span style={{ marginRight: "5px" }}>{person?.number}</span>
              <button onClick={() => handleDelete(person.id, person.name)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Persons;
