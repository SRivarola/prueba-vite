import { useState } from "react";

function App() {
  const [data, setData] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://apdcc.onrender.com/api/auth/login', {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        console.log('logueado')
        return `¡Inicio de sesión exitoso! 😄 ¡Bienvenid@!`;
      } else {
        console.log(`Oops, algo salió mal en el inicio de sesión. 😕`);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="text"
            name="mail"
            value={data.mail}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <input type="submit" value="enviar" />
        </div>
      </form>
    </div>
  );
}

export default App;
