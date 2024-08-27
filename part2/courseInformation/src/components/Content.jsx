const Content = ({ course }) => {
  const totalExercises = (course) =>
    course.parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "5px",
        }}
      >
        {course.name}
      </div>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {course.parts.map((item) => {
          return (
            <li key={item.id}>
              <span style={{ marginRight: "5px" }}>{item.name}</span>
              <span>{item.exercises}</span>
            </li>
          );
        })}
      </ul>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "5px",
        }}
      >
        total of {totalExercises(course)} exercises
      </div>
    </>
  );
};
export default Content;
