import { Container, Grid } from "@mui/material";
import ButtonAppBar from "./components/ButtonAppBar";
import OutlinedCard from "./components/Card";
import RealtimeOutlinedCard from "./components/RealtimeCard";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Container sx={{m: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <OutlinedCard title="Minimum Temperature">xs=8</OutlinedCard>
          </Grid>
          <Grid item xs={4}>
            <RealtimeOutlinedCard title="Latest Temperature">xs=4</RealtimeOutlinedCard>
          </Grid>
          <Grid item xs={4}>
            <OutlinedCard title="Maximum Temperature">xs=4</OutlinedCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
