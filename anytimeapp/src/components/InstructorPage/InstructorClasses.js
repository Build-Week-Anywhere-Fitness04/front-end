import './InstructorClass.css'

export default function InstructorClasses({ classes, setClasses }){



return(
    <div className='instructor-classes'>
    <h2>All Classes</h2>
<div class="classes-container">
    {
        classes.map(item => {
          return (
            <div class="class-container">
              <h4>{item.theClassName}</h4>
              <ul>
              <li>Type: {item.classType}</li>
              <li>Time: {item.classStartTime}</li>
              <li>Duration: {item.classDuration}</li>
              <li>Intensity: {item.classIntensity}</li>
              <li>Location: {item.classLocation}</li>
              <li>Number Registered: {item.numberAttendees}</li>
              <li>Class Capacity: {item.maxClassSize}</li>
              </ul> 
              <div className='button-container'>
              <button className='edit'>Edit Class</button>
              <button className='delete'>Delete Class</button>
              </div>
            </div>
          )
        })
    }
    </div>
    </div>
)
}

{/* {
    theClassName: "Moderate Weight Training",
    classType: "Weight Training",
    classStartTime: "9:00 AM",
    classDuration: "45",
    classIntensity: "Moderate",
    classLocation: "GymC",
    numberAttendees: 12,
    maxClassSize: 20,
  }, */}