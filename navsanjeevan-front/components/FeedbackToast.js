'use client';
import { ToastContainer, toast } from 'react-toastify';
export default function FeedbackToast(props) {
  const notify = () => toast.success(props.content);
  return (
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
  )
}


