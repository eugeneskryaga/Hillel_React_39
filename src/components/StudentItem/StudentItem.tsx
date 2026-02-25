import type { Student } from "../../types/types"

interface Props {
    student: Student
    onDelete: (id: number) => void
    onStatusChange: (id: number) => void
}

export const StudentItem = ({ student, onDelete, onStatusChange } : Props) => {
    return (
        <>
            <img src={student.avatar} alt="Avatar"></img>
            <p><span>Name:</span> {student.name}</p>
            <p><span>Age:</span> {student.age}</p>
            <p><span>Course:</span> {student.course}</p>
            <p><span>Status:</span> {student.isOnline ? "Online \u{1F7E2}" : "Offline \u{1F534}"}</p>
            <button onClick={() => console.log(student)}>View Profile</button>
            <button onClick={() => onDelete(student.id)}>Delete Student</button>
            <button onClick={() => onStatusChange(student.id)}>Change online status</button>
        </>
    )
}