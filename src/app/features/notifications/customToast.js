import { toast } from 'react-toastify';

const customeToast = {
    success: (message, options = {}) => {
       return toast.success(message, {
            ...options,
            position: 'top-center',            
        });
    }
}

export default customeToast;