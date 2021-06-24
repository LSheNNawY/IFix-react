import {toast} from "react-toastify";

export const notify = (message, type, history = null, to = null) => toast(message, {
    onClose: () => history? history.push(to) : '',
    type: type === 'success' ? toast.TYPE.SUCCESS : toast.TYPE.ERROR,
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
})
