
import {useQuill} from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';

import jsPDF from 'jspdf';

export const VistaPrevia = () => {

    const jsonData = [
        {
            "insert": "Formosa, 07 de septiembre de 2017"
        },
        {
            "attributes": {
                "align": "right"
            },
            "insert": "\n"
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": " "
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": "Señora Subdirectora de la "
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": "Dirección de Sistemas Informáticos"
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": "Ing. Vera María Noemí"
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": "S_________/_________D:"
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n\n"
        },
        {
            "insert": " "
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": "Me dirijo a usted y por su digno intermedio a quien corresponda, con el fin de solicitarle tenga a bien concederme los"
        },
        {
            "attributes": {
                "italic": true,
                "bold": true
            },
            "insert": " días de Feria invernal "
        },
        {
            "insert": "no usufructuados en el último período, a partir del día 02 de octubre al 15 de octubre del corriente año inclusive."
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": "Sin otro motivo particular, me despido de Ud. atentamente."
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n\n"
        },
        {
            "insert": " "
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n\n"
        },
        {
            "insert": " "
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n\n"
        },
        {
            "insert": " "
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": " …………………………."
        },
        {
            "attributes": {
                "align": "right"
            },
            "insert": "\n"
        },
        {
            "insert": "Cáceres, Silvio Iván"
        },
        {
            "attributes": {
                "align": "right"
            },
            "insert": "\n"
        },
        {
            "insert": "D.N.I. 38.191.398"
        },
        {
            "attributes": {
                "align": "right"
            },
            "insert": "\n"
        },
        {
            "insert": "Auxiliar Mayor Técnico"
        },
        {
            "attributes": {
                "align": "right"
            },
            "insert": "\n"
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": " "
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n\n"
        },
        {
            "insert": " "
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": "============= Por recibida la presente nota del agente "
        },
        {
            "attributes": {
                "bold": true
            },
            "insert": "Cáceres, Silvio Iván"
        },
        {
            "insert": " elevo la misma a la Secretaría de Gobierno a los efectos que correspondan.-"
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n\n"
        },
        {
            "insert": " "
        },
        {
            "attributes": {
                "align": "justify"
            },
            "insert": "\n"
        },
        {
            "insert": "Formosa, 07 de septiembre de 2017.-"
        },
        {
            "attributes": {
                "align": "right"
            },
            "insert": "\n"
        },
        {
            "insert": "\n"
        }
    ];

    const ejemploTexto = 'hola';
    
    const {quill, quillRef} = useQuill(
        {
            modules: {
                toolbar: false
            },
            readOnly: true,
        },
    );

    useEffect(() => {
        if (quill) {
             const savedContent = localStorage.getItem('editorContent');
            if (savedContent) {
                quill.root.innerHTML = savedContent;
            }

            // const initialContent = [{"insert":"Formosa, 07 de septiembre de 2017"},{"attributes":{"align":"right"},"insert":"\n"},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":" "},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":"Señora Subdirectora de la "},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":"Dirección de Sistemas Informáticos"},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":"Ing. Vera María Noemí"},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":"S_________/_________D:"},{"attributes":{"align":"justify"},"insert":"\n\n"},{"insert":" "},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":"Me dirijo a usted y por su digno intermedio a quien corresponda, con el fin de solicitarle tenga a bien concederme los"},{"attributes":{"italic":true,"bold":true},"insert":" días de Feria invernal "},{"insert":"no usufructuados en el último período, a partir del día 02 de octubre al 15 de octubre del corriente año inclusive."},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":"Sin otro motivo particular, me despido de Ud. atentamente."},{"attributes":{"align":"justify"},"insert":"\n\n"},{"insert":" "},{"attributes":{"align":"justify"},"insert":"\n\n"},{"insert":" "},{"attributes":{"align":"justify"},"insert":"\n\n"},{"insert":" "},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":" …………………………."},{"attributes":{"align":"right"},"insert":"\n"},{"insert":"Cáceres, Silvio Iván"},{"attributes":{"align":"right"},"insert":"\n"},{"insert":"D.N.I. 38.191.398"},{"attributes":{"align":"right"},"insert":"\n"},{"insert":"Auxiliar Mayor Técnico"},{"attributes":{"align":"right"},"insert":"\n"},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":" "},{"attributes":{"align":"justify"},"insert":"\n\n"},{"insert":" "},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":"============= Por recibida la presente nota del agente "},{"attributes":{"bold":true},"insert":"Cáceres, Silvio Iván"},{"insert":" elevo la misma a la Secretaría de Gobierno a los efectos que correspondan.-"},{"attributes":{"align":"justify"},"insert":"\n\n"},{"insert":" "},{"attributes":{"align":"justify"},"insert":"\n"},{"insert":"Formosa, 07 de septiembre de 2017.-"},{"attributes":{"align":"right"},"insert":"\n"},{"insert":"\n"},]; // Formatear el texto según la estructura requerida
            // quill.setContents(initialContent);
            // console.log(quill.getContents())
        }
    }, [quill, ejemploTexto]);
    

      


   const generatePDF = (content) => {

    const doc = new jsPDF();

    

    let yPosition = 10; // Posición vertical de inicio

    jsonData.forEach((item) => {
        if (item.insert) {
            const text = item.insert;

            console.log(item);
            let attributes = {};
            if (item.attributes) {
            attributes = item.attributes;
            }

            const align = attributes.align || 'left';

            let fontStyle = 'normal';
            if (attributes.bold) {
            fontStyle = 'bold';
            }

            // Ajustar tamaño y estilo de fuente según sea necesario
            doc.setFontSize(12); // Tamaño de fuente
            doc.setFont('helvetica', fontStyle); // Fuente y estilo

            // Calcular el ancho del texto para alineación
            const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;

            // Calcular la posición horizontal según la alineación
            let xPosition = 0;
            if (align === 'center') {
            xPosition = (doc.internal.pageSize.getWidth() - textWidth) / 2;
            } else if (align === 'right') {
            xPosition = doc.internal.pageSize.getWidth() - textWidth;
            }

            // Agregar el texto al PDF
            doc.text(text, xPosition, yPosition);

            // Actualizar la posición vertical
            yPosition += doc.internal.getFontSize() + 5; // Espacio entre líneas
        }
    });

    doc.save('example.pdf');


    //funciona
    // doc.html(content, {
        //   callback: function (pdf) {
            //     pdf.save('example.pdf');
            //   },
            // });
    //funciona
  };

  return (
      <>
          <div ref={quillRef} > </div>
          <button onClick={ ()=> generatePDF(quill.getContents()) } >Imprimir</button>
      </>
  )
}
