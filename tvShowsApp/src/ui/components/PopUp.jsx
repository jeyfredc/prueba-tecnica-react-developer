import Modal from 'react-bootstrap/Modal';
const PopUp = ({handleClose, show, entry}) => {

  return (
    <div>
          <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center mx-auto">{entry.title} - {entry.releaseYear}</Modal.Title>
        </Modal.Header >
          <img
          className="imgSize text-center mx-auto"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/4A76udAc8XWmLs1T29Kocw5Go3H.jpg"
          alt={entry.title  }
          />
        <Modal.Body>{entry.description}</Modal.Body>
      </Modal>
    </>
    </div>
  )
}

export default PopUp
