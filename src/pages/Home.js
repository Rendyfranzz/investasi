import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'

const Home = ({ setData }) => {
    const navigate = useNavigate()
    const [invest, setInvest] = useState()
    const [bunga, setBunga] = useState()
    const [time, setTime] = useState("Bulan")
    const [duration, setDuration] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(invest, bunga);
        let result
        result = ((parseInt(invest)*parseInt(bunga))/100)*parseInt(duration)
        let temp = {
            invest,
            bunga,
            time,
            duration,
            result
        }
        setData(temp)
        navigate("/result")
    }
    return (
        <Layout>
            <div className='flex flex-col h-screen text-white bg-blue-800 w-96'>
                <div className='sticky top-0 mx-auto'>
                    <span className='text-2xl font-semibold'>Investasi</span>
                </div>
                <div className='h-full mt-24 text-xl font-normal'>
                    <form onSubmit={handleSubmit} className='relative h-full p-2 text-left'>
                        <div className='flex flex-col'>
                            <label>Total Investasi</label>
                            <input className='bg-transparent' onChange={e => setInvest(e.target.value)} type='number' placeholder='Masukan Jumlah' required />
                        </div>
                        <div className='flex flex-col'>
                            <label>Bungan (persentase)</label>
                            <input className='bg-transparent' onChange={e => setBunga(e.target.value)} type='number' placeholder='Masukan Suku Bunga' required />
                        </div>
                        <div className='flex flex-col'>
                            <select className='bg-transparent' onChange={e => setTime(e.target.value)}>
                                <option value="" disabled>Pilih salah satu</option>
                                <option value="Bulan">Bulan</option>
                                <option value="Tahun">Tahun</option>
                            </select>
                        </div>
                        <div className='flex flex-col border-b-2'>
                            <label>Durasi ({time})</label>
                            <input className='bg-transparent' onChange={e => setDuration(e.target.value)} type='number' placeholder='Masukan Durasi' required />
                        </div>
                        <div className='absolute left-0 right-0 flex justify-center w-56 m-auto font-medium text-white bottom-8'>
                        <input type='submit' className='w-full mt-16 bg-red-400 cursor-pointer rounded-xl' />
                        </div>
                        
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Home