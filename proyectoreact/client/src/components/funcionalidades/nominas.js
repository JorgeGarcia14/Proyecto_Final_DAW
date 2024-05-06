import { useState, useEffect } from "react";
import axios from "axios";
function Nominas() {
  const [nominas, setNominas] = useState([]);

  //Estados para buscar nominas
  //const [search, setSearch] = useState("");
  //const [results, setResults] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem('usuarioId');
    try{
      axios
      .get(`http://localhost:5000/api/nominas/id/${id}`)
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
  
console.log(nominas);


  return (
   <></>
  );
}

export default Nominas;
