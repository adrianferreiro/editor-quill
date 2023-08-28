import React, { useEffect, useRef } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const VistaPrevia = () => {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: false,
    },
    readOnly: true,
  });

  const editorContentRef = useRef('');

  useEffect(() => {
    if (quill) {
      const savedContent = localStorage.getItem('editorContent');
      if (savedContent) {
        quill.root.innerHTML = savedContent;
      }
      editorContentRef.current = quill.root.innerHTML;
    }
  }, [quill]);

  const generatePDF = async () => {
    if (quill && editorContentRef.current) {
      const doc = new jsPDF();
      const content = editorContentRef.current;

      const canvas = await html2canvas(quill.root, { scale: 2 });

      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

      doc.save('example.pdf');
    }
  };

  return (
    <>
      <div ref={quillRef}></div>
      <button onClick={generatePDF}>Imprimir</button>
    </>
  );
};


// import React, { useEffect } from 'react';
// import { useQuill } from 'react-quilljs';
// import 'quill/dist/quill.snow.css';
// import jsPDF from 'jspdf';

// export const VistaPrevia = () => {
//   const { quill, quillRef } = useQuill({
//     modules: {
//       toolbar: false
//     },
//     readOnly: true,
//   });

//   useEffect(() => {
//     if (quill) {
//       const savedContent = localStorage.getItem('editorContent');
//       if (savedContent) {
//         quill.root.innerHTML = savedContent;
//       }
//     }
//   }, [quill]);

//   const generatePDF = () => {
//     if (quill) {
//       const doc = new jsPDF();

//       let yPosition = 10; // Posición vertical de inicio

//       const content = quill.root.innerHTML;
//       const parser = new DOMParser();
//       const docContent = parser.parseFromString(content, 'text/html');
//       const paragraphs = docContent.querySelectorAll('p'); // Ajusta el selector según la estructura HTML generada por Quill

//       paragraphs.forEach((paragraph) => {
//         const text = paragraph.textContent;

//         // Ajustar tamaño y estilo de fuente según sea necesario
//         doc.setFontSize(12); // Tamaño de fuente
//         doc.setFont('helvetica', 'normal'); // Fuente y estilo

//         // Calcular el ancho del texto para alineación
//         const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;

//         // Calcular la posición horizontal según la alineación
//         const xPosition = (doc.internal.pageSize.getWidth() - textWidth) / 2;

//         // Agregar el texto al PDF
//         doc.text(text, xPosition, yPosition);

//         // Actualizar la posición vertical
//         yPosition += doc.internal.getFontSize() + 5; // Espacio entre líneas
//       });

//       doc.save('example.pdf');
//     }
//   };

//   return (
//     <>
//       <div ref={quillRef}></div>
//       <button onClick={generatePDF}>Imprimir</button>
//     </>
//   );
// };
