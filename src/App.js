import { Grid } from '@material-ui/core'
import React from 'react'
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from "./Styles"

const App = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.grid} container spacing={1} alignItems="center" justify="center" style={{height:"100vh"}}>
            <Grid item xs={12} sm={3}>
                <Details title="Income"/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Main/>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Details title="Expense"/>
            </Grid>

        </Grid>
    )
}

export default App
