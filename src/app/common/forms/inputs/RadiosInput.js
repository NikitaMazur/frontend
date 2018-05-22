import { autobind } from 'core-decorators'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

const propTypes = {
  inputClassName: PropTypes.string,
  value: PropTypes.string,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  name: PropTypes.string,
}
const defaultProps = {
  inputClassName: 'radio-custom',
  valueKey: 'value',
  labelKey: 'label',
}

export default class RadiosInput extends Component {
  @autobind
  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    const { value, options, disabled, name, row } = this.props
    return (
      <RadioGroup
        value={value}
        onChange={this.handleChange}
        name={name}
        disabled={disabled}
        row={row}
      >
        {
          options.map(({ id, valueKey, labelKey }) => (
            <FormControlLabel
              key={id}
              value={valueKey}
              checked={value === valueKey}
              control={<Radio />}
              label={labelKey}
            />
          ))
        }
      </RadioGroup>
    )
  }
}

RadiosInput.propTypes = propTypes
RadiosInput.defaultProps = defaultProps
