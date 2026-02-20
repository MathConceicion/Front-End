import "./Button.css";

const Button = ({ onSubmit, onReset, termsAccepted = false }) => {
      return (
            <div className="button-container">
                  <button type="submit" className="btn btn-submit" onClick={onSubmit} disabled={!termsAccepted}>Enviar</button>
                  <button type="reset" className="btn btn-reset" onClick={onReset}>Limpar</button>
            </div>
      );
};

export default Button;