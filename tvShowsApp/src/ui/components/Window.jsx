import "../styles/window.css";

const Window = ({title, paragraph}) => {
  return (
    <div className="containerBox">
      <div>
        <div className="bg-dark sizeBox">
          <h3>{title}</h3>
        </div>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Window;
