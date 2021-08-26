import { db } from "../Firebase";
import React, { useState, useEffect } from 'react';

const initialClassesList = [
  {
    theClassName: "Beginner Yoga",
    classType: "Yoga",
    classStartTime: "12:00 PM",
    classDuration: "60",
    classIntensity: "Easy",
    classLocation: "GymA",
    numberAttendees: "5",
    maxClassSize: "10",
  },
  {
    theClassName: "Advanced Yoga",
    classType: "Yoga",
    classStartTime: "2:00 PM",
    classDuration: "60",
    classIntensity: "Hard",
    classLocation: "GymB",
    numberAttendees: "7",
    maxClassSize: "10",
  },
  {
    theClassName: "Moderate Weight Training",
    classType: "Weight Training",
    classStartTime: "9:00 AM",
    classDuration: "45",
    classIntensity: "Moderate",
    classLocation: "GymC",
    numberAttendees: "12",
    maxClassSize: "20",
  },
];

export default function ClassList() {

  const [classes, setClasses] = useState(initialClassesList)

  useEffect(() => {
    const fetchClasses = async () => {

      const response = db.collection('classes');
      const data = await response.get();

      data.docs.forEach(item => {
        setClasses([...classes, item.data()])
      })
    }
    fetchClasses();
  }, [])

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Class Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Class Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Start Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Class Duration
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Class Intensity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Class Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Max Attendees
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Max Class Size
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classes && classes.map((classes) => (
                  <tr key={classes.theClassName}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {classes.theClassName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {classes.classType}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {classes.classStartTime}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {classes.classDuration}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {classes.classIntensity}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {classes.classLocation}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {classes.numberAttendees}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {classes.maxClassSize}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
