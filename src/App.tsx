import './App.css';
import Grid from '@mui/material/Grid';
import RemoteOneButton from 'remote_one/button';
import RemoteTwoButton from 'remote_two/button';
import { useSelector } from 'react-redux';
import HostButton from './Button';
import { RootState } from './store';

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="content">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Rsbuild Module Federation</h1>
        </Grid>
        <Grid item xs={12}>
          <p>TypeScript, React, MUI, Testing Library</p>
        </Grid>
        <Grid item xs={12}>
          Count is {count}
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
