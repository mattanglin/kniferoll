A basic form textarea input.

```
initialState = { error: null };

const errorOnMaxLength = (event) => setState({
  error: (
    event.target.value.length > 30 ?
    'This textarea can only be 30 characters to show you an error!' :
     null
   )
  });

<div className="row">
  <div className="col-xs-12 col-sm-8">
    <Textarea
      error={state.error}
      label="Comment Section"
      name="comment_section"
      onChange={errorOnMaxLength}
      placeholder="Please enter your comments here..."
      rows={8}
    />
  </div>
</div>
```
