import './App.css';
import {useQuill} from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import toolbar from './toolbar';
import { Link } from 'react-router-dom';

function App() {


   const {quill, quillRef} = useQuill({modules:{
      toolbar: toolbar
   }});



  
  return (
    <>
      <h1> Quill </h1>
      <h3> Editor de texto </h3>
      <div   ref={quillRef} ></div>
      <Link to={'/vistaPrevia'} >
        <button> Vista Previa </button>
      </Link>
      
    </>
  )
}

export default App
