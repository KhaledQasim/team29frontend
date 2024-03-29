import React from 'react';


import { Routes, Route } from 'react-router-dom';

import "./admin/index.css"


import { ColorModeContext, useMode } from './admin/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './admin/scenes/global/Topbar.jsx';
import Dashboard from './admin/scenes/dashboard';
import Users from './admin/scenes/users';
import Notification from './admin/scenes/notifications';
import Form from './admin/scenes/form';
import Files from './admin/scenes/files';
import Products from './admin/scenes/products';
import FormProduct from './admin/scenes/form-product';
import Bar from './admin/scenes/bar';
import Pie from './admin/scenes/pie';
import Line from './admin/scenes/line';
import FAQ from './admin/scenes/faq';
import Calendar from './admin/scenes/calendar/calendar';
import Geography from './admin/scenes/geography';
import Sidebar from './admin/scenes/global/Sidebar';
import PrivateRouteAdmin from './PrivateRouteAdmin';
import Orders from './admin/scenes/orders';


// export const jwtAtom = atom(Cookies.get("jwt"));
// export const Atomlogged = atom("");



function App() {

  const [theme,colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className='app'>
                <Sidebar/>
                <main className='content'>
                    <Topbar/>
                    <Routes>
                        <Route path="" element={<PrivateRouteAdmin><Dashboard /></PrivateRouteAdmin>} />
                          
                        <Route path="users" element={<PrivateRouteAdmin><Users /></PrivateRouteAdmin>} />
                        <Route path="products" element={<PrivateRouteAdmin><Products /></PrivateRouteAdmin>} />
                        <Route path="notifications" element={<PrivateRouteAdmin><Notification /></PrivateRouteAdmin>} />
                        <Route path="orders" element={<PrivateRouteAdmin><Orders /></PrivateRouteAdmin>} />
                        <Route path="files" element={<PrivateRouteAdmin><Files /></PrivateRouteAdmin>} />
                        {/* <Route path="contacts" element={<PrivateRouteAdmin><Contacts /></PrivateRouteAdmin>} />
                        <Route path="invoices" element={<PrivateRouteAdmin><Invoices /></PrivateRouteAdmin>} /> */}
                          
                        
                        <Route path="form" element={<PrivateRouteAdmin><Form /></PrivateRouteAdmin>} />
                        <Route path="form-product" element={<PrivateRouteAdmin><FormProduct /></PrivateRouteAdmin>} />
                        
                        <Route path="calendar" element={<PrivateRouteAdmin><Calendar /></PrivateRouteAdmin>} />
                        <Route path="faq" element={<PrivateRouteAdmin><FAQ /></PrivateRouteAdmin>} />
                        
                          
                        <Route path="bar" element={<PrivateRouteAdmin><Bar /></PrivateRouteAdmin>} />
                        <Route path="pie" element={<PrivateRouteAdmin><Pie /></PrivateRouteAdmin>} />
                        <Route path="line" element={<PrivateRouteAdmin><Line /></PrivateRouteAdmin>} />
                        <Route path="geography" element={<PrivateRouteAdmin><Geography /></PrivateRouteAdmin>} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>    
  );
}

export default App;