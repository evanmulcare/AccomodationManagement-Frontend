import React, { useEffect, useState } from 'react';
import { Header } from '../../components/content';
import { Link } from 'react-router-dom'
import { GrView } from 'react-icons/gr'
import { BsFillTrashFill, BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsThreeDotsVertical } from 'react-icons/bs'


import Axios from 'axios';

const Tasks = () => {

  const [inProgress, setInProgress] = useState([])
  const [review, setReview] = useState([]);
  const [completed, setCompleted] = useState([]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);


  const toggleOptions = (taskId) => {
    // If the task is already selected, it will unselect it by setting the selected task to null.
    if (selectedTask === taskId) {
      setSelectedTask(null);
    } else {
      // Otherwise, it will select the task by setting it as the new selected task.
      setSelectedTask(taskId);
    }
  };


  useEffect(() => {
    Axios.get('https://accomodationmanagementbackend.onrender.com/tasks')
      .then(res => {
        // set the state of the arrays with these filtered tasks.
        setInProgress(res.data.filter(task => task.status === 'inProgress'));
        setReview(res.data.filter(task => task.status === 'review'));
        setCompleted(res.data.filter(task => task.status === 'completed'));
      })
      .catch(err => console.error(err));
  }, []);

  const taskDelete = (id, e) => {
    e.preventDefault();
    Axios.delete(`https://accomodationmanagementbackend.onrender.com/tasks/${id}`)
      .then(function (response) {
        console.log(response);
        setShowConfirmation(true);
        //filter he arrays of tasks to remove the deleted task.
        setInProgress(inProgress.filter((task) => task._id !== id));
        setReview(review.filter((task) => task._id !== id));
        setCompleted(completed.filter((task) => task._id !== id));
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  const updateTaskStatus = async (task, status) => {
    try {
      const res = await Axios.put(`https://accomodationmanagementbackend.onrender.com/tasks/${task._id}`, { status });
      console.log('Updated', res);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    if (showConfirmation) {
      setTimeout(() => {
        setShowConfirmation(false);
      }, 2000);
    }
  }, [showConfirmation]);



  function renderTask(data) {
    const isCurrentTask = data._id === selectedTask;

    return (
      <li className="group relative bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-medium mb-2 uppercase text-gray-600 text-lg">{data.title}</h2>
            <span className={`inline-block py-1 px-2 rounded-md text-white ${data.priority === 'low' ? 'bg-green-500' : data.priority === 'medium' ? 'bg-yellow-500' : 'bg-red-500'}`}>
              {data.priority}
            </span>
            <p className="mt-2 text-gray-600">{data.body}</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button className="p-1 rounded-full text-gray-600 hover:text-black focus:outline-none" onClick={() => toggleOptions(data._id)}>
                <BsThreeDotsVertical />
              </button>
              {isCurrentTask && (
                <ul className="absolute z-10 right-0 w-40 py-2 mt-2 bg-white rounded-md shadow-md">
                  <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                    <Link className="flex items-center space-x-2" to={`/task/${data._id}`}>
                      <GrView className="text-gray-600" />
                      <span>View Task</span>
                    </Link>
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                    <button onClick={(e) => taskDelete(data._id, e)} className="flex items-center space-x-2">
                      <BsFillTrashFill className="text-gray-600" />
                      <span>Delete Task</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-1 rounded-full text-lime-500 hover:text-lime-600 focus:outline-none" onClick={() => moveTaskToPrevColumn(data)}>
                <BsFillArrowLeftCircleFill />
              </button>
              <button className="p-1 rounded-full text-lime-500 hover:text-lime-600 focus:outline-none" onClick={() => moveTaskToNextColumn(data)}>
                <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <h5 className="text-gray-500 font-medium text-sm mb-2 uppercase">Assigned to:</h5>
          <Link className="font-medium text-lime-500 hover:underline">
            {data.assigned}
          </Link>
        </div>
      </li>
    );
  }


  function TaskColumn(props) {
    const { tasks, columnTitle } = props;
    return (
      <div
        className='w-72 bg-gray-50 max-h-full flex flex-col rounded-md'
      >
        {/* Column header */}
        <div className='flex items-center justify-between px-3 py-2'>
          <h3 className='font-medium mb-2 uppercase text-gray-600 text-md'>{columnTitle}</h3>
          <button className='hover:bg-gray-300 w-8 h-8 rounded-md grid place-content-center'>
            {tasks.length}
          </button>
        </div>
        {/* Column tasks */}
        <div className='px-3 pb-3 overflow-y-auto'>
          <ul className='space-y-3'>
            {tasks.map(data => (
              <li key={data._id} className='group relative bg-white p-3 shadow rounded-md border-b border-gray-200 hover:bg-gray-50'>
                {/* Task content */}
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }


  // Move task to next column
  const moveTaskToNextColumn = (task) => {
    if (inProgress.includes(task)) {
      // Remove task from inProgress column
      const updatedInProgress = inProgress.filter((t) => t !== task);
      setInProgress(updatedInProgress);

      // Add task to review column
      const updatedReview = [...review, task];
      setReview(updatedReview);

      // Update task status to 'review'
      updateTaskStatus(task, 'review');
    } else if (review.includes(task)) {
      // Remove task from review column
      const updatedReview = review.filter((t) => t !== task);
      setReview(updatedReview);

      // Add task to completed column
      const updatedCompleted = [...completed, task];
      setCompleted(updatedCompleted);

      // Update task status to 'completed'
      updateTaskStatus(task, 'completed');
    } // Else if task is in completed column, do nothing
  };

  // Move task to previous column
  const moveTaskToPrevColumn = (task) => {
    if (completed.includes(task)) {
      // Remove task from completed column
      const updatedCompleted = completed.filter((t) => t !== task);
      setCompleted(updatedCompleted);

      // Add task to review column
      const updatedReview = [...review, task];
      setReview(updatedReview);

      // Update task status to 'review'
      updateTaskStatus(task, 'review');
    } else if (review.includes(task)) {
      // Remove task from review column
      const updatedReview = review.filter((t) => t !== task);
      setReview(updatedReview);

      // Add task to inProgress column
      const updatedInProgress = [...inProgress, task];
      setInProgress(updatedInProgress);

      // Update task status to 'inProgress'
      updateTaskStatus(task, 'inProgress');
    } // Else if task is in inProgress column, do nothing
  };



  const inProgressArr = inProgress.map(renderTask);
  const reviewArr = review.map(renderTask);
  const completedArr = completed.map(renderTask);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {showConfirmation && (
        <div className="bg-red-500 text-white text-center p-3 rounded-lg">
          Task Deleted successfully.
        </div>
      )}

      <div className='flex justify-between items-center mb-6'>
        <Header category="Planning" title="Tasks" />
        <Link to="/new-task">
          <button className='bg-lime-700 hover:bg-lime-600 text-white font-medium py-2 px-4 rounded-md'>Add Task</button>
        </Link>
      </div>

      <div className='flex-1 overflow-x-auto hidden md:block'>
        <div className='inline-flex h-full items-start px-4 pb-4 space-x-4'>
          {/* In Progress column */}
          <TaskColumn tasks={inProgressArr} columnTitle='In Progress' />

          {/* Review column */}
          <TaskColumn tasks={reviewArr} columnTitle='Under Review' />

          {/* Completed column */}
          <TaskColumn tasks={completedArr} columnTitle='Completed' />
        </div>
      </div>
    </div>
  );
}

export default Tasks;


