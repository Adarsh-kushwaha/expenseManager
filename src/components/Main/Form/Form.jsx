import React, { useState, useContext } from "react";
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./Styles";
import { v4 as uuidv4 } from "uuid";
import { ExpenseTrackerContext } from "../../../Context/Context";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/Categories";

import DateFormat from "../../../utils/DateFormat";

const Form = () => {
  const initialData = {
    amount: "",
    category: "",
    type: "",
    date: DateFormat(new Date()),
  };
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState(false)

  const { addTransaction } = useContext(ExpenseTrackerContext);

  const classes = useStyles();

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  const createTransationHandler = (e) => {
    e.preventDefault();
    if(formData.amount.length===0){
        setError(true)
        return;
    }
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setError(false);
    setFormData(initialData);
  };

  const errorText = <p className={classes.error}>feild cannot be empty</p>
  return (
    
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {/* .... */}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth required="true">
          <InputLabel >Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })} 
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth required="true">
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((cat) => (
              <MenuItem key={cat.type} value={cat.type}>
                {cat.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Amount"
          required="true"
          type="number"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
        {error && errorText}
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          required="true"
          fullWidth
          style={{ marginTop: "16px" }}
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
        />
      </Grid>

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        fullwidth
        onClick={createTransationHandler}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
