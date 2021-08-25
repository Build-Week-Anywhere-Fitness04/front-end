import axiosWithAuth from "../../helpers/axiosWithAuth";
import ClassList from "./ClassList";

const ClientPage = () => {
  const [editing, setEditing] = useState(false);
  const [classes, setClasses] = [];

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const deleteClass = (classToDelete) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/classes/${classToDelete.id}`)
      .then(() => {
        setClasses(classes.filter((item) => item.id !== classToDelete.id));
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  return (
    <div className="container">
      <ClassList toggleEdit={toggleEdit} deleteClass={deleteClass} />
    </div>
  );
};

export default ClientPage;
