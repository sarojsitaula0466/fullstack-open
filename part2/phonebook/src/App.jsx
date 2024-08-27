import { useEffect, useState } from "react";
import phoneBook from "./services/phonebook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filteredName, setFilteredName] = useState([]);
  const [addedMessage, setAddedMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    phoneBook.getAll().then((initialPhonebook) => setPersons(initialPhonebook));
  }, []);

  const handleFilterPersons = (e) => {
    const text = e.target.value;
    const copyPersons = [...persons];
    const filteredPersons = copyPersons.filter((person) =>
      person.name.includes(text),
    );
    setFilteredName(filteredPersons);
  };

  const handleDelete = (id, name) => {
    window.confirm(`Delete ${name} ?`);
    phoneBook
      .delete(id)
      .then((returnedPhonebook) =>
        setPersons(
          persons.filter((person) => person.id !== returnedPhonebook.id),
        ),
      )
      .catch((res) => {
        console.log(res);

        if (res.response.status === 404) {
          setErrorMessage(
            `Information of ${name} has been removed from the server`,
          );
          setTimeout(() => setErrorMessage(null), 5000);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const duplicateName = persons.find((person) => person.name === newName);

    if (duplicateName) {
      window.confirm(
        `${newName} is already added to phonebook,replace the old number with a new one?`,
      );
      const personId = duplicateName.id;
      const newPerson = {
        name: newName,
        number: phoneNumber,
      };
      phoneBook
        .update(personId, newPerson)
        .then((returnedPerson) =>
          setPersons(
            persons.map((person) =>
              person.id !== personId ? person : returnedPerson,
            ),
          ),
        );
    } else {
      const personObject = {
        name: newName,
        number: phoneNumber,
      };
      phoneBook.create(personObject).then((returnedPhonebook) => {
        setPersons(persons.concat(returnedPhonebook));
        setNewName("");
        setPhoneNumber("");
        setAddedMessage(`Added ${returnedPhonebook.name}`);
        setTimeout(() => setAddedMessage(null), 5000);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification addedMessage={addedMessage} errorMessage={errorMessage} />
      <Filter handleFilterPersons={handleFilterPersons} />
      <h2>add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        setNewName={setNewName}
        setPhoneNumber={setPhoneNumber}
        newName={newName}
        phoneNumber={phoneNumber}
      />
      <h2>Numbers</h2>
      <Persons
        filteredName={filteredName}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
