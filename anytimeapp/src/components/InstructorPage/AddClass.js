import React, { useState } from 'react';
import { storage } from '../Firebase';

const initialClassFormValues = {
  theClassName: '',
  classType: '',
  classStartTime: '',
  classDuration: '',
  classIntensity: '',
  classLocation: '',
  maxClassSize: 0,
}



export default function AddClass() {

  const [classFormValues, setClassFormValues] = useState(initialClassFormValues)

  const classFormChange = evt => {
    const { name, value } = evt.target
    setClassFormValues({
      ...classFormValues,
      [name]: value
    })
  }

  return (
    <>
      <h2 className="mb-4 mt-6 text-center text-3xl font-extrabold text-gray-900">Create a New Class</h2>
      <form>
        <div className="isolate -space-y-px rounded-md shadow-sm w-1/3 mx-auto">
          <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="Class Name" className="block text-xs font-medium text-gray-700">
              Class Name
            </label>
            <input
              type="text"
              name="theClassName"
              value={classFormValues.theClassName}
              onChange={classFormChange}
              id="theClassName"
              className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Class Name"
            />
          </div>
          <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="Class Type" className="block w-full text-xs font-medium text-gray-700">
              Type
            </label>
            <input
              type="text"
              name="classType"
              value={classFormValues.classType}
              onChange={classFormChange}
              id="classType"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="e.g Yoga, Weight Training, etc..."
            />
          </div>
          <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="Class Start Time" className="block w-full text-xs font-medium text-gray-700">
              Start Time
            </label>
            <input
              type="time"
              name="classStartTime"
              value={classFormValues.classStartTime}
              onChange={classFormChange}
              id="classStartTime"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="When does the class begin?"
            />
          </div>
          <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="Class Duration" className="block w-full text-xs font-medium text-gray-700">
              Duration
            </label>
            <input
              type="text"
              name="classDuration"
              value={classFormValues.classDuration}
              onChange={classFormChange}
              id="classDuration"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="How long is the class?"
            />
          </div>
          <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="Class Intensity" className="block w-full text-xs font-medium text-gray-700">
              Intensity
            </label>
            <select
              name="classIntensity"
              value={classFormValues.classIntensity}
              onChange={classFormChange}
              id="classIntensity"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            >
              <option value=''>Select Intensity</option>
              <option value='Easy'>Easy</option>
              <option value='Moderate'>Moderate</option>
              <option value='Hard'>Hard</option>
            </select>
          </div>
          <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="Class Location" className="block w-full text-xs font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="classLocation"
              value={classFormValues.classLocation}
              onChange={classFormChange}
              id="classLocation"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Where is the class being held?"
            />
          </div>
          <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="Max Class Size" className="block w-full text-xs font-medium text-gray-700">
              Class Capacity
            </label>
            <input
              type="number"
              name="maxClassSize"
              value={classFormValues.maxClassSize}
              onChange={classFormChange}
              id="maxClassSize"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="What is the maximum class size?"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Class!
          </button>
        </div>
      </form>
    </>
  )
}