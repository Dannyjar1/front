import logo from './logo.svg';
import './App.css';
import {Button, Input, MenuList, MenuItem, ListItemText, ListItemIcon, InputAdornment} from '@mui/material';
import InicioIcon from '@mui/icons-material/Home';
import TareasIcon from '@mui/icons-material/Book';
import EmailIcon from '@mui/icons-material/Email';
import BusquedaIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <MenuList>
          <MenuItem> 
            <ListItemIcon> <InicioIcon></InicioIcon> </ListItemIcon>
            <ListItemText> Inicio </ListItemText>
          </MenuItem>
          <MenuItem> 
            <ListItemIcon> <TareasIcon></TareasIcon> </ListItemIcon>
            <ListItemText> Tareas </ListItemText>
          </MenuItem>
          <MenuItem> 
            <ListItemIcon> <EmailIcon></EmailIcon> </ListItemIcon>
            <ListItemText> Correo </ListItemText>
          </MenuItem>
        </MenuList>
      </div>
      <div>
        <Input id = "input-wich-icon-adornment"
        startAdornment ={
        <InputAdornment position="start">
          <BusquedaIcon></BusquedaIcon>
        </InputAdornment>
        }
        />

      </div>
      </header>
    </div>
    
  );
}

export default App;
