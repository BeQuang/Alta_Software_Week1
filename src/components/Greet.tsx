type GreetProps = {
  name: string;
  age?: number;
};

const Greet = ({ name, age }: GreetProps) => {
  return (
    <div>
      <h2>
        Welcome {name}! Are you {age} years old?
      </h2>
    </div>
  );
};

export default Greet;
