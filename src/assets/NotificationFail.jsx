import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons';

import './NotificationFail.css'
export default function NotificationFail (){
    return(
        <div className="w-fit absolute top-0  bg-red-500 flex flex-col justify-center items-center p-4 rounded-xl notification-animation">
            <p className="text-md font-bold text-white">REGISTRASI GAGAL</p>
            <FontAwesomeIcon icon={faCircleXmark} size="2xl" color="white"/>
        </div>
    )
}