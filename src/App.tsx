import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import RemoteOneButton from 'remote_one/button';
import RemoteTwoButton from 'remote_two/button';
import HostButton from './Button';

import './App.css';

const App = () => {
  return (
    <div className="content">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Rsbuild Module Federation</h1>
        </Grid>
        <Grid item xs={12}>
          <p>TypeScript, React, MUI, Testing Library</p>
        </Grid>
        <Grid item xs={4}>
          <HostButton />
        </Grid>
        <Grid item xs={4}>
          <RemoteOneButton />
        </Grid>
        <Grid item xs={4}>
          <RemoteTwoButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
