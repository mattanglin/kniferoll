```
const initialState = { checked: false };
const onChange = () => setState({ checked: !state.checked });

<div>
  <h3>Simple Checkbox</h3>
  <Checkbox
    label="I would like to receive email notifications from Kniferoll."
  />
  <br />
  <h3>Controlled Input</h3>
  <Checkbox
    label="I understand what a controlled input is and why it's helpful."
    onChange={onChange}
    value={state.checked}
  />
  <br />
  <h3>Custom Check Icons</h3>
  <Checkbox
    label="I want to ride my bicycle. I want to ride it where I like."
    checkedComponent={<i className="fa fa-bicycle fa-2x" style={{ width: '36px', color: 'green' }} />}
    uncheckedComponent={<i className="fa fa-car fa-2x" style={{ width: '36px', color: 'red' }} />}
    defaultValue
  />
</div>
```
