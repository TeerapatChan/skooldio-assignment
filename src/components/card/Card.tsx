import { AdmissionCardProps } from "./types";
import { Typography, Box, Divider, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Edit from "../../assets/edit.svg";
import Medal from "../../assets/medal.svg";
import Grid from "@mui/material/Grid2";
import { PlayArrow, Person, IosShare } from "@mui/icons-material";
import { formatNumber } from "../../common/utils";
export default function AdmissionCard(props: AdmissionCardProps) {
  const { faculty, logo, name, roundSeats, score, likes } = props;

  return (
    <Grid
      sx={{
        maxWidth: 440,
        boxShadow: 3,
        position: "relative",
        borderRadius: 1,
        px: 5,
        py: 6,
      }}
      size={{
        xs: 12,
        sm: 6,
      }}
      boxShadow={3}
    >
      <FavoriteIcon
        color="primary"
        sx={{ position: "absolute", top: 24, right: 20 }}
        aria-label="add to favorites"
      />
      <IosShare
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
          color: "text.disabled",
        }}
        aria-label="share"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box display="flex" gap={2} flexDirection="row">
          <Box
            component="img"
            src={logo}
            alt={`${name} logo`}
            sx={{
              width: 80,
              height: 80,
            }}
          />
          <Box display="flex" flexDirection="column" gap={6}>
            <Box
              display="flex"
              flexDirection="column"
              maxWidth={{
                xs: "240px",
                md: "296px",
              }}
            >
              <Typography variant="h3" color="primary" fontWeight={600}>
                {name}
              </Typography>
              <Typography variant="h4" color="text.disabled" fontWeight={500}>
                {faculty.name}
              </Typography>
            </Box>
            <Typography variant="h4" color="text.disabled" fontWeight={300}>
              {faculty.university.name}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" flexDirection="row" gap={4} alignItems="center">
          <Typography variant="h4" color="#text.secondary" fontWeight={300}>
            รอบที่เปิด
          </Typography>
          <Box display="flex" gap={1}>
            {roundSeats.map((number, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  borderRadius: "50%",
                  backgroundColor: number > 0 ? "success.main" : "grey.400", // Matches Chip colors
                  width: 32,
                  height: 32,
                  fontWeight: 500,
                  fontSize: 16,
                  fontFamily: "Prompt",
                }}
              >
                {index + 1}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography variant="body1" color="primary" fontWeight={600}>
            {score?.scoreType
              ? "รอบที่ 4: " +
                score.scoreType.charAt(0).toUpperCase() +
                score.scoreType.slice(1).toLowerCase()
              : "N/A"}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              borderColor: "primary.main",
              borderRadius: 4,
              px: {
                xs: 1.25,
                md: 5,
              },
              py: {
                xs: 0.5,
                sm: 2,
              },
              minWidth: 120,
            }}
          >
            <Typography variant="body2" color="primary">
              แก้ไขคะแนน
            </Typography>
            <Box
              component="img"
              src={Edit}
              alt="edit icon"
              sx={{ width: 16 }}
            />
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Box width="33.33%" justifyContent="center" display="flex">
            <Box
              component="img"
              src={Medal}
              alt="medal icon"
              sx={{ width: 28 }}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="end"
            width="33.33%"
          >
            <Typography variant="body2" color="text.primary">
              คะแนนของคุณ
            </Typography>
            <Typography variant="h1" color="text.primary">
              {formatNumber(22222)}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-around" mt={2}>
          {[score?.min, score?.avg, score?.max].map((value, index) => (
            <>
              <Box key={index} textAlign="center">
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight={300}
                >
                  {value ? formatNumber(value) : "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {
                    ["คะแนนต่ำสุด 60", "คะแนนเฉลี่ย 60", "คะแนนสูงสุด 60"][
                      index
                    ]
                  }
                </Typography>
              </Box>
              {index < 2 && (
                <Divider
                  orientation="vertical"
                  sx={{
                    bgcolor: "white",
                    height: 40,
                    mx: {
                      xs: -1,
                      sm: -2,
                    },
                  }}
                />
              )}
            </>
          ))}
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" alignItems="center" gap={4}>
          <PlayArrow sx={{ color: "success.700" }} />
          <Typography variant="body1" color="success.700" fontWeight={300}>
            ดูสัดส่วนคะแนน
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" alignItems="center" gap={2}>
          <Person sx={{ color: "text.disabled" }} />
          <Typography variant="body1" color="text.disabled" fontWeight={300}>
            {likes} คนที่สนใจ
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
