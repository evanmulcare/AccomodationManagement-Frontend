import React, { useState, useEffect } from 'react'
import { BiExit } from 'react-icons/bi'
import axios from 'axios';
import { Link } from 'react-router-dom';


function NewTask() {
    const [errors, setErrors] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const [input, setInput] = useState({
        title: '',
        body: '',
        priority: '',
        assigned: ''
    })


    const clearState = () => {
        setInput({
            title: '',
            body: '',
            priority: '',
            assigned: '',
        });
    };

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function validationChecks() {
        let errors = [];
        const titleRegex = /^[a-zA-Z]{3,20}$/; // regex for title
        const taskRegex = /^[\w\s\S]{3,255}$/; // regex for body
        const assignedToRegex = /^E\d{2}$/; // regex for employee ID 

        if (!input.title) {
            errors.push("Title is required");
        } else if (!titleRegex.test(input.title)) {
            errors.push("Title should be between 3-20 alphabetical characters");
        }

        if (!input.body) {
            errors.push("A task description is required");
        } else if (!taskRegex.test(input.body)) {
            errors.push("Task description should be between 3-255 alphabetical characters");
        }

        if (!input.priority) {
            errors.push("Priority level is required");
        }

        if (!input.assigned) {
            errors.push("Assigned Employee Id is required");
        } else if (!assignedToRegex.test(input.assigned)) {
            errors.push("Employee ID should be in the format of 'E' followed by 2 digits i.e E01");
        }

        return errors;
    }

    function handleClick(event) {
        event.preventDefault();

        const errors = validationChecks();

        if (errors.length > 0) {
            setErrors(errors);
            setShowConfirmation(false);
            return;
        }

        const NewTask = {
            title: input.title,
            body: input.body,
            priority: input.priority,
            assigned: input.assigned,
        }

        axios.post('https://accomodationmanagementbackend.onrender.com/tasks', NewTask)
            .then(function (response) {
                console.log(response);
                setShowConfirmation(true);
                setErrors([]);


            })
            .catch(function (error) {
                console.log(error);
            });

        clearState();
    }

    useEffect(() => {
        if (showConfirmation) {
            setTimeout(() => {
                setShowConfirmation(false);
            }, 2000);
        }
    }, [showConfirmation]);


    return <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl grid h-screen place-items-center'>

        <Link to='/tasks'><BiExit className='text-2xl mt-5 mb-5 cursor-pointer' /></Link>
        <h1 className='text-2xl font-bold mb-5 mt-5'>Add a new Task!</h1>
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Title
                    </label>
                    <input onChange={handleChange} name="title" value={input.title} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-title" type="text" placeholder="Title" required />
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Task for completion
                    </label>
                    <textarea onChange={handleChange} name="body" value={input.body} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="4" cols="50" type="text" placeholder="Task" required />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Priority
                    </label>
                    <select name='priority' onChange={handleChange} value={input.priority} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option value="" disabled>Select priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Assigned to Employee ID
                        </label>
                        <input onChange={handleChange} name="assigned" value={input.assigned} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-assigned" type="text" placeholder="Employee ID" required />

                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center mt-4 mb-4'>
                <button onClick={handleClick} className="bg-lime-700 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Add Task
                </button>
            </div>

            {showConfirmation && (
                <div className="bg-green-500 text-white text-center p-3 rounded-lg">
                    Task submitted successfully.
                </div>
            )}
            {errors.length > 0 && (
                <div className="bg-red-500 text-white text-center p-3 rounded-lg">
                    {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}

        </form>
    </div>
}


export default NewTask