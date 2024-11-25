type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>Profile name is: {name}</div>;
};

export default Profile;
export type { ProfileProps };
