import { PureComponent } from 'react'
import { TextField } from 'common/forms'
import { Button } from '@material-ui/core'
import SelectInput from 'common/forms/inputs/SelectInput'

const array = [
  'Lala1',
  'Lala2',
  'Lala3',
  'Lala4',
  'Lala5',
]

export default class LoginForm extends PureComponent {
  render() {
    return (
      <div>
        <form>
          <h2>Login</h2>
          <TextField name="email" label="Email" type="email" />
          <TextField name="password" label="Password" type="password" />
          <Button variant="raised" color="primary">Login</Button>
        </form>
        <SelectInput multiple options={array} label="Label" />
      </div>
    )
  }
}
