import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { increment } from './features/counter/counterSlice';

export default function ButtonUsoage() {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(increment());

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button onClick={handleClick}>host</Button>
      </Grid>
    </Grid>
  );
}
