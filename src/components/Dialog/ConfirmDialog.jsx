import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './ConfirmDialog.css';

export default function ConfirmDialog(props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.closed}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
        <Fade in={props.open}>
          <div className="modalConfirm">
            <h2 id="transition-modal-title">{props.title}</h2>
            {props.subTitle && (
              <p id="transition-modal-description">
                {props.subTitle}
              </p>
            )}

            <div className="modalContent">
              {props.children}
            </div>
          </div>
        </Fade>
    </Modal>
  );
}