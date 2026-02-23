import type { Student } from "../../types/types";
import { StudentItem } from "../Student/Student";

interface Props {
    students: Student[]
}

export const StudentList = ({students} : Props) => {
    return (
        <ul>
            {students.map((student) => (
                <li key={student.id}>
                    <StudentItem student={student}/>
                </li>
            ))}
        </ul>
    )
}