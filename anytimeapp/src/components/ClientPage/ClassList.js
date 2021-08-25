import React from "react";
import { useState } from "react";
import { SearchIcon} from '@heroicons/react/solid'


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
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="bg-white lg:min-w-0 lg:flex-1">
    <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className="flex items-center">
            <h1 className="flex-1 text-lg font-medium">Classes</h1>
            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>

                        <input
                            id="search"
                            name="search"
                            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                            placeholder="Search..."
                            type="search"
                            onChange={event => {setSearchTerm(event.target.value)}}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <div>
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Start Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class Duration
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class Intensity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Max Attendees
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Max Class Size
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {/* <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/> */}
              {initialClassesList.filter((classes) => {
                    if (searchTerm == "") {
                        return classes
                    } else if (classes.theClassName.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())) {
                        return classes
                    }
                    
                })
                .map((classes) => { 
                  return (
                  
                  <tr key={classes.theClassName}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {classes.theClassName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classes.classType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classes.classStartTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classes.classDuration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classes.classIntensity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classes.classLocation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classes.numberAttendees}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classes.maxClassSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a> */}
                      <button type="button" class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Reserve Class
</button>
                    </td>
                  </tr>
                )}) 
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
</div>
    
  );
}
