import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox } from '@material-ui/core'
import { Fragment } from 'react'

CheckboxInput.propTypes = {
  inputClassName: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
}

CheckboxInput.defaultProps = {
  inputClassName: 'custom-checkbox',
}

export default function CheckboxInput(props) {
  const { onChange, value, checked, disabled, required, label, color } = props
  return (
    <Fragment>
      {
        label && (
          <FormControlLabel
            control={
              <Checkbox
                value={value}
                onChange={onChange}
                checked={checked}
                disabled={disabled}
                required={required}
                color={color || 'primary'}
              />
            }
            label={label}
          />
        )
      }
      {
        !label && (
          <Checkbox
            value={value}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
            required={required}
            color={color || 'primary'}
          />
        )
      }
    </Fragment>
  )
}
