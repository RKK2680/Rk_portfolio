import React ,{useState} from 'react'
import Layout from "../Layout/Layout"
import ContectLeft from '../Testimonial/ContectLeft'

const Testimonial = () => {
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [errmsg,seterrMsg]=useState('');
  const [msg,setMsg]=useState('');
  const [succmsg,setsuccmsg]=useState("");
  
  //================Email Validation =================
  const emailVatidation=(email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  //================Email Validation =================  
  const hendlmsg=(e) => {
    e.preventDefault()
    if(name === ""){
      seterrMsg("Name is required !")
    }
    else if(phone === ""){
      seterrMsg("Phone is required !")
    }
    else if(email === ""){
      seterrMsg("Email is required !");
    }
    else if(!emailVatidation(email)){
      seterrMsg("Email is not valid!");
    }
    else if(subject === ""){
      seterrMsg("Subject is required !")
    }
    else if(msg === ""){
      seterrMsg("Message is required !")
    }
    else {
      setsuccmsg(`Thank You Dear ${name}, Your Message has been Sent Successfully.......`); 
      setName('');
      setPhone('');
      setEmail('');
      setSubject('');
      setMsg('');
      seterrMsg("");
      console.log(name,phone,email,subject,msg);
    }

  }

  return (
    <section
    id='resume'
    className='w-full py-20 border-b-[1px] border-b-black h-auto'>
    <div className='flex justify-center item-center contect-center text-center'>
    <Layout 
    title='Create a new project '
    des=' Contect Me'
    />
    </div>
    {/* <div className='max-w-6xl mx-auto'> */}
      <div className='w-full ' >
        <div className='w-full h-[500px] flex justify-between '>
        <ContectLeft/>
          <div className='w-[60%] h-full py-10 flex flex-col bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne gap-4'>
          <form className='w-full flex flex-col gap-6 py-2'>
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
              <div className='w-full flex gap-5' >


                <div className='w-1/2 flex flex-col gap-4'>
                <p>Your Name</p>
                <input 
                onChange={(e)=>setName(e.target.value)} 
                value={name}
                 type="text"  
                 placeholder='Enter Your Name' 
                 className={`${errmsg === "Name is required !" && "outline-designColor"}
                 contactInput`}>
                 </input>
                </div>


                <div className='w-1/2 flex flex-col gap-4'>
                <p>Phone</p>
                <input 
                onChange={(e)=>setPhone(e.target.value)} 
                value={phone} 
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
                value={email} 
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
                value={subject} 
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
                value={msg} 
                cols="30" 
                rows="2" 
                className={`${errmsg === "Message is required !" && "outline-designColor"}
                 contactInput`}>
                </textarea>
                </div>

                <div>
                  <button 
                  onClick={hendlmsg} 
                  type="submit"
                  className='w-full bg-designColor text-white py-2 rounded-lg shadow-shadowOne'>Send Message</button>
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
