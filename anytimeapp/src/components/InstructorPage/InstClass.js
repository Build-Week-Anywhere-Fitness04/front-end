export default function InstClass({ cl, id, onRemove, onEdit, setIsEditing }) {

    function editClass() {
        setIsEditing(true)
        onEdit(id)
        onRemove(id)
    }

    function deleteClass() {
        onRemove(id)
    }

    return (
        <tr key={id}>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                {cl.theClassName}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {cl.classType}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {cl.classStartTime}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {cl.classDuration}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {cl.classIntensity}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {cl.classLocation}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {cl.numberAttendees}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {cl.maxClassSize}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
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