import { Divider, Grid } from "@material-ui/core";
import { Container } from "react-bootstrap";
import TablaJugadores from "../components/TablaJugadores";

const TablaJugadoresContainer = () => {
  return (
    <div align="left">
      <Container>
        <Grid container>
          <Grid>
            <TablaJugadores />
          </Grid>
        </Grid>

        <Divider />

        <Divider />
      </Container>
    </div>
  );
};

export default TablaJugadoresContainer;
