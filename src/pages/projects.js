import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main className='bg-[#FFFFFF] h-[250%] w-screen'>
        <h1 className='text-[#8B0000] font-bold text-[250%] tracking-wider text-center pt-5 pb-14'>Featured Projects</h1>
        <div className='flex justify-center'>
        <div className="flex flex-col h-[80%] w-[75%]">
            <Link href="https://github.com/amaanjaved1/stockme.io">
            <div className="flex min-h-[35%] border-4 border-[#8B0000] rounded-3xl my-8 bg-white">
                <div className='w-[25%] flex justify-center align-middle'>
                    <div className=''>
                        <Image src="/image/StockMePhoto.png" width={100} height={100} className='rounded-3xl width-[40%] height-[40%] mt-[50%]' alt="Stockme.io logo" />
                    </div>
                </div>
                <div className='w-[70%] h-[100%] ml-4 py-2 mt-8 mb-8'>
                    <h3 className='text-[#8B0000] font-bold tracking-widest text-[140%] mb-3'>Stockme.io</h3>
                    <text className='text-[#8B0000] font-normal tracking-normal text-[110%] py-3'>Stock trading simulator aimed to teach kids about financial literacy and stock trading</text>
                    <h5 className='text-[#8B0000] font-normal tracking-normal text-[110%] pt-7'>Flask, Python, SQL, HTML/CSS</h5>
                </div>
            </div>
            </Link>
            <Link href="https://github.com/amaanjaved1/CSchat">
            <div className="flex min-h-[35%] border-4 border-[#8B0000] rounded-3xl my-8 bg-white">
                <div className='w-[25%] flex justify-center align-middle'>
                    <div className=''>
                        <Image src="/image/CSchatPhoto.png" width={100} height={100} className='rounded-3xl width-[40%] height-[40%] mt-[50%]' alt="Stockme.io logo" />
                    </div>
                </div>
                <div className='w-[70%] h-[100%] ml-4 py-2 mt-8 mb-8'>
                    <h3 className='text-[#8B0000] font-bold tracking-widest text-[140%] mb-3'>CSchat</h3>
                    <text className='text-[#8B0000] font-normal tracking-normal text-[110%] py-3'>Web platform designed for Queen’s computer science students</text>
                    <h5 className='text-[#8B0000] font-normal tracking-normal text-[110%] pt-7'>Django, Python, SQL, HTML/CSS</h5>
                </div>
            </div>
            </Link>
            <Link href="https://github.com/amaanjaved1/myCommerce">
            <div className="flex min-h-[35%] border-4 border-[#8B0000] rounded-3xl my-8 bg-white">
                <div className='w-[25%] flex justify-center align-middle'>
                    <div className=''>
                        <Image src="/image/myCommercePhoto.png" width={100} height={100} className='rounded-3xl width-[40%] height-[40%] mt-[50%]' alt="Stockme.io logo" />
                    </div>
                </div>
                <div className='w-[70%] h-[100%] ml-4 py-2 mt-8 mb-8'>
                    <h3 className='text-[#8B0000] font-bold tracking-widest text-[140%] mb-3'>myCommerce</h3>
                    <text className='text-[#8B0000] font-normal tracking-normal text-[110%] py-3'>E-commerce website simulator built to practice SQL and database design skills</text>
                    <h5 className='text-[#8B0000] font-normal tracking-normal text-[110%] pt-7'>Django, Python, SQL, HTML</h5>
                </div>
            </div>
            </Link>
            <Link href="https://github.com/amaanjaved1/Ludo">
            <div className="flex min-h-[35%] border-4 border-[#8B0000] rounded-3xl my-8 bg-white">
                <div className='w-[25%] flex justify-center align-middle'>
                    <div className=''>
                        <Image src="/image/LudoPhoto.png" width={100} height={100} className='rounded-3xl width-[40%] height-[40%] mt-[50%]' alt="Stockme.io logo" />
                    </div>
                </div>
                <div className='w-[70%] h-[100%] ml-4 py-2 mt-8 mb-8'>
                    <h3 className='text-[#8B0000] font-bold tracking-widest text-[140%] mb-3'>Ludo - Board Game</h3>
                    <text className='text-[#8B0000] font-normal tracking-normal text-[110%] py-3'>Managed a group of 2 to create the interactive board game Ludo for the Grade 12 Computer Science Capstone Project</text>
                    <h5 className='text-[#8B0000] font-normal tracking-normal text-[110%] pt-7'>Python - Pygame, Tkinter</h5>
                </div>
            </div>
            </Link>
            <Link href="https://github.com/amaanjaved1/iMail">
            <div className="flex min-h-[35%] border-4 border-[#8B0000] rounded-3xl my-8 bg-white">
                <div className='w-[25%] flex justify-center align-middle'>
                    <div className=''>
                        <Image src="/image/MonopolyPhoto.png" width={100} height={100} className='rounded-3xl width-[40%] height-[40%] mt-[50%]' alt="Stockme.io logo" />
                    </div>
                </div>
                <div className='w-[70%] h-[100%] ml-4 py-2 mt-8 mb-8'>
                    <h3 className='text-[#8B0000] font-bold tracking-widest text-[140%] mb-3'>iMail</h3>
                    <text className='text-[#8B0000] font-normal tracking-normal text-[110%] py-3'>Online email platform built to practice how to integrate an API into a web application</text>
                    <h5 className='text-[#8B0000] font-normal tracking-normal text-[110%] pt-7'>Python, JavaScript, Django, SQL</h5>
                </div>
            </div>
            </Link>
        </div>
        </div>
        <div className='h-[150px] flex justify-center pt-3 pb-[5%]'>
            <Link href="/">
            <div className='border-4 border-[#000000] rounded-3xl text-center pt-5 h-[75px] w-[125px] text-[#000000] mr-8 bg-white'>Back</div>
            </Link>
            <Link href="https://github.com/amaanjaved1">
            <div className='border-4 border-[#000000] rounded-3xl text-center pt-5 h-[75px] w-[125px] text-[#000000] mr-8 bg-white'>Visit GitHub</div>
            </Link>
        </div>
    </main>
  )
}