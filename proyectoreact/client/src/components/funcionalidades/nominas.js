import { useState, useEffect } from "react";
import axios from "axios";

function Nominas() {
  const [nominas, setNominas] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem('usuarioId');
    try{
      axios
      .get(`http://localhost:5000/api/nomina/id/${id}`)
      .then((response) => {
        console.log(response.data);
        setNominas(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      ;}
      catch(error){
        console.error("Error:", error);
      }
  }, []);



  return (
   <>
   <h1>{nominas[0].total_bruto}</h1>
   </>
  );
}

export default Nominas;