import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import RemoteOneButton from 'remote_one/button';
import { RemoteOneState } from 'remote_one/state';
import RemoteTwoButton from 'remote_two/button';
import { RemoteTwoState } from 'remote_two/state';

import './App.css';

const App = () => {
  const cOne = useSelector((s: RemoteOneState) => s.remote_one.counter.value);
  const cTwo = useSelector((s: RemoteTwoState) => s.remote_two.counter.value);
  return (
    <div className="content">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Rsbuild Module Federation</h1>
        </Grid>
        <Grid item xs={12}>
          <p>TypeScript, React, MUI, Redux Toolkit, Testing Library</p>
          <p>Remote One Counter: {cOne}</p>
          <p>Remote Two Counter: {cTwo}</p>
        </Grid>
        <Grid item xs={6}>
          <h2>Remote One</h2>
          <RemoteOneButton />
        </Grid>
        <Grid item xs={6}>
          <h2>Remote Two</h2>
          <RemoteTwoButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
