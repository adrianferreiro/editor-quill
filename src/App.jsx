import './App.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import toolbar from './toolbar';
import { useEffect } from 'react'; // Importa useEffect
import { Link } from 'react-router-dom';

function App() {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: toolbar,
      
    },
  });

  useEffect(() => {
    if (quill) {

      // Cargar contenido guardado desde el Local Storage al editor
      const savedContent = localStorage.getItem('editorContent');
      if (savedContent) {
        quill.root.innerHTML = savedContent;
      }

      quill.on('text-change', () => {
        const editorContent = quill.root.innerHTML;
        // console.log('Contenido del editor:', editorContent);

        // Guardar el contenido en el Local Storage
        localStorage.setItem('editorContent', editorContent);
      });

      // quill.getModule('toolbar').addHandler('print', () => {
      //   const editorContent = quill.root.innerHTML;
      //   console.log('Contenido del editor para impresión:', editorContent);
      //   window.print(); // Inicia la impresión del navegador
      // });
    }
  }, [quill]);

  return (
    <>
      <h1>Quill</h1>
      <h3>Editor de texto</h3>
      <div ref={quillRef}></div>
      <Link to={'/vistaPrevia'}>
        <button> Vista Previa </button>
      </Link>
    </>
  );
}

export default App
