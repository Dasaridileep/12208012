import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Grid,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { isValidURL, isAlphanumeric } from "../utils/validators";
import log from "../middleware/logger";

function Home() {
  const [inputs, setInputs] = useState([{ url: "", minutes: "", shortcode: "" }]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const updated = [...inputs];
    updated[index][field] = value;
    setInputs(updated);
  };

  const addInput = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { url: "", minutes: "", shortcode: "" }]);
    }
  };

  const handleShorten = () => {
    const newResults = [];
    for (let i = 0; i < inputs.length; i++) {
      const { url, minutes, shortcode } = inputs[i];

      if (!isValidURL(url)) {
        alert(`Invalid URL at row ${i + 1}`);
        return;
      }

      if (minutes && isNaN(minutes)) {
        alert(`Validity must be an integer at row ${i + 1}`);
        return;
      }

      if (shortcode && !isAlphanumeric(shortcode)) {
        alert(`Shortcode must be 4–10 alphanumeric characters at row ${i + 1}`);
        return;
      }

      const code = shortcode || uuidv4().slice(0, 6);

      if (localStorage.getItem(code)) {
        alert(`Shortcode "${code}" already exists`);
        return;
      }

      const createdAt = new Date();
      const expiry = new Date(createdAt.getTime() + (minutes ? parseInt(minutes) : 30) * 60000);

      const data = {
        url,
        shortCode: code,
        createdAt: createdAt.toISOString(),
        expiry: expiry.toISOString(),
        clicks: [],
      };

      localStorage.setItem(code, JSON.stringify(data));
      newResults.push({ ...data });

      log("Shortened URL created", data);
    }

    setResults(newResults);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" mt={5} mb={3}>
        🔗 URL Shortener
      </Typography>

      {inputs.map((input, index) => (
        <Paper key={index} elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            URL {index + 1}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Original Long URL"
                value={input.url}
                onChange={(e) => handleChange(index, "url", e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                label="Validity (minutes)"
                value={input.minutes}
                onChange={(e) => handleChange(index, "minutes", e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                label="Preferred Shortcode"
                value={input.shortcode}
                onChange={(e) => handleChange(index, "shortcode", e.target.value)}
              />
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Box display="flex" justifyContent="center" gap={2} mb={4}>
        <Button variant="contained" onClick={handleShorten}>
          Shorten URLs
        </Button>
        <Button variant="outlined" onClick={addInput} disabled={inputs.length >= 5}>
          + Add Another
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigate("/stats")}>
          📊 View Analytics
        </Button>
      </Box>

      {results.length > 0 && (
        <Box>
          <Divider />
          <Typography variant="h6" mt={4} mb={2}>
            Shortened Results
          </Typography>
          {results.map((res) => (
            <Paper key={res.shortCode} elevation={2} sx={{ p: 2, mb: 2 }}>
              <Typography>
                Original: <a href={res.url}>{res.url}</a>
              </Typography>
              <Typography>
                Short:{" "}
                <a
                  href={`/${res.shortCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://localhost:3000/{res.shortCode}
                </a>
              </Typography>
              <Typography>
                Expires: {new Date(res.expiry).toLocaleString()}
              </Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default Home;
