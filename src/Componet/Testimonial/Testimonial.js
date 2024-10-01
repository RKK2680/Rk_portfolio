import React ,{useState,useRef} from 'react'
import Layout from "../Layout/Layout"
import ContectLeft from './ContectLeft'
import emailjs from '@emailjs/browser'

const Testimonial = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y4amp9a', 'template_r4fto8v', form.current, {
        publicKey: 'MMjOvpOoZviQb0u9T',
      })
      setsuccmsg(`Thank You Dear ${to_name}, Your Message has been Sent Successfully.......`); 
      if(to_name === ""){
        seterrMsg("Name is required !")
      }
      else if(phone_no === ""){
        seterrMsg("Phone is required !")
      }
      else if(from_name === ""){
        seterrMsg("Email is required !");
      }
      else if(!emailVatidation(from_name)){
        seterrMsg("Email is not valid!");
      }
      else if(Subject === ""){
        seterrMsg("Subject is required !")
      }
      else if(message === ""){
        seterrMsg("Message is required !")
      }
      else {
        setsuccmsg(`Thank You Dear ${to_name}, Your Message has been Sent Successfully.......`); 
        setName('');
        setPhone('');
        setEmail('');
        setSubject('');
        setMsg('');
        seterrMsg("");
        console.log(to_name,phone_no,from_name,Subject,message);
        
      }
  

  };


  const [to_name,setName]=useState('');
  const [phone_no,setPhone]=useState('');
  const [from_name,setEmail]=useState('');
  const [Subject,setSubject]=useState('');
  const [errmsg,seterrMsg]=useState('');
  const [message,setMsg]=useState('');
  const [succmsg,setsuccmsg]=useState("");
  
  //================Email Validation =================
  const emailVatidation=(from_name) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(from_name).toLowerCase());
  }
  //================Email Validation =================  
  
  const hendlmsg=(e) => {
    e.preventDefault()
    
    
  }

  return (
    <section
    id='contect'
    className='w-full py-20 border-b-[1px] border-b-black '>
    <div className='flex justify-center item-center contect-center text-center'>
    <Layout 
    title='Create a new project '
    des=' Contect Me'
    />
    </div>
    {/* <div className='max-w-6xl mx-auto'> */}
      <div className='w-full ' >
        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between '>
        <ContectLeft/>
          <div className='w-full lgl:w-[60%] h-full py-10 flex flex-col bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne gap-4'>
          
          <form ref={form} onSubmit={hendlmsg} className='w-full flex flex-col gap-2 lgl:gap-6 py-2 lgl:py-5'>
            { errmsg &&(
               <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-400 text-base tracking-wide animate-bounce'>
                {errmsg}
               </p>
           )}
            { succmsg && (
               <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                {succmsg}
               </p>
            )}
              <div className='w-full flex flex-col lgl:flex-row gap-5' >


                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                <p>Your Name</p>
                <input 
                onChange={(e)=>setName(e.target.value)} 
                value={to_name}
                name='to_name'
                 type="text"  
                 placeholder='Enter Your Name' 
                 className={`${errmsg === "Name is required !" && "outline-designColor"}
                 contactInput`}>
                 </input>
                </div>


                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                <p>Phone</p>
                <input 
                onChange={(e)=>setPhone(e.target.value)} 
                value={phone_no} 
                name='phone_no'
                type="number"  
                placeholder='Enter Your Phone No.' 
                className={`${errmsg === "Phone is required !" && "outline-designColor"}
                 contactInput`}>
                </input>
                </div>


                <div className='w-1/2 flex flex-col gap-4'>
                </div>
                </div>
                <div className=' flex flex-col gap-4'>
                <p>Email</p>
                <input 
                onChange={(e)=>setEmail(e.target.value)} 
                value={from_name}
                name='from_name' 
                type="Email"  
                placeholder='Enter Your Email' 
                className={`${errmsg === "Email is required !" && "outline-designColor"}
                  contactInput`}>
                </input>
                </div>


                <div className=' flex flex-col gap-4'>
                <p>Subject</p>
                <input 
                onChange={(e)=>setSubject(e.target.value)} 
                value={Subject} 
                name='Subject'
                type="text"  
                placeholder='Enter Your Subject'
                className={`${errmsg === "Subject is required !" && "outline-designColor"}
                 contactInput`}>
                </input>
                </div>


                <div className=' flex flex-col gap-4'>
                <p>Message</p>
                <textarea 
                onChange={(e)=>setMsg(e.target.value)} 
                value={message} 
                name='message'
                cols="30" 
                rows="2" 
                className={`${errmsg === "Message is required !" && "outline-designColor"}
                 contactInput`}>
                </textarea>
                </div>

                <div >
                  <input
                  onClick={ sendEmail}
                  value= "send"
                  type="submit"
                  className='w-full bg-designColor text-white py-2 rounded-lg shadow-shadowOne'/>
                </div>
                

                {/* { errmsg &&(
               <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-400 text-base tracking-wide animate-bounce'>
                {errmsg}
               </p>
           )}
            { succmsg && (
               <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                {succmsg}
               </p>
            )} */}
          </form>
          
          </div>
        </div>
      </div>
    {/* </div> */}
    </section>
  )
}

export default Testimonial
