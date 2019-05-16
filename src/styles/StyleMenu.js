import { blueGrey } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

const drawerWidth = 240;
const colorBack = 800;

const styles = theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    backgroundColor: blueGrey[colorBack],   
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    color: blueGrey[700],
    backgroundColor: blueGrey[900],    
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: blueGrey[colorBack],   
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  ListText: {
    color: theme.palette.common.white,
  },
  menuButton: {
    marginRight: 10,
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: blueGrey[colorBack],  
    width: drawerWidth,      
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundColor: blueGrey[600],    
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  menuItem: {
    color: theme.palette.common.white,
    backgroundColor: blueGrey[colorBack], 
    '& $icon': {
      color: theme.palette.common.white,
      backgroundColor: blueGrey[800],
  },
    '&:focus': {
      color: blue[600],     
      backgroundColor: blueGrey[700],
      '& $primary, & $icon': {
        color: blue[600],
        backgroundColor: blueGrey[700],
      },
    },
  },
  primary: {},
  icon: {},
})

export default styles;