import { useState } from 'react';
import PopUp from "./PopUp";
import "../styles/windowView.css";

const WindowView = ({entry, index}) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-md-2">
      <div key={index}>
        <img
          className="imgSize"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/4A76udAc8XWmLs1T29Kocw5Go3H.jpg"
          alt={entry.title  }
          />
        <p className='paragraph' onClick={handleShow}>{entry.title}</p>
          <PopUp handleClose={handleClose} show={show} entry={entry}/>
      </div>
    </div>

  );
};

export default WindowView;
