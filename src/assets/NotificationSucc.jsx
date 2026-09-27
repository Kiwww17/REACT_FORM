import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClose } from '@fortawesome/free-solid-svg-icons';

import './NotificationSucc.css'
export default function NotificationSucc() {
    return (
        <div className="w-fit absolute top-0  bg-green-500 flex flex-col justify-center items-center p-4 rounded-xl notification-animation">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <p className="text-md font-bold text-white">REGISTRASI SUKSES</p>
                <FontAwesomeIcon icon={faCheckCircle} size="2xl" color="white" />
            </div>
        </div>
    )
}