import Form1 from "../Session15/form1";
import Color2 from "../Session15/Color2";
import Date3 from "../Session15/Date3";
import Progress4 from "../Session15/Progress4";
import StudentTable from "../Session15/Student5/StudentTable";
import { mockStudents } from "../Session15/Student5/mock";
import TodoListAnimated from "../Session15/TodoListAnimated";

export default function Session15() {
  return (
    <div>
      <h1>Session 15</h1>
      <h3>Bai 1</h3>
      <Form1 />
      <h3>Bai 2</h3>
      <Color2 />
      <h3>Bai 3</h3>
      <Date3 />
      <h3>Bai 4</h3>
      <Progress4 />
      <h3>Bai 5</h3>
      <StudentTable students={mockStudents} />
      <TodoListAnimated />
    </div>
  );
}
