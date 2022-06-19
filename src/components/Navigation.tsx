import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SendIcon from '@mui/icons-material/Send'
import StarIcon from '@mui/icons-material/Star'
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List';;
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { useState } from 'react';

const drawerWidth = 240;

// あとでemotionに直す
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Navigation() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const menuList: { name: string, url: string, icon: React.ReactElement }[] = [
    { name: 'Dashboard', url: "/dashboard/", icon: <DashboardIcon /> }, 
    { name: 'Mylist', url: "/mylist/", icon: <StarIcon /> },
    { name: 'Journals', url: "/journals/", icon: <ManageSearchIcon /> },
    { name: 'Drafts', url: "/dashboard/", icon: <SendIcon />}
  ]
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return ( <>
  <Drawer variant="permanent" open={open}>
    <DrawerHeader>
      <IconButton
        onClick={handleDrawerToggle}
        aria-label="メインメニュー エリア拡大"
        sx={{ 
          color: "primary.contrastText"
        }}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider sx={{ backgroundColor: "primary.contrastText" }} />
    <List>
      {menuList.map((item, index) => (
        <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            href={item.url}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
            { item.icon }
            </ListItemIcon>
            <ListItemText primary={item.name} sx={{ color: "primary.contrastText", opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider sx={{ backgroundColor: "primary.contrastText" }} />
    <List>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
           <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign out" sx={{ color: "primary.contrastText", opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
  </>
  )
}