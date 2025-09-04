export default function ListCourse() {
  const courses = [
    { id: 1, name: "HTML" },
    { id: 2, name: "Css" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "ReactJS" },
  ];

  return (
    <>
      <hr></hr>
      <h1>Bài 1 </h1>
      <h1>Danh sách khóa học</h1>
      <ol>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ol>
    </>
  );
}
