import InstClass from './InstClass'

export default function InstructorClasses(props){

  const { classes, setClasses, setClassFormValues, isEditing, setIsEditing } = props

function handleEdit(id){
  const cl = classes.find(cl => cl.id === id)
  setClassFormValues({...cl})
}

  function handleDelete(id){
    setClasses(existing => existing.filter(cl => cl.id !== id))
}
 
return(
  <div className='mx-2'>
  <h2 className="mb-4 mt-6 text-center text-3xl font-extrabold text-gray-900">All Classes</h2>
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

  {classes.map((item) => {
    return <InstClass cl={item} setClasses={setClasses} key={item.id} id={item.id} onEdit={handleEdit} onRemove={handleDelete} isEditing={isEditing} setIsEditing={setIsEditing}/>
  })}

     </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
)

}



