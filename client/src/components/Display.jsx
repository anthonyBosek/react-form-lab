const Display = ({ user }) => {
  console.log(user);
  return (
    <>
      <h1>User Authenticated</h1>
      <h2>{user.email}</h2>
    </>
  );
};

export default Display;
