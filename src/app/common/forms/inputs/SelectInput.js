import { Component } from 'react'
import { autobind } from 'core-decorators'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Input,
} from '@material-ui/core'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export default class SelectInput extends Component {
  state = {
    name: [],
  }

  @autobind
  handleChange(e) {
    const { value } = this.props
    this.props.onChange(e[value])
  }

  render() {
    const {
      id,
      multiple,
      label,
      options = [],
      value = [],
    } = this.props
    options.map(name => console.log(name))
    return (
      <FormControl>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select
          multiple={multiple}
          value={value}
          onChange={this.handleChange}
          input={<Input id={id} />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {options.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }
}
