import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import RemoteOneSharedComponent from 'remote_one/SharedComponent';
import RemoteTwoSharedComponent from 'remote_two/SharedComponent';

import './App.css';

const App = () => {
  const cOne = useSelector((s: RemoteOne.State) => s.remote_one.counter.value);
  const cTwo = useSelector((s: RemoteTwo.State) => s.remote_two.counter.value);

  return (
    <div className="content">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Host</h1>
        </Grid>
        <Grid item xs={12}>
          <p>Remote One: {cOne}</p>
          <p>Remote Two: {cTwo}</p>
        </Grid>

        {/* Remote One Domain */}
        <Grid item xs={6}>
          <RemoteOneSharedComponent />
        </Grid>

        {/* Remote Two Domain */}
        <Grid item xs={6}>
          <RemoteTwoSharedComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
