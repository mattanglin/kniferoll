A basic form input.

```
<div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-4">
      <p>Basic Input Example</p>
      <Input
        name="input1"
        placeholder="Enter Text"
      />
    </div>
  </div>
  <div className="row">
    <div className="col-xs-4">
      <p>With Label</p>
      <Input
        label="First Name"
        name="input1"
        placeholder="John Smith"
      />
    </div>
  </div>
  <div className="row">
    <div className="col-xs-4">
      <p>With Label & Error</p>
      <Input
        label="Favorite Vegetable"
        name="input1"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Enter your bff veggie!"
        value="Tomato"
        error="Tomato is a fruit, dummy..."
      />
    </div>
  </div>
</div>
```
