import { useState } from "react"

import type { Student } from "../../types/types"

import { data } from "../../data/data"
import { StudentList } from "../StudentList/StudentList"
import { Form } from "../Form/Form"

export const Students = () => {
    const [students, setStudents] = useState(data)

    const deleteStudent = (id: number) => {
        setStudents((prevStudents) => prevStudents.filter((student) => id != student.id) )
    }

    const changeStudentStatus = (id: number, isOnline: boolean) => {
        setStudents(
            students.map((student) => {
                if (student.id === id) {
                    return {...student, isOnline}
                }
                return student
            })
        )
    }

    const addStudent = (newStudent: Student) => {
        setStudents([...students, newStudent])
    }

    return (
        <>
            <StudentList students={students} onDelete={deleteStudent} onStatusChange={changeStudentStatus}/>
            <Form onAdd={addStudent}/>
        </>
    )
}
