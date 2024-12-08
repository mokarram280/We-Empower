import React, { useState } from 'react'
import {AppBar, Button, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme} from '@mui/material'
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
    const [value,setValue] = useState(0);
    const [drawerOpen,setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const Pages = ['Home','About us','Upskill','Cotact us'];
    const PAGE = ['Home','About us','Upskill','Cotact us','Register Interest'];
  return (
    <>
        <AppBar position='static' elevation={0} sx={{backgroundColor:'white',maxWidth:'1280px',mx:'auto'}}>
            <Toolbar sx={{color:'black'}}>
                <Typography>
                    <img className='w-32' src="/c4u full logo_2022 1.svg" alt="" />
                </Typography>
                {
                    isMatch ? (
                        <>
                          <Drawer open={drawerOpen} onClose={()=> setDrawerOpen(false)}>
                            <List>
                                {
                                    PAGE.map((page,index)=>(
                                        <ListItemButton key={index} onClick={()=> setDrawerOpen(false)}>
                                            <ListItemIcon>
                                                <ListItemText className='capitalize'>{page}</ListItemText>
                                            </ListItemIcon>
                                        </ListItemButton>
                                    ))
                                }
                            </List>
                          </Drawer>
                          <IconButton sx={{color:'black',marginLeft:'auto'}} onClick={()=> setDrawerOpen(!drawerOpen)}>
                              <IoMenuSharp />
                          </IconButton>
                        </>
                    ):(
                        <>
                          <Tabs sx={{marginLeft:'auto'}} 
                          textColor='inherit'
                          indicatorColor='inherit'
                          value={value}
                          onChange={(e,value)=> setValue(value)}
                          >
                            {
                                Pages.map((page,index)=>(
                                    <Tab sx={{textTransform:'capitalize'}} key={index} label={page}></Tab>
                                ))
                            }
                          </Tabs>
                          <Button sx={{marginLeft:'auto',color:'white',backgroundColor:'#F44335',textTransform:'capitalize'}}>
                            Register Interest
                          </Button>
                        </>
                    )
                }
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar;