```
const initialState = { dialogOpen: false };
const showDialog = () => setState({ dialogOpen: true });
const closeDialog = () => setState({ dialogOpen: false });

<div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-4">
      <button
        onClick={showDialog}
      >
        Show Dialog
      </button>
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
      <button
        onClick={showDialog}
      >
        Full Dialog
      </button>
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
          <button
            onClick={closeDialog}
          >
            Cancel
          </button>
          <button
          onClick={setStep(2)}
          >
            Next
          </button>
        </div>
      </div>
    ) : (
      <div>
        <p style={{ maxWidth: '60%', margin: '30px auto' }}>This is the second page of a custom rendered componetn Dialog.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={setStep(1)}
          >
            Previous
          </button>
          <button
          onClick={closeDialog}
          >
            Finish
          </button>
        </div>
      </div>
    )}
  </div>
);

<div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-4">
      <button
        onClick={showDialog}
      >
        Custom Dialog
      </button>
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
