import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Select from "@material-ui/core/Select";
import AdminMenuList from "../../components/navbar/AdminMenuList";
import AdminBase from "../../components/AdminBase/AdminBase";
import uploadImageService from "../../services/upload-image.service";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    marginTop: theme.spacing(4),
  },
  grid: {
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Set title", "Create an ad group", "Create an ad"];
}

const CreateBlog = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();

  const setTitleComponent = () => (
    <>
      <br />
      Give your blog a classy title so that it could rule the trending board!!
      <Grid item xs={12} className={classes.grid}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
        />
      </Grid>
    </>
  );

  const setGenreComponent = () => (
    <>
      <br />
      Choose the genre which your blog falls into !!
      <Grid item xs={12} className={classes.grid}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Genre</InputLabel>
          <Select
            native
            // value={state.age}
            // onChange={handleChange}
            label="genre"
            inputProps={{
              name: "genre",
              id: "outlined-age-native-simple",
            }}
            fullWidth
          >
            <option aria-label="None" value="" />
            <option value={1}>Competitive</option>
            <option value={2}>Mobile development</option>
            <option value={3}>Web development</option>
            <option value={4}>Machine Learning</option>
            <option value={6}>Miscellaneous</option>
          </Select>
        </FormControl>
      </Grid>
    </>
  );

  const uploadThumbnailComponent = () => (
    <>
      <br />
      Choose A thumbnail that will pull users to your masterpiece
      <Grid item xs={12} className={classes.grid}>
        <input type="file" accept="image/*"></input>
      </Grid>
    </>
  );

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <>{setTitleComponent(classes)}</>;
      case 1:
        return <>{setGenreComponent(classes)}</>;
      case 2:
        return <>{uploadThumbnailComponent(classes)}</>;
      default:
        return "Unknown step";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStart = () => {
    //create blog backend call
    //get blog id
  };

  return (
    <AdminBase>
      <Container component="main" maxWidth="md">
        <div className={classes.paper}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>Let's start editing</Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
              <Button onClick={handleStart} className={classes.button}>
                Start
              </Button>
            </Paper>
          )}
        </div>
      </Container>
    </AdminBase>
  );
};

export default CreateBlog;
