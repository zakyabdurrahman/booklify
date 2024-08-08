import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './app/store'


function App() {
  
  

  return (
    <>
      <Provider store={store}>
        <GoogleOAuthProvider clientId='1085766305930-me9l40ne3to9fauh9jggjf4lcv791fsb.apps.googleusercontent.com'>
          <RouterProvider router={router}/>
        </GoogleOAuthProvider>
      </Provider>
      
      
      <ToastContainer
        position="top-center"
        autoClose={1500}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition: Slide
      />
    </>
  )
}

export default App
