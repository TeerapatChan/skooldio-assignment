import { useQueryAdmission } from "../../common/api/hooks/useAdmission";
import AdmissionCard from "./Card";
import { AdmissionCardProps } from "./types";
import Grid from "@mui/material/Grid2";

export default function CardContainer() {
  const { data } = useQueryAdmission();
  console.log(data);
  return (
    <Grid container spacing={8} justifyContent="center">
      {data.map((item: AdmissionCardProps) => (
        <AdmissionCard {...item} key={item.id} />
      ))}
    </Grid>
  );
}
