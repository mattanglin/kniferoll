```
initialState = { loading: false };
const asyncLoad = () => {
  setState({ loading: true });
  setTimeout(() => {
    setState({ loading: false });
  }, 1500);
};

<div>
  <div>
    <Button
      onClick={() => console.log('click!')}
    >
      Click Me
    </Button>
  </div>
  <div style={{ marginTop: '15px' }}>
    <Button
      onClick={() => alert('You should not see this!')}
      disabled
    >
      Disabled
    </Button>
  </div>
  <div style={{ marginTop: '15px' }}>
    <Button
      href="https://www.google.com"
      target="_blank"
    >
      Goto Google
    </Button>
  </div>
  <div style={{ marginTop: '15px' }}>
    <Button
      css={{ minWidth: '140px' }}
      onClick={asyncLoad}
      loading={state.loading}
    >
      Click to Load
    </Button>
  </div>
</div>

```
