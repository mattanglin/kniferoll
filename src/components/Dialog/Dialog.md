```
const initialState = { dialogOpen: false };
const showDialog = () => setState({ dialogOpen: true });
const closeDialog = () => setState({ dialogOpen: false });

<div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-4">
      <Button
        onClick={showDialog}
      >
        Show Dialog
      </Button>
      <Dialog
        content="This is a super, simple Dialog box!"
        onConfirm={closeDialog}
        onOverlayClick={closeDialog}
        open={state.dialogOpen}
        onEscKeyDown={closeDialog}
      />
    </div>
  </div>
</div>
```

You can give a a Dialog a title, content, confirm action and cancel action out of the box.

```
const initialState = { dialogOpen: false };
const showDialog = () => setState({ dialogOpen: true });
const closeDialog = () => setState({ dialogOpen: false });

<div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-4">
      <Button
        onClick={showDialog}
      >
        Full Dialog
      </Button>
      <Dialog
        content="This is a super simple Dialog box!"
        cancelText="Not into it..."
        confirmText="Custom Confirm"
        onCancel={closeDialog}
        onConfirm={closeDialog}
        onOverlayClick={closeDialog}
        open={state.dialogOpen}
        title="Full Dialog"
      />
    </div>
  </div>
</div>
```
Or fully customize the the content rendered in a for more complicated (even multi-step) Dialogs.

```
const initialState = { dialogOpen: false, step: 1 };
const showDialog = () => setState({ dialogOpen: true, step: 1 });
const closeDialog = () => setState({ dialogOpen: false });
const setStep = (step) => () => setState({ step: step });

const DialogContent = () => (
  <div style={{ textAlign: 'center' }}>
    <h2>Custom Dialog!</h2>
    {state.step === 1 ? (
      <div>
        <p style={{ maxWidth: '60%', margin: '30px auto' }}>You can add your own components as children to a dialog to show whatever you want inside including multi-page Dialogs!</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            onClick={closeDialog}
          >
            Cancel
          </Button>
          <Button
          onClick={setStep(2)}
          >
            Next
          </Button>
        </div>
      </div>
    ) : (
      <div>
        <p style={{ maxWidth: '60%', margin: '30px auto' }}>This is the second page of a custom rendered componetn Dialog.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            onClick={setStep(1)}
          >
            Previous
          </Button>
          <Button
          onClick={closeDialog}
          >
            Finish
          </Button>
        </div>
      </div>
    )}
  </div>
);

<div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-4">
      <Button
        onClick={showDialog}
      >
        Custom Dialog
      </Button>
      <Dialog
        onOverlayClick={() => console.log('You must use actions to close this Dialog!')}
        open={state.dialogOpen}
      >
        <DialogContent />
      </Dialog>
    </div>
  </div>
</div>
```
