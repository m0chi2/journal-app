import Image from 'next/image'
import { useState } from "react"
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import HomeTabContent from './HomeTabContent'

type TabPanelProps = {
  children?: React.ReactElement;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && ( <>
        {children}
        </>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const menuList = [ "home", "about", "feature", "contact" ]


export default function HomeTabs() {
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (<>
    <Box 
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 420
      }}
    >
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav home"
        TabIndicatorProps={{ style: {display: "none"}}}
      >
        {menuList && menuList.map((menu, index) => (
          <Tab 
            key={index}
            label={menu}
            sx={{
              width: 80,
              minWidth: "inherit",
              fontSize: "16px",
              fontWeight: 700,
              color: "text.primary"
            }} 
            {...a11yProps(index)} 
          />
          ))
        }
      </Tabs>
    </Box>
    
    <TabPanel value={value} index={0}>
      <HomeTabContent />
    </TabPanel>
    <TabPanel value={value} index={1}>
      <p>about: 準備中</p>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <p>feature: 準備中</p>
    </TabPanel>
    <TabPanel value={value} index={3}>
      <p>contact: 準備中</p>
    </TabPanel>
  </>
  )
}