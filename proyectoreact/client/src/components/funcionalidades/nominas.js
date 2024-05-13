import { useState, useEffect } from "react";
import axios from "axios";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
    fontFamily: 'Helvetica',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: '1px solid #000',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
});

function Nominas() {
  const [nominas, setNominas] = useState([]);
  const [empleado, setEmpleado] = useState([]);
  const id = localStorage.getItem('usuarioId');
  
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/api/nomina/id/${id}`)
        .then((response) => {
          console.log(response.data);
          setNominas(response.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);
 
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/api/empleado/${id}`)
        .then((response) => {
          console.log(response.data);
          setEmpleado(response.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  // Función para renderizar el PDF en el navegador
  const renderPDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Nómina Mensual</Text>
          <Text style={styles.subtitle}>Empleado:</Text>
          <Text style={styles.text}>{empleado.nombre}</Text>
          <Text style={styles.subtitle}>Detalles:</Text>
        </View>
        {nominas.map((nomina, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.subtitle}>Fecha: {nomina.fecha}</Text>
            <Text style={styles.text}>Horas trabajadas: {nomina.horas}</Text>
            <Text style={styles.text}>Sueldo: {nomina.sueldo}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );

  return (
    <>
      {/* Visualizador de PDF en el navegador */}
      <PDFViewer style={{ width: '100%', height: '100vh' }}>
        {renderPDF()}
      </PDFViewer>
    </>
  );
}

export default Nominas;

