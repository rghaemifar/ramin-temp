import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { request } from "../utils/request";
import { saveToken } from "../utils/auth";
import { loginUrl } from "../utils/urls";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const sendLoginRequest = async (data) => {
    // const res = await request({
    //   url: loginUrl,
    //   body: JSON.stringify(data),
    //   method: "POST",
    // });
    // if (!res.token) return;
    // saveToken(res.token);
    if (
      (data.email === "radmin.trex@gmail.com", data.password === "adminadmin")
    ) {
      saveToken("8asdf30ire7jfhi438ufncu923y89rhfoy7gf8hwe032");
      navigate("/");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sendLoginRequest({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 18,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ورود
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="نام کاربری"
            name="email"
            id="email"
            autoComplete="current-email"
          />{" "}
          <TextField
            margin="normal"
            required
            fullWidth
            label="رمز"
            name="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ورود
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
