import { useState, useEffect } from "react";
import axios from "axios";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Define los estilos para el PDF con colores
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    color: "#4a90e2",
    marginBottom: 20,
    borderBottom: "2px solid #4a90e2",
    paddingBottom: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    border: "1px solid #4a90e2",
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  table: {
    display: "table",
    width: "auto",
    marginTop: 20,
    borderStyle: "solid",
    borderColor: "#4a90e2",
    borderWidth: 1,
    borderRadius: 5,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    backgroundColor: "#4a90e2",
    color: "#ffffff",
    padding: 5,
    textAlign: "center",
  },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#4a90e2",
    padding: 5,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  text: {
    marginBottom: 5,
  },
});

function Nominas() {
  const [nominas, setNominas] = useState();
  const [empleado, setEmpleado] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(null);
  const id = localStorage.getItem("usuarioId");
  const [mostrarNominas, setMostrarNominas] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/nomina/id/${id}`)
      .then((response) => {
        console.log(response.data);
        setNominas(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/empleado/${id}`)
      .then((response) => {
        console.log(response.data);
        setEmpleado(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  const handleMonthClick = (month) => {
    if (selectedMonth === month) {
      setMostrarNominas(true);
      setSelectedMonth(null); // Cierra el PDF si se hace clic en el mismo mes
    } else {
      setMostrarNominas(false);
      setSelectedMonth(month); // Abre el PDF si se hace clic en un mes diferente
    }
  };

  const renderPDF = () => {
    const nomina = nominas.find((n) => n.mes === selectedMonth);
    if (!nomina) return null;

    return (
      <Document>
        <Page style={styles.page}>
          <Text style={styles.header}>
            Nómina de {empleado.nombre} {empleado.apellido1}{" "}
            {empleado.apellido2}
          </Text>
          <View style={styles.section}>
            <Text style={[styles.bold, styles.text]}>
              Información del Empleado:
            </Text>
            <Text style={styles.text}>DNI: {empleado.dni}</Text>
            <Text style={styles.text}>
              Nombre: {empleado.nombre} {empleado.apellido1}{" "}
              {empleado.apellido2}
            </Text>
            <Text style={styles.text}>Puesto: {empleado.puesto}</Text>
            <Text style={styles.text}>Teléfono: {empleado.telefono}</Text>
            <Text style={styles.text}>Dirección: {empleado.direccion}</Text>
            <Text style={styles.text}>Correo: {empleado.correo}</Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.bold, styles.text]}>
              Detalles de la Nómina - Mes: {nomina.mes}
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={[styles.tableCol, styles.tableColHeader]}>
                  <Text style={styles.tableCell}>Concepto</Text>
                </View>
                <View style={[styles.tableCol, styles.tableColHeader]}>
                  <Text style={styles.tableCell}>Cantidad</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Total Bruto</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{nomina.total_bruto} €</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Horas Extra</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{nomina.horas_extra} €</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Bonificaciones</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {nomina.bonificaciones} €
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Deducciones</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{nomina.deducciones} €</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Total Neto</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{nomina.total_neto} €</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  };

  if (!nominas) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="w-full h-full overflow-auto">
      <div className="p-4 bg-white overflow-hidden">
        <div>
          <h2 className="titulo-textos text-center text-xl font-semibold">
            {" "}
            Consulta tus Nóminas{" "}
          </h2>
          <ul className=" mt-10">
            {mostrarNominas ? (
              nominas.map((nomina) => (
                <li
                  className="textos-importantes font-semibold p-2 text-center hover:border-blue-500 hover:border-2"
                  key={nomina.id}
                >
                  <a href="#" onClick={() => handleMonthClick(nomina.mes)}>
                    {nomina.mes}
                  </a>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
        {/* Visualizador de PDF en el navegador */}
        {selectedMonth && (
          <div>
            <button className= "textos-importantes font-semibold p-2 text-center hover:border-blue-500 hover:border-2"
              onClick={() => {
                setSelectedMonth(null);
                setMostrarNominas(true);
              }}
              style={{ marginBottom: "10px" }}
            >
              Cerrar
            </button>
            <PDFViewer style={{ width: "100%", height: "100vh" }}>
              {renderPDF()}
            </PDFViewer>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nominas;
