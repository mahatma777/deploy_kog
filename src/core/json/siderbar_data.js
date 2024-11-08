import * as Icon from 'react-feather';

export const SidebarData = [
          
    {
        label: "Main",
        submenuOpen: true,
        showSubRoute: false,
        submenuHdr: "Main",
        submenuItems: [
         
          { label: "Dashboards", link: "admin-dashboard", icon:<Icon.Grid />,showSubRoute: false,submenu: false },
          
    
        ]
      },
      {
        label: "Students",
        submenuOpen: true,
        showSubRoute: false,
        submenuHdr: "add",
      
        submenuItems: [
          // { label: "Products", link: "/product-list", icon:<Icon.Box />,showSubRoute: false,submenu: false },
          { label: "Register Student", link: "/register-students", icon:  <Icon.PlusSquare />,showSubRoute: false, submenu: false },
          // { label: "Expired Products", link: "/expireaddd-products", icon:  <Icon.Codesandbox  />,showSubRoute: false,submenu: false },
          { label: "View Students", link: "/view-students", icon: <Icon.Codesandbox  />,showSubRoute: false,submenu: false },
          { label: "Register Schools", link: "/register-schools", icon:  <Icon.Codepen />,showSubRoute: false,submenu: false },
          { label: "View Schools", link: "/sub-categories", icon:  <Icon.Speaker  />,showSubRoute: false,submenu: false },
          { label: "Reports", link: "/brand-list", icon:  <Icon.Tag />,showSubRoute: false,submenu: false },

        ]
      },
     


      {
        label: "Settings",
        submenu: true,
        showSubRoute: false,
        submenuHdr: "Settings",
        submenuItems: [
          { label: "General Settings", 
          submenu: true, 
          showSubRoute: false,
          icon: <Icon.Settings/>,
          submenuItems: [
            { label: "Profile", link: "/general-settings" },
       
          ]},
       
        
  
         
          { label: "Logout", link: "/signin", icon:  <Icon.LogOut />,showSubRoute: false }
        ]
      }
      



]
