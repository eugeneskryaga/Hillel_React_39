import { useState } from "react"
import { data } from "../../data/data"
import { StudentList } from "./StudentList/StudentList"

export const App = () => {
    const [students, setStudents] = useState(data)

    console.log(setStudents)

    return (
    <>
        <StudentList student={students}/>
    </>
    )
}