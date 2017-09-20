The grid system should look familiar to you. It uses the Container > Row > columns
structure as many grid systems do. It is based on the popular [flexbox grid](http://flexboxgrid.com/).
It is currently only supporting responsiveness of the grid layout, but without push/pull, alignment, or distribution.

Out of the box, it resembles your standard, responsive 12 column grid system.

```
const colStyle = {
  height: '100px',
  backgroundColor: 'DeepPink',
  flexDirection: 'column',
  marginBottom: '30px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center'
};
<Grid>
  <Row>
    <Col xs={6} sm={3}>
      <div style={colStyle}>
        {'<Col xs={6} sm={3} />'}
      </div>
    </Col>
    <Col xs={6} sm={3}>
      <div style={colStyle}>
        {'<Col xs={6} sm={3} />'}
      </div>
    </Col>
    <Col xs={12} sm={6}>
      <div style={colStyle}>
        {'<Col xs={12} sm={6} />'}
      </div>
    </Col>
  </Row>
  <Row>
    <Col xs={12} sm={5}>
      <div style={colStyle}>
        {'<Col xs={12} sm={5} />'}
      </div>
    </Col>
    <Col xs={6} sm={4}>
      <div style={colStyle}>
        {'<Col xs={6} sm={4} />'}
      </div>
    </Col>
    <Col xs={6} sm={3}>
      <div style={colStyle}>
        {'<Col xs={6} sm={3} />'}
      </div>
    </Col>
  </Row>
</Grid>
```


The biggest benefit of turning the grid elements into react components is run time
configuration of the grid and for your layout.

```
const colStyle = {
  height: '50px',
  backgroundColor: 'DeepSkyBlue',
  flexDirection: 'column',
  marginBottom: '6px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center'
};

<div>
  <h3>5 Column Grid</h3>
  <Grid
    columns={5}
    gutter={3}
    padding={0}
  >
    <Row>
      <Col xs={3} sm={2}>
        <div style={colStyle} />
      </Col>
      <Col xs={2} sm={1}>
        <div style={colStyle} />
      </Col>
      <Col xs={5} sm={2}>
        <div style={colStyle} />
      </Col>
    </Row>
  </Grid>

  <h3>17 Column Grid</h3>
  <Grid
    columns={17}
    gutter={1}
    padding={3}
  >
    <Row>
      {Array.from(Array(17).keys()).map(i => (
        <Col xs={5} sm={3} md={1} key={`17-col-${i}`}>
          <div style={colStyle} />
        </Col>
      ))}
    </Row>
  </Grid>
</div>
```
