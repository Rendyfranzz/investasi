import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'

const Result = ({data}) => {
  const navigate = useNavigate()
  return (
    <Layout>
            <div className='flex flex-col h-screen p-2'>
                <div className='sticky top-0 flex justify-center'>
                    <button className='absolute top-0 text-2xl left-4' onClick={e=>navigate(-1)}>←</button>
                    <span className='text-2xl font-semibold'>Investasi</span>
                </div>
                <div className='h-full p-4 text-xl font-normal'>
                   <div className='flex flex-col border-2 rounded-lg h-1/2'>
                    <div className='flex flex-col items-center justify-center space-y-4 border-b-2 h-1/2'>
                      <span>Total Nilai</span>
                      <span>{data.duration} {data.time}</span>
                      <span>{(parseInt(data.invest)+data.result).toFixed()}</span>
                    </div>
                    <div className='flex items-center justify-center h-1/2'>
                      <div className='flex justify-center w-full space-x-6'>
                        <div className='flex flex-col items-center justify-center'>
                          <span>Total Investasi</span>
                          <span>{data.invest}</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <span>Total Bunga</span>
                          <span>{(data.result).toFixed()}</span>
                        </div>
                      </div>
                    </div> 
                   </div>
                </div>
            </div>
        </Layout>
  )
}

export default Result