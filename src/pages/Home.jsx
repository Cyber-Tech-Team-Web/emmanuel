import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image from '../assets/honehero.jpg'
import icon1 from '../assets/homeIcon1.svg'
import icon2 from '../assets/homeIcon2.svg'
import icon3 from '../assets/homeIcon3.svg'
import process1 from '../assets/processImage1.svg'
import process2 from '../assets/processImage2.svg'
import process3 from '../assets/processImage3.svg'
import process4 from '../assets/processImage4.png'
import expert1 from '../assets/expertIcon1.svg'
import expert2 from '../assets/expertIcon2.svg'
import expert3 from '../assets/expertIcon3.svg'
import expert4 from '../assets/expertIcon4.svg'
import Form2 from '../components/Form2'
import analysis from '../assets/analysis.svg'
import database from '../assets/database.svg'
import devop from '../assets/devop.svg'
import front from '../assets/front.svg'
import info from '../assets/info.svg'
import lead from '../assets/lead.svg'
import mobile from '../assets/mobile.svg'
import PHP from '../assets/PHP.svg'
import prod from '../assets/prod.svg'
import project from '../assets/project.svg'
import secure from '../assets/secure.svg'
import solution from '../assets/solution.svg'
import uiux from '../assets/uiux.svg'
import wordpress from '../assets/wordpress.svg'
import react from '../assets/react.png'
import full from '../assets/full.svg'
import { Link } from 'react-scroll'











function Home() {
    const array1 = [
        {
            id: '1',
            image: icon1,
            head: "Architect your Solution",
            text: "Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your business. We design a strategic roadmap to guide your result-oriented goals."
        },
        {
            id: '2',
            image: icon2,
            head: "Engineer your Solution",
            text: "We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and industry-specific experience."
        },
        {
            id: '3',
            image: icon3,
            head: "ReEngineer your Business Process",
            text: "Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This process places the foundation for a more efficient and strong business that can meet demands at scale."
        },
    ];

    const array2 = [
        {
            id: "01",
            text: "YOU ASK",
            image: process1
        },
        {
            id: "02",
            text: "WE PROCEED",
            image: process2
        },
        {
            id: "03",
            text: "NEGOTIATE",
            image: process3
        },
        {
            id: "04",
            text: "YOU GET",
            image: process4
        },
    ];

    const array3 = [
        {
            id: "1",
            head: "Dedicated Teams",
            text: "Find your next team member",
            image: expert1
        },
        {
            id: "2",
            head: "Staff Augmentation",
            text: "Build a distributed developement team",
            image: expert2
        },
        {
            id: "3",
            head: "Eye for Design",
            text: "End-to-End Software Development Outsourcing Solutions",
            image: expert3
        },
        {
            id: "4",
            head: "Timely Delivery",
            text: "Open your own remote development center and grow your business",
            image: expert4
        },
    ];

    const array4 = [
        {
            id: "1",
            text: "Frontend Engineers",
            logo: front,
        },
        
        {
            id: "3",
            text: "Fullstack Engineers",
            logo: full,
        },
        {
            id: "4",
            text: "DevOps + DevSecOps Engineers",
            logo: devop,
        },
        {
            id: "5",
            text: "IOS and Android Developers",
            logo: mobile,
        },
        {
            id: "6",
            text: "UI/UX Engineers",
            logo: uiux,
        },
        {
            id: "7",
            text: "PHP Developers",
            logo: PHP,
        },
        {
            id: "8",
            text: "Project Managers",
            logo: project,
        },
        {
            id: "9",
            text: "Solution Architects",
            logo: solution,
        },
        {
            id: "10",
            text: "Wordpress CMS Developers",
            logo: wordpress,
        },
        {
            id: "11",
            text: "Business Analyst",
            logo: analysis,
        },
        {
            id: "12",
            text: "Tech Leads / Team Leads",
            logo: lead,
        },
        {
            id: "13",
            text: "Product Designer",
            logo: prod,
        },
        {
            id: "14",
            text: "Information Scurity Engineers",
            logo: secure,
        },
        {
            id: "15",
            text: "Database admin",
            logo: database,
        },
       
    ]





    return (
        <>
        <Navbar />
        <div className=' overflow-x-hidden'>
            {/* hero */}

            <div>
                <div className='overflow-x-hidden flex flex-col lg:flex-row-reverse text-[#16205F] items-center pl-4 pr-4 lg:pr-20 lg:pl-20 relative  '>
                    <div>
                        {/* <Image src='/images/contact.jpg' alt='image' width={900} height={800}/> */}
                        <img src={image} alt="image"  className='lg:w-[999px] lg:h-[600px]  '/>
                    </div>
                    <div className='items-center md:w-screen  lg:items-start lg:w-[721px] flex flex-col gap-8 bg-white  lg:ml-24 rounded-tl-[100px] lg:absolute left-0 lg:py-10 py-5 rounded-tr-[100px]'>
                        
                            <p className='pt-4 lg:pt-0 text-[30px] md:text-center md:text-[50px] lg:text-[58px] font-semibold leading-tight w-[310px] md:w-[600px]  lg:w-[500px] text-[#16205F]'>Building Software, Quickly and Affordably</p>
                            <p className='w-[310px] lg:w-[615px] md:w-[615px] text-[20px] md:text-center' > We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.</p>
                            <div className='w-screen flex justify-center'>
                                <button className=' bg-gradient-to-r from-yellow-600 to-yellow-300 h-[50px] font-semibold text-white w-[85%] lg:w-[190px]'>Build a Team</button>
                            </div>
                        
                    
                    </div>
                </div>
            </div>

            {/* second component */}
            <div>

            <div className='flex lg:flex-row flex-col lg:px-24 px-20 gap-10 py-28'>
                {
                    array1.map((item) => (

                    <div key={item.id} className='flex lg:flex-row flex-col gap-4 items-center lg:items-start text-center lg:text-start '>
                        <div className='bg-yellow-300 w-fit h-fit p-1 rounded-md mt-2'>
                            <img src={item.image} alt="" className='' />
                        </div>
                        <div className='lg:w-[344px] '>
                            <p className='font-semibold text-[24px] lg:text-[28px] text-[#16205F] lg:w-[350px] leading-tight'>{item.head}</p>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    ))
                }
            </div>
           
            </div>
            {/* Process */}


            <div className='bg-gradient-to-r from-[#FF9900] to-[#F2CB00] flex flex-col items-center justify-center gap-4 text-[#16205F] py-10'>
                <div className=' text-center pt-10 pb-5'>
                    <p className='text-[38px] font-semibold'>Easy Process</p>
                    <p className='text-[17px] w-[403px]'>We specialize in helping you build Website, Applications and Software</p>
                </div>
                <div className='  flex lg:flex-row md:flex-row flex-col gap-8 lg:gap-0 justify-around w-[100vw] px-24'>
                    {
                        array2.map((item) => (
                            <div key={item.id} className='flex flex-col items-center justify-center'>
                                <img src={item.image} alt="" className='w-[100px] md:w-[70px]' />
                                <div className='flex items-baseline pt-4 gap-2 font-bold'>
                                    <p className='text-[36px] '>{item.id}</p>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>

            {/* expertise */}
            
            <div className='text-[#16205F] px-4 lg:px-24 py-20 flex flex-col gap-20'>
                <div className='flex flex-col gap-2 lg:gap-4'>
                    <p className='font-bold'>Expertise</p>
                    <p className='font-semibold lg:text-[46px] text-[30px] w-[100%] lg:w-[700px] leading-tight'>Hire well versed Team of Developers</p>
                    <p className='text-[16px] lg:w-[480px] leading-tight'>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
                </div>
                <div className='flex lg:flex-row  flex-col '>
                        {
                            array3.map((item) => (
                        <div key={item.id} className='flex flex-col gap-4 items-center lg:items-start text-center lg:text-start'>          
                            <div className='bg-yellow-300 w-fit p-2 rounded-lg'>
                                <img src={item.image} alt="" className='w-[60px]' />
                            </div>
                            <div className='w-[327px] flex flex-col lg:gap-2 pb-8 lg:pb-0'>
                                <p className='font-semibold text-[22px]'>{item.head}</p>
                                <p className='text-[16px]'>{item.text}</p>
                            </div>
                        </div>
                            ))
                        }
                </div>

            </div>
            {/* specialised */}

            <div className='p-4 lg:p-28 text-[#001D84] flex flex-col gap-6'>
                <div>
                    <p className='font-bold'>Specialized</p>
                    <p className='font-semibold text-[30px] lg:text-[40px] lg:w-[360px] leading-tight'>Our Specialized Team Provide you with</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        array4.map((item) => (

                            <div  key={item.id} className='flex  items-center gap-6 rounded-2xl shadow-md'>
                                <div className='bg-[#FFF856] h-[90px] w-[13px] rounded-l-2xl'></div>
                                <img src={item.logo} alt="" />
                                <p className='font-bold text-'>{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
        <Form2/>
        <Footer />
        </>
      
    )
}

export default Home