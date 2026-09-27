import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

import NotificationSucc from './assets/NotificationSucc';
import NotificationFail from './assets/NotificationFail';
import { useEffect, useState } from 'react';


export default function Form() {
    const [nama, setNama] = useState('');
    const [statusForm, setStatusForm] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nama.length >= 5) {
            setStatusForm('sukses');
            setNama('')
        } else {
            setStatusForm('gagal');
        }
    }

    useEffect(() => {
        if (statusForm !== 'idle') {
            const timer = setTimeout(() => {
                setStatusForm('idle');
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [statusForm]);

    // SHOW HIDE PASSWORD
    const [iconPass, setIconPass] = useState('eyeslash');
    function eyePass() {

        if (iconPass === 'eyeslash') {
            setIconPass('eye')
        } else {
            setIconPass('eyeslash');
        }
    }


    //OBJECT HANDLER
    const [values, setValues] = useState({
        nama: '',
        email: '',
        nomor: '',
        asalProvinsi: '',
        password: ''
    })

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const [errors, setErros] = useState({});
    //HANDLE SUBMIT
    function handleSmt(e) {
        e.preventDefault()
        console.log(values)

        const validationErr = {}
        if (!values.nama.trim()) {
            validationErr.nama = "Masukkan Nama!"
        }

        if (!values.email.trim()) {
            validationErr.email = "Masukkan Email!"

        } else if (/\S+@\S\./.test(values.email)) {
            validationErr.email = "Email Tidak Valid!"
        }

        if (!values.nomor.trim()) {
            validationErr.nomor = "Masukkan Nomor Telepon"
        } else if (values.nomor.length > 13 || values.nomor.length < 10) {
            validationErr.nomor = "Jumlah digit nomor telepon tidak valid"
        }

        if (!values.asalProvinsi.trim()) {
            validationErr.asalProvinsi = "Masukkan asal provinsi!"
        }

        if (!values.password.trim()) {
            validationErr.password = "Masukkan Password!"
        } else if (values.password.length < 8 ) {
            validationErr.password = "Password harus memiliki setidaknya 8 karakter termasuk huruf kapital, angka atau simbol!"
        }
        setErros(validationErr);

        if (Object.keys(validationErr).length === 0) {
            setStatusForm('sukses');
        } else {
            setStatusForm('gagal');

        }
    }

    return (
        <div className='relative'>
            <main className=" flex flex-col gap-2 justify-center items-center bg-[url(./assets/bg.jpg)] bg-cover bg-no-repeat lg:bg-center min-h-screen
        ">
                {statusForm === 'gagal' && <NotificationFail />}
                {statusForm === 'sukses' && <NotificationSucc />}
                <div className="flex flex-col justify-evenly rounded-2xl items-center w-full lg:w-[50%] h-fit bg-gray-600/30 p-4">
                    <h1 className="font-bold text-2xl text-center text-white">REGISTER AN ACCOUNT !</h1>
                    <form className="mt-8 w-full  lg:w-[50%] h-fit p-2 border-black rounded-md flex flex-col lg:gap-1 justify-center" onSubmit={handleSmt} >

                        <label className="font-bold text-white text-lg">Nama Lengkap : <span className="text-red-700 font-bold">*</span></label>
                        <input type="text" className="w-full h-8 bg-transparant border border-gray-200 rounded-md p-2 hover:border-3 duration-200 text-white font-semibold outline-0" placeholder="Masukkan nama lengkap" onChange={(e) => handleChanges(e)} name='nama'/>
                        {errors.nama && <span className='text-sm text-red-500'>{errors.nama}</span>}



                        <label className="font-bold text-white text-lg">Email : <span className="text-red-700 font-bold">*</span></label>
                        <input type="Email" className="w-full h-8 bg-transparant border border-gray-200 rounded-md p-2 hover:border-3 duration-200 text-white font-semibold outline-0" placeholder="Masukkan alamat email" onChange={(e) => handleChanges(e)} name='email' />
                        {errors.email && <span className='text-sm text-red-500'>{errors.email}</span>}



                        <label className="font-bold text-white text-lg">Nomor telepon : <span className="text-red-700 font-bold">*</span></label>
                        <input type="text" className="w-full h-8 bg-transparant border border-gray-200 rounded-md p-2 hover:border-3 duration-200 text-white font-semibold outline-0" placeholder="Masukkan nomor telepon" onChange={(e) => handleChanges(e)} name='nomor' />
                        {errors.nomor && <span className='text-sm text-red-500'>{errors.nomor}</span>}
                        
                        <label className="font-bold text-white text-lg">Asal Provinsi : <span className="text-red-700 font-bold">*</span></label>
                        <input type="text" className="w-full h-8 bg-transparant border border-gray-200 rounded-md p-2 hover:border-3 duration-200 text-white font-semibold outline-0" placeholder="Masukkan asal provinsi" onChange={(e) => handleChanges(e)} name='asalProvinsi' />
                        {errors.asalProvinsi && <span className='text-sm text-red-500'>{errors.asalProvinsi}</span>}




                        <label className="font-bold text-white text-lg">Password : <span className="text-red-700 font-bold">*</span></label>
                        <div className="w-full h-8 flex flex-row items-center justify-between  border border-gray-200 rounded-md p-2 hover:border-3 duration-3">
                            <div className="w-[95%]">
                                <input type={iconPass === 'eye' ? 'text' : 'password'} className="w-full h-full bg-transparant border-0 outline-0 text-white font-semibold " placeholder="Masukkan password" onChange={(e) => handleChanges(e)} name='password' />
                                
                            </div>
                            <div className="w=[5%] cursor-pointer" onClick={eyePass} >
                                {iconPass === 'eye' && <FontAwesomeIcon icon={faEye} color="white" />}
                                {iconPass === 'eyeslash' && <FontAwesomeIcon icon={faEyeSlash} color="white" />}
                            </div>
                            
                        </div>
                        {errors.password && <span className='text-sm text-red-500'>{errors.password}</span>}

                        <button type="submit" className="font-bold w-full h-fit p-2 bg-blue-500/30 hover:bg-blue-500/80  text-gray-50 rounded-md text-lg active:scale-95 transition-all duration-300 cursor-pointer mt-4"> REGISTER </button>
                    </form >
                </div>
            </main >
        </div>  
    )
}
