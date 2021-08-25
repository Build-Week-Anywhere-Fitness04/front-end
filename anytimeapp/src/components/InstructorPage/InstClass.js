

export default function InstClass({cl, id, onRemove, onEdit, setIsEditing}){
    
    function editClass(){
        setIsEditing(true)
        onEdit(id)
        onRemove(id)
    }

    function deleteClass(){
      onRemove(id)
    }
    
    return (
                    <tr key={id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {cl.theClassName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cl.classType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cl.classStartTime}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cl.classDuration}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cl.classIntensity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cl.classLocation}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cl.numberAttendees}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cl.maxClassSize}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={editClass}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                            
                          </button>
                          <button
                          onClick={deleteClass}
                            className="ml-8 text-red-500 hover:text-indigo-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                   
               
      );
    }
