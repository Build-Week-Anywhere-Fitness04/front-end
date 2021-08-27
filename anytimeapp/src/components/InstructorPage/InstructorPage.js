import AddClass from "./AddClass";
import React, { useState } from "react";
import dummyData from "../../dummyData/dummyData";
import InstructorClasses from "../InstructorPage/InstructorClasses";
const initialClassFormValues = {
  theClassName: "",
  classType: "",
  classStartTime: "",
  classDuration: "",
  classIntensity: "",
  classLocation: "",
  maxClassSize: 0,
};
export default function InstructorPage() {
  const [classes, setClasses] = useState(dummyData);
  const [classFormValues, setClassFormValues] = useState(
    initialClassFormValues
  );
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 bg-gray-700">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                  href="http://localhost:3000/Home"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="http://localhost:3000/Home"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </a>
                <a
                  href="http://localhost:3000/Settings"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstructorClasses
        classFormValues={classFormValues}
        setClassFormValues={setClassFormValues}
        classes={classes}
        setClasses={setClasses}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <AddClass
        initialClassFormValues={initialClassFormValues}
        classFormValues={classFormValues}
        setClassFormValues={setClassFormValues}
        classes={classes}
        setClasses={setClasses}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </>
  );
}
