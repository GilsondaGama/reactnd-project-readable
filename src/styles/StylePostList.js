import { blue } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    marginTop: 60,
  },
  appBar: {
    backgroundColor: blue[300],
    borderRadius: 10,
  },
  chipBar: {
    marginLeft: 7,
    marginRight: 7,
  },
  paper: {
    textAlign: 'center',
    backgroundColor: blue[800],
  },
  select: {
    color: blue[900],
    marginLeft: 7,
  },
});

export default styles;
