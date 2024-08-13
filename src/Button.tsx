import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const handleClick = () => console.warn('host, checking in');

export default function ButtonUsoage() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Button onClick={handleClick}>host</Button>
      </Grid>
    </Grid>
  )
}
