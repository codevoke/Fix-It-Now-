import { Divider, List, ListItemButton, ListItemText, Drawer } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from "react-use";

export default function LeftMenu (props) {
    const { isOpen, setIsOpen } = props;
    const isAuth = useLocalStorage('auth')
    console.log(typeof(isAuth), isAuth)
    return (
        <Drawer 
            anchor="left"
            open={isOpen}
            onClose={() => {setIsOpen(false);}}
        >
            { isAuth == "true" ?
            <List>
                <MyListHref primary="Главная"    redirect_url="/"           setIsOpen={setIsOpen} />
                <MyListHref primary="Все заявки" redirect_url="/dashboard"  setIsOpen={setIsOpen} />
                <MyListHref primary="Мои заявки" redirect_url="/my-tickets" setIsOpen={setIsOpen} />
                <Divider />
                <MyListHref primary="Настройки"  redirect_url="/settings"   setIsOpen={setIsOpen} />
                <MyListHref primary="Профиль"    redirect_url="/profile"    setIsOpen={setIsOpen} />
            </List>

            :
            
            <List>
                <MyListHref primary="Главная" redirect_url="/"      setIsOpen={setIsOpen} />
                <MyListHref primary="Войти"   redirect_url="/login" setIsOpen={setIsOpen} />
            </List>
            }
        </Drawer>
    );
}

function MyListHref(props) {
    const { primary, redirect_url, setIsOpen } = props;
    const navigate = useNavigate();
    return (
        <ListItemButton>
            <ListItemText 
                primary = { primary } 
                onClick={
                    ()=>{
                        setIsOpen(false); 
                        navigate( redirect_url );
                    }
                } 
                />
        </ListItemButton>
    )
}