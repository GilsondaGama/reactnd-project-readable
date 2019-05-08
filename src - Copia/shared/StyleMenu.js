import { blueGrey } from '@material-ui/core/colors';

const drawerWidth = 240;
const colorBack = 800;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  palette: {
    primary: blueGrey[50],
    secondary: blueGrey[600],
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
    backgroundColor: blueGrey[colorBack],    
    color: blueGrey[50],
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: blueGrey[900],  
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,      
    backgroundColor: blueGrey[colorBack],  
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
    backgroundColor: blueGrey[colorBack],  
    '&:focus': {
      backgroundColor: blueGrey[600],
      '& $primary, & $icon': {
        color: theme.palette.common.primary,
      },
    },
  },
  primary: {},
  icon: {},
})

export default styles;