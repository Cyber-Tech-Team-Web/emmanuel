import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Form from '../components/Form2'
import '../App.css'


function Contact() {
    return (
        <div className='overflow-x-hidden'>
        <Navbar />


            <div id='heropic' className='hidden lg:flex md:flex'>
            <div className='bg-black h-[408px] w-screen bg-opacity-50 '>
            <div className='text-white py-24 flex flex-col items-center justify-center text-center gap-4'>
                <p className='text-[60px] font-semibold'>Contact Us</p>
                <p className='w-[450px]'>We specialize in helping you build a team of expert developers.</p>
            </div>
            </div>
            </div>

                            {/*responsive Hero page */}
            <div id='herosmall' className='md:hidden lg:hidden' >
            <div className='bg-black h-full w-screen bg-opacity-50 rounded-bl-[100px]'>
            <div className='text-white py-10 lg:py-24 flex flex-col items-center justify-center text-center lg:gap-4'>
                <p className='text-[30px] md:text-[60px] lg:text-[60px] font-semibold'>Contact Us</p>
                <p className='w-[450px] font-thin lg:font-normal md:font-normal p-4'>We specialize in helping you build a team of expert developers.</p>
            </div>
            </div>
            </div>

            <div className="flex flex-col gap-6 mb-14 items-center lg:items-start md:items-start pt-4  lg:px-20 ">
                <p className="text-[36px] md:text-[46px] lg:text-[46px] text-[#16205F] font-semibold">Get in touch</p>
                <p className=" px-4 text-center md:px-0 md:text-start lg:px-0 lg:text-start md:w-[400px] lg:w-[400px]">Please feel free to get in touch with us via any convenient means (phone, whatsapp, email, submit a contact form). We will be glad to answer your questions as soon as possible.</p>
            </div>

            <Form/>

        <Footer />
        </div>
        
    )
}

export default Contact