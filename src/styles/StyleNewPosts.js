import { blueGrey } from '@material-ui/core/colors';

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
    backgroundColor: blueGrey[600],   
  },
  heading: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  textValidator: {
    width: 400
  },
  selectValidator: {
    width: 400,
    marginTop: 20
  },
  buttonContainer: {
    margin: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 0,
    marginTop: 10
  },
  button: {
    width: 100,
    margin: 5
  },
});

export default styles;