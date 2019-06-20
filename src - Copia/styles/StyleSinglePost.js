import { blue } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  badge: {
    top: '50%',
    padding: 15,
  },
  card: {
    marginTop: 15,  
    backgroundColor: blue[200],    
  },
  margin: {
    marginLeft:30,     
    marginRight:30,     
  },
  CardHeader: {
    backgroundColor: blue[800],
    color: blue[800],
  },  
  actions: {
    display: 'flex',
    backgroundColor: blue[400],    
  },
  avatar: {
    backgroundColor: blue[800],
  },
});

export default styles;