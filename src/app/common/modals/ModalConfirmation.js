import { Fragment } from 'react'
import {
  Button,
  DialogActions,
  DialogContentText,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'

export default function ModalConfirmation(props) {
  const { open, onClose, onConfirm, confirmationText, dismissBtn, confirmBtn, title } = this.props
  return (
    <Fragment>
      {open && (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {confirmationText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>{dismissBtn}</Button>
            <Button onClick={onConfirm}>{confirmBtn}</Button>
          </DialogActions>
        </Dialog>
      )}
    </Fragment>
  )
}
