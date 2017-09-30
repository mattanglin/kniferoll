```
const initialState = { checked: false };
const onChange = () => setState({ checked: !state.checked });

<div>
  <h3>Simple Toggle</h3>
  <Toggle
    label="I would like to receive email notifications from Kniferoll."
  />
  <br />
  <h3>Controlled Input</h3>
  <Toggle
    label="I understand what a controlled input is and why it's helpful."
    onChange={onChange}
    value={state.checked}
  />
  <br />
  <h3>Default Value</h3>
  <Toggle
    label="Defaults On"
    defaultValue
  />
</div>
```
