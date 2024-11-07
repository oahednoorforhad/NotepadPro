"use client"
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export default function ToDoList() {
    const session = useSession();
    useEffect(() => {
        async function fetchUser() {
            if (session) {
                const ename = encodeURIComponent(session.data.user.email);  // Ensure email is correctly encoded
                const res = await fetch(`http://localhost:3000/notepad/api?email=${ename}`); // Correct API path
                const data = await res.json();
                console.log("Fetched Data:", data); // Log the response
                setTasks(data.notes || []); // Fallback to empty array if notes is undefined or null
            }
        }
        fetchUser();
    }, [session]);

    const [tasks, setTasks] = useState([
        { title: "Bazar List", content: "gotta buy a lotta things" },
        { title: "Workout Plan", content: "Do 30 minutes of cardio and strength training" },
        { title: "Grocery List", content: "Eggs, milk, bread, and vegetables" },
        { title: "Study Goals", content: "Finish reading Chapter 5 and solve practice problems" },
        { title: "Meeting Agenda", content: "Discuss project updates and deadlines" }
    ]);

    const [newTask, setNewTask] = useState({ title: "", content: "" });

    function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>, field: 'title' | 'content') {
        setNewTask(prevTask => ({
            ...prevTask,
            [field]: event.target.value
        }));
    }

    function AddTask() {
        if (newTask.title.trim() !== "" && newTask.content.trim() !== "") {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setNewTask({ title: "", content: "" });
        }
    }

    function DeleteTask(index: number) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index: number) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index: number) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="p-10 justify-items-center">
            <div className='p-10'>
                <h3 className='text-8xl'>Notepad</h3>
            </div>
            <div className='p-5'><h3>User: Oahed</h3></div>
            <div className='flex-col w-full m-10'>
                <input
                    className='w-full h-16 rounded-xl border-foreground text-white mb-5'
                    type="text"
                    placeholder='   Enter task title...'
                    value={newTask.title}
                    onChange={(e) => handleInputChange(e, 'title')}
                /> <br />
                <Textarea className='w-full h-16 rounded-xl border-foreground text-white mb-5'
                    placeholder='   Enter task content...'
                    value={newTask.content}
                    onChange={(e) => handleInputChange(e, 'content')} />
                <br />
                <Button
                    className="font-sans font-semibold w-full h-16 rounded-xl hover:scale-105 transition-transform duration-3000"
                    onClick={AddTask}
                >
                    Add
                </Button>
            </div>
            <div className='w-full m-10'>
                <ol>
                    {Array.isArray(tasks) && tasks.map((task, index) => (
                        <li
                            className="w-full font-sans font-normal text-xl shadow-lg shadow-violet-500/50 flex justify-between gap-5 items-center p-4 m-2 border-2 rounded-xl border-violet-700"
                            key={index}
                        >
                            <div className="flex flex-col text-left min-w-max">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>{task.title}</AccordionTrigger>
                                        <AccordionContent className="text-md whitespace-pre-line">
                                            {task.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className='flex gap-5'>
                                <Button
                                    className='delete-button'
                                    onClick={() => DeleteTask(index)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    className='move-button'
                                    onClick={() => moveTaskUp(index)}
                                >
                                    ⬆️
                                </Button>
                                <Button
                                    className='move-button'
                                    onClick={() => moveTaskDown(index)}
                                >
                                    ⬇️
                                </Button>
                            </div>

                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};