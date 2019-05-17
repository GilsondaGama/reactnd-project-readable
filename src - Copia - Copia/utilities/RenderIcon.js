import IconHome from '@material-ui/icons/Home';
import IconRedux from '@material-ui/icons/OpenWith';
import IconUdacity from '@material-ui/icons/School';
import IconReact from '@material-ui/icons/ImportantDevices';

export function RenderIcon (icon) {
  console.log(icon)
  switch (icon) {
    case 'React':
      return <IconReact />
    case 'Redux':
      return <IconRedux />
    case 'Udacity':
      return <IconUdacity />
    default:
      return <IconHome />       
  }
}
