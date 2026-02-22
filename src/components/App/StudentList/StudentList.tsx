import type { Student } from "../../../types/types";
import { StudentItem } from "../../Student/Student";

interface Props {
    student: Student[]
}

export const StudentList = ({student} : Props) => {
    return (
        <ul>
            {student.map((student) => (
                <li key={student.id}>
                    <StudentItem student={student}/>
                </li>
            ))}
        </ul>
    )
}