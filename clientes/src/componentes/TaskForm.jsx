import "../estaticos/css/TaskForm.css";
import { Picture } from "../componentes/Picture";
import Asiatica from '../estaticos/images/fondo3.jpg'
export const TaskForm = () => {
  return (
    <div className="pantalla">
      <div className="izquierda">
        <h1>Formulario</h1>
        <form>
          <div className="form-grupo">
            <label>Title</label>
            <input></input>
          </div>
          <div className="form-grupo">
            <label>Title</label>
            <textarea
              rows='5'
            ></textarea>
          </div>
          <div className="form-grupo form-boton">
            <button>Click Here</button>
          </div>
        </form>
      </div>
      <div className="derecha">
        <div>
          <Picture imagen={Asiatica} texto='Excepteur sit minim exercitation fugiat dolore sit consectetur enim magna. Sunt in deserunt et. Qui nostrud eiusmod amet officia.'></Picture>
        </div>
      </div>
    </div>
  );
};
