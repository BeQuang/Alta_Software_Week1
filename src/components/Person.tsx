import { PersonNameProps } from "./Person.types";

const Person = (props: PersonNameProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
