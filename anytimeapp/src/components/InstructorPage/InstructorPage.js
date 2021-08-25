import AddClass from "./AddClass";
import React, { useState } from "react";
import dummyData from "../../dummyData/dummyData";
import InstructorClasses from "../InstructorPage/InstructorClasses";

export default function InstructorPage() {
  const [classes, setClasses] = useState(dummyData);

  return (
    <>
      <InstructorClasses classes={classes} setClasses={setClasses} />
      <AddClass classes={classes} setClasses={setClasses} />
    </>
  );
}
