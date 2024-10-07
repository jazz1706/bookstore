import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const backgroundStyle = {
  backgroundImage: 'url("./src/assets/Store_image.avif")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
  margin: '0',
  padding: '0'
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <div style={backgroundStyle}>
        <App />
      </div>
    </SnackbarProvider>
  </BrowserRouter>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <SnackbarProvider>
//         <App />
//       </SnackbarProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );