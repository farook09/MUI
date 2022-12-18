import React from 'react';
import './App.css';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
import { MuiDrawer } from './components/MuiDrawer';
// import { MUILink } from './components/MUILink';
import { MUINavbar } from './components/MUINavbar';
import { MuiSpeedDail } from './components/MuiSpeedDail';
// import { MUIImageList } from './components/MUIImageList';
// import { MUIAccordian } from './components/MUIAccordian';
// import { MUICard } from './components/MUICard';
// import { MUILayout } from './components/MUILayout';
// import { MuiAutoComplete } from './components/MuiAutoComplete';
// import { MuiRating } from './components/MuiRating';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiButton } from './components/MuiButton';
// import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography></MuiTypography> */}
      {/* <MuiButton></MuiButton> */}
      {/* <MuiTextField></MuiTextField> */}
      {/* <MuiSelect></MuiSelect> */}
      {/* <MuiRadioButton></MuiRadioButton> */}
      {/* <MuiCheckbox></MuiCheckbox> */}
      {/* <MuiSwitch></MuiSwitch> */}
      {/* <MuiRating></MuiRating> */}
      {/* <MuiAutoComplete></MuiAutoComplete> */}
      {/* LayoutComponents from below */}
      {/* <MUILayout></MUILayout> */}
      {/* <MUICard></MUICard> */}
      {/* <MUIAccordian></MUIAccordian> */}
      {/* <MUIImageList></MUIImageList> */}
      <MUINavbar></MUINavbar>
      {/* <MUILink></MUILink> */}
      <MuiBreadcrumbs></MuiBreadcrumbs>
      <MuiDrawer></MuiDrawer>
      <MuiSpeedDail></MuiSpeedDail>
      <MuiBottomNavigation></MuiBottomNavigation>
    </div>
  );
}

export default App;
