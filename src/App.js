import Box from "./Box";

function App() {
  let users = [
    { id: 1, firstName: "avin", lastName: "esmaeili", age: 32 },
    { id: 2, firstName: "suni", lastName: "es", age: 38 },
    { id: 3, firstName: "sali", lastName: "esp", age: 36 },
    { id: 4, firstName: "suri", lastName: "savoj", age: 52 },
  ];
  return (
    // <>
    //   <Box {...users[0]} />
    //   <Box {...users[1]} />
    //   <Box {...users[2]} />
    //   <Box {...users[3]} />
    // </>

    // <>
    //      {users.map(user=> <Box key={user.id} {...user} />
    //     )}
    // </>

    <>
      {users.map((user) => (
        <div key={user.id}>
          <Box {...user} />
          <h1>asal</h1>
        </div>
      ))}
    </>
  );
}

export default App;
