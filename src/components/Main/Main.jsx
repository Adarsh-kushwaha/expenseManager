import React from "react";
import useStyles from "./Styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid,
  
} from "@material-ui/core";
import Form from "./Form/Form";
import Lists from "./List/Lists";

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.main}>
      <CardHeader title="Expense Tracker" subheader="Made By Adarsh Kushwaha"></CardHeader>
      <CardContent>
        <Typography variant="h6" align="center">
          Total Balance $100
        </Typography>
        <Typography
          variant="body"
          style={{ lineHeight: "1.5rem", marginTop: "20px" }}
        >
          
        </Typography>
        <Divider />
        <Form/>
      </CardContent>
      <Grid container spacing={2}>
        <Grid item sm={12}>
            <Lists/>
        </Grid>
      </Grid>
      <CardContent></CardContent>
    </Card>
  );
};

export default Main;
