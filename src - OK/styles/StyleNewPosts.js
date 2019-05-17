const styles = theme => ({
  root: {
    marginTop: 75,
    flexGrow: 1,
  },
  margin: {
   margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  textValidator: {
    width: 500
  },
  selectValidator: {
    width: 500,
    marginTop: 20
  },
  buttonContainer: {
    margin: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 0,
    marginTop: 50
  },
  button: {
    width: 150,
    margin: 5
  },
});

export default styles;