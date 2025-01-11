import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export default function showToast(type: ToastType, text: string, options?: Partial<ToastOptions>) {
    const toastFn = type === 'error' ? toast.error : type === 'info' ? toast.info : type === 'warning' ? toast.warning : toast.success;

    const toastOptions: ToastOptions = {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'system',
    };

    toastFn(text, {
        ...toastOptions,
        ...options,
    });
}
