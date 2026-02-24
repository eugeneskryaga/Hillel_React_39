import { useId } from "react"

import type { Student } from "../../types/types"

interface Props {
    onAdd: (newStudent: Student) => void
}

export const Form = ({onAdd} : Props) => {
    const id = useId()

    const handleSubmit = (formData: FormData) => {
        const name = formData.get("firstname") as string;
        const age = Number(formData.get("age"));
        const course = formData.get("course") as string
        const avatar = formData.get("avatar") as string

        if (name.trim().length > 0 && course.trim().length > 0 && name.toString()) {
            if(isNaN(Number(name)) && isNaN(Number(course))) {
                const newStudent: Student = {
                id: Date.now(),
                name,
                age,
                course,
                isOnline: false,
                avatar,
            }   
            onAdd(newStudent)

            } else {
                alert("Введені ім'я та курс не мають містити цифр.")
            }
        } else {
            alert("Ім'я та курс не мають бути пустими.")
        }
    }

    return (
        <form action={handleSubmit}>
            <h2>Add student</h2>
            <label htmlFor={`firstname-${id}`}>Name: </label>
            <input id={`firstname-${id}`} type="text" name="firstname"/>
            <label htmlFor={`age-${id}`}>Age: </label>
            <input id={`age-${id}`} type="number" name="age" />
            <label htmlFor={`course-${id}`}>Course: </label>
            <input id={`course-${id}`} type="text" name="course" />
            <label htmlFor={`link-${id}`}>Avatar link: </label>
            <input id={`link-${id}`} type="url" name="avatar" />
            <button type="submit">Add</button>
        </form>
    )
}