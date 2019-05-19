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
    marginBottom: 15,  
  },
  margin: {
    marginLeft: 15,  
    marginRight: 15,  
  },
  CardContent: {
    backgroundColor: blue[800],
  },
  CardHeader: {
    backgroundColor: blue[800],
    color: blue[800],
  },  
  actions: {
    display: 'flex',
    backgroundColor: blue[200],    
  },
  avatar: {
    backgroundColor: blue[500],
  },
});

export default styles;