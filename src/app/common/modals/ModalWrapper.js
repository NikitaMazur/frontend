import { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'

const propTypes = {
  modalClassName: PropTypes.string,
  title: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  ModalComponent: PropTypes.element,
}

export default function ModalWrapper(props) {
  const {
    title,
    open,
    onClose,
    component: ModalComponent,
  } = props

  return (
    <Fragment>
      {open && (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogContent>
            <ModalComponent {...props} />
          </DialogContent>
        </Dialog>
      )}
    </Fragment>
  )
}

ModalWrapper.propTypes = propTypes
