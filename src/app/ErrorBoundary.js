"use client"
import Error from "./error"

 
import React,{ useEffect,useState } from 'react'
// import CustomizedSnackbars from '@/components/common/Snackbar'
// export default function Error({ error, reset }) {
//     const [snackbar, setSnackbarInfo] = useState({
//         open: false,
//         message: "",
//         variant: "success",
//       });
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error(error)
//     setSnackbarInfo({
//         open: true,
//         message: error?.message,
//         variant: "error",
//       })
//   }, [error])
 
//   const renderSnackBar = () => {
//     return (
//       <CustomizedSnackbars
//         open={snackbar.open}
//         handleClose={() =>
//           setSnackbarInfo({ open: false, message: "", variant: "" })
//         }
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         variant={snackbar.variant}
//         message={snackbar.message}
//       />
//     );
//   };

//   return (
//       <html>
//         <body>
//           {renderSnackBar()}
//           <h2>Something went wrong!</h2>
//           <button onClick={() => reset()}>Try again</button>
//         </body>
//       </html>
//   )
// }
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  onClose = () => {
    this.setState({ hasError: false, error: null }); 
    console.log(this.state);

  };

  render() {
    if (this.state.hasError==true) {
      return (
        <div>
          <Error error={this.state.error} reset={this.resetError} onClose={this.onClose}/>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
