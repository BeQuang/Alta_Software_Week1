import { Name } from "./Person.types";

type PersonListProps = {
  name: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.name.map((person, index) => (
        <h2 key={index}>
          {person.first} {person.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
