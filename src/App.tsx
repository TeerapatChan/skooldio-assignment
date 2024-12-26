import { Suspense } from "react";
import CardContainer from "./components/card/CardContainer";
import { CircularProgress, Container } from "@mui/material";

export function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Suspense fallback={<CircularProgress color="primary" />}>
        <CardContainer />
      </Suspense>
    </Container>
  );
}

export default App;
