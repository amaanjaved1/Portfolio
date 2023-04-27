import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <div className='bg-[#FFFFFF] h-screen w-screen'>
          <div className='flex justify-center'>
          <Image src="/image/Headshot.png" width={150} height={150} className='pt-[100px]' alt="Headshot" />
          </div>
          <div>
            <h1 className='text-[250%] font-bold text-[#8B0000] text-center py-5 tracking-wider'>Amaan Javed</h1>
          </div>
          <div>
          <h1 className='text-[140%] font-bold text-[#8B0000] text-center pt-2 tracking-wide'>Computer Science @ Queen’s University</h1>
          </div>
          <div className='flex flex-row justify-center mt-11'>
            <Link href="https://www.linkedin.com/in/amaan-javed/">
              <div className='mx-7'>
              <Image src="/image/LinkedIn.png" width={65} height={65} className='' alt="LinkedIn" />
              </div>
            </Link>
            <Link href="https://github.com/amaanjaved1">
              <div className='mx-7'>
              <Image src="/image/GitHub.png" width={65} height={65} className='' alt="GitHub" />
              </div>
            </Link> 
            <div className='mx-7'>
            <Image src="/image/YouTube.png" width={65} height={65} className='' alt="YouTube" />
            </div>
          </div>
          <div className='h-[150px] flex justify-center pt-3 pb-[5%] mt-5'>
          <a href="mailto:amaanjaved2004@gmail.com">
            <div className='border-4 border-[#000000] rounded-3xl text-center pt-5 h-[75px] w-[150px] text-[#000000] mr-8 bg-white'>Contact Me</div>
            </a>
            <Link href="/projects">
            <div className='border-4 border-[#000000] rounded-3xl text-center pt-5 h-[75px] w-[150px] text-[#000000] mr-8 bg-white'>View Projects</div>
            </Link>
        </div>
        </div>
    </main>
  )
}
