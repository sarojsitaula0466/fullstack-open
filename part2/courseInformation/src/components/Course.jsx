import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
  return (
    <>
      <Header />
      {courses.map((course) => {
        return <Content key={course.id} course={course} />;
      })}
    </>
  );
};

export default Course;
