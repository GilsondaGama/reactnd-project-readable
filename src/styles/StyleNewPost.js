import { blueGrey } from '@material-ui/core/colors';

const styles = theme => ({

  margin: {
    margin: theme.spacing.unit,
    backgroundColor: blueGrey[0]
  },
  heading: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: theme.palette.common.white,    
  },
  node: {
    color: theme.palette.common.white,
  },
  selectValidator: {
    width: 200,
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
  chipBar: {
    marginLeft: 7,
    marginRight: 7,
  },  
});

export default styles;