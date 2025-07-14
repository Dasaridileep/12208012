import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Statistics() {
  const navigate = useNavigate();
  const allKeys = Object.keys(localStorage);
  const shortLinks = allKeys
    .map((key) => {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch {
        return null;
      }
    })
    .filter((item) => item && item.url && item.shortCode);

  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="space-between" mt={5} mb={2}>
        <Typography variant="h4">📊 Analytics</Typography>
        <Button variant="outlined" onClick={() => navigate("/")}>
          ⬅️ Back to Home
        </Button>
      </Box>

      {shortLinks.length === 0 ? (
        <Typography>No data found.</Typography>
      ) : (
        shortLinks.map((item) => (
          <Paper key={item.shortCode} sx={{ p: 2, mb: 2 }} elevation={2}>
            <Typography>
              Short URL:{" "}
              <a href={`/${item.shortCode}`} target="_blank" rel="noreferrer">
                http://localhost:3000/{item.shortCode}
              </a>
            </Typography>
            <Typography>Original URL: {item.url}</Typography>
            <Typography>
              Created At: {new Date(item.createdAt).toLocaleString()}
            </Typography>
            <Typography>
              Expires At: {new Date(item.expiry).toLocaleString()}
            </Typography>
            <Typography>Total Clicks: {item.clicks.length}</Typography>
            <Divider sx={{ my: 1 }} />
            {item.clicks.map((click, index) => (
              <Box key={index} sx={{ pl: 2 }}>
                <Typography variant="body2">
                  {index + 1}. {click.time} | Source: {click.source} | Location: {click.geo}
                </Typography>
              </Box>
            ))}
          </Paper>
        ))
      )}
    </Container>
  );
}

export default Statistics;
