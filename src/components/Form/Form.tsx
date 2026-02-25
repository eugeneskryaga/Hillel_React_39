import { useId } from "react";

import type { Student } from "../../types/types";

interface Props {
  onAdd: (newStudent: Student) => void;
}

export const Form = ({ onAdd }: Props) => {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("firstname") as string;
    const age = Number(formData.get("age"));
    const course = formData.get("course") as string;
    const avatar = formData.get("avatar") as string;

    const newStudent: Student = {
      id: Date.now(),
      name,
      age,
      course,
      isOnline: false,
      avatar,
    };
    onAdd(newStudent);
  };

  return (
    <form action={handleSubmit}>
      <h2>Add student</h2>
      <label htmlFor={`firstname-${id}`}>Name: </label>
      <input
        id={`firstname-${id}`}
        type="text"
        name="firstname"
        required
      />
      <label htmlFor={`age-${id}`}>Age: </label>
      <input
        id={`age-${id}`}
        type="number"
        name="age"
        required
      />
      <label htmlFor={`course-${id}`}>Course: </label>
      <input
        id={`course-${id}`}
        type="text"
        name="course"
        required
      />
      <label htmlFor={`link-${id}`}>Avatar link: </label>
      <input
        id={`link-${id}`}
        type="url"
        name="avatar"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};
