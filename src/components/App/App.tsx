import { useState } from "react"
import { data } from "../../data/data"
import { StudentList } from "./StudentList/StudentList"

export const App = () => {
    const [students, SetStudents] = useState(data)

    return (
    <>
        <StudentList student={students}/>
    </>
    )
}