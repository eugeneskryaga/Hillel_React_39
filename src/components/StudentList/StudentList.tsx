import type { Student } from "../../types/types";
import { StudentItem } from "../StudentItem/StudentItem";

interface Props {
    students: Student[]
    onDelete: (id: number) => void
    onStatusChange: (id: number) => void
}

export const StudentList = ({students, onDelete, onStatusChange} : Props) => {
    return (
        <ul>
            {students.map((student) => (
                <li key={student.id}>
                    <StudentItem student={student} onDelete={onDelete} onStatusChange={onStatusChange}/>
                </li>
            ))}
        </ul>
    )
}