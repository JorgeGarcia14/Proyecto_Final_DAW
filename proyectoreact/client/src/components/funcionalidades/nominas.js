import { useState, useEffect } from "react";
import axios from "axios";


  //Estados para buscar nominas
  //const [search, setSearch] = useState("");
  //const [results, setResults] = useState([]);


function Nominas() {
  const [nominas, setNominas] = useState([]);
  const [empleado, setEmpleado] = useState([]);
  const id = localStorage.getItem('usuarioId');
  useEffect(() => {
    
    try{
      axios
      .get(`http://localhost:5000/api/nomina/id/${id}`)

      .then((response) => {
        console.log(response.data);
        setNominas(response.data);
      })
      ;}
      catch(error){
        console.error("Error:", error);
      }
  }, []);
 
  useEffect(() => {
    
    try{
      axios
      .get(`http://localhost:5000/api/empleado/${id}`)

      .then((response) => {
        console.log(response.data);
        setEmpleado(response.data);
      })
      ;}
      catch(error){
        console.error("Error:", error);
      }
  }, []);

return (
    <>
    <h1 className="titulo-textos text-center text-xl font-semibold mb-12 mt-8"> NOMINA PRUEBA </h1>
    <div className="wrapper">
    <div className="container">
        <div className="header">
            <h1>Empresa XYZ</h1>
            <p>Dirección: Calle 123, Ciudad, País, Código Postal</p>
        </div>
        <div className="employee-info">
            <p><strong>Nombre del empleado:</strong> Juan Pérez</p>
            <p><strong>Cargo:</strong> Desarrollador de Software</p>
            <p><strong>Fecha de pago:</strong> 30 de abril de 2024</p>
        </div>
        <div className="payroll-details">
            <table>
                <tr>
                    <th>Concepto</th>
                    <th>Detalle</th>
                    <th>Monto ($)</th>
                </tr>
                <tr>
                    <td>Salario base</td>
                    <td>40 horas semanales</td>
                    <td>2,500.00</td>
                </tr>
                <tr>
                    <td>Horas extras</td>
                    <td>10 horas extra</td>
                    <td>250.00</td>
                </tr>
                <tr>
                    <td>Bonificación</td>
                    <td></td>
                    <td>300.00</td>
                </tr>
                <tr>
                    <td colspan="2">Descuentos:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>- Seguro médico</td>
                    <td></td>
                    <td>-150.00</td>
                </tr>
                <tr>
                    <td>- Seguro social</td>
                    <td></td>
                    <td>-200.00</td>
                </tr>
                <tr>
                    <td>Total Neto</td>
                    <td></td>
                    <td>2,700.00</td>
                </tr>
            </table>
        </div>
        <div className="bank-info">
            <p><strong>Banco:</strong> Banco ABC</p>
            <p><strong>Cuenta:</strong> 1234567890</p>
        </div>
        <div className="signature">
            <p>Firma del empleado: _______________________________</p>
            <p>Fecha: 30/04/2024</p>
        </div>
    </div>
</div>
</>
);
}


export default Nominas;

