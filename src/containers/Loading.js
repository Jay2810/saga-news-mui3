import React from 'react';
import { connect } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';


let Laoading = ({ loading }) => (

  loading ?
    <div style={{ textAlign: 'center' }}>
      
      <CircularProgress disableShrink style={{marginTop:"20%"}}/>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Laoading = connect(
  mapStateToProps,
  null
)(Laoading)


export default Laoading;


