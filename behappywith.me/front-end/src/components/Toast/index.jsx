import	React	from	'react';
import	{	ToastContainer,	toast	}	from	'react-toastify';
import	'react-toastify/dist/ReactToastify.min.css';

export function Toast(){

  function success(msg){
    toast.success(msg)
  }

  function info(msg){
    toast.info(msg)
  }

  function error(msg){
    toast.error(msg)
  }
  return (
    <ToastContainer
			position="bottom-center"												
			autoClose={5000}
			hideProgressBar={true}
			closeOnClick
			pauseOnHover
		/>
  )
}