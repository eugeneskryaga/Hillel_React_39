import type { Student } from "../../types/types"

interface Props {
    student: Student
}

const handleClick = () => {
    console.log("Clicked")
}

export const StudentItem = ({ student } : Props) => {
    return (
        <>
            <img src={student.avatar}></img>
            <p><span>Name:</span> {student.name}</p>
            <p><span>Age:</span> {student.age}</p>
            <p><span>Course:</span> {student.course}</p>
            <p><span>Status:</span> {student.isOnline ? "Online \u{1F7E2}" : "Ofline \u{1F534}"}</p>
            <button onClick={handleClick}>View Profile</button>
        </>
    )
}