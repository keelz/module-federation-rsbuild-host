import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function ButtonUsoage() {
  const handleClick = () => {};

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button onClick={handleClick}>host</Button>
      </Grid>
    </Grid>
  );
}
