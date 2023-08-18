import jsPDF from 'jspdf';

const jsonData = [
  // ... (tu JSON aquí)
];

const doc = new jsPDF();

jsonData.forEach((item) => {
  if (item.insert) {
    const text = item.insert;

    let attributes = {};
    if (item.attributes) {
      attributes = item.attributes;
    }

    const align = attributes.align || 'left';

    // Establecer alineación, estilo, tamaño de fuente, etc.
    if (attributes.bold) {
      doc.setFontStyle('bold');
    } else {
      doc.setFontStyle('normal');
    }

    // Aquí puedes agregar más atributos según sea necesario, como italic, underline, etc.

    doc.text(text, { align });

    doc.setFontStyle('normal'); // Restablecer el estilo de fuente
  }
});

doc.save('example.pdf');