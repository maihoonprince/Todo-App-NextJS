"use client"
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title);
    console.log(desc);
    settitle("")
    setdesc("")
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        ToDo App
      </h1>
      <form onSubmit={submitHandler}>
        <input 
        type="text" 
        className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2" placeholder="Enter Title Here" 
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }} />

        <input 
        type="text" 
        className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2" 
        placeholder="Enter Description Here"
        value={desc}
        onChange={(e) => {
          setdesc(e.target.value)
        }}
        />

        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded">Add Task</button>
      </form>
    </>
  );
};

export default page;
