import { toast, ToasterProps } from 'sonner';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export default function showToast(type: ToastType, text: string, options?: Partial<ToasterProps>) {
    const toastFn = type === 'error' ? toast.error : type === 'info' ? toast.info : type === 'warning' ? toast.warning : toast.success;

    const toastOptions: ToasterProps = {
        position: 'top-right',
        duration: 2500,
        theme: 'system',
    };

    toastFn(text, {
        ...toastOptions,
        ...options,
    });
}
