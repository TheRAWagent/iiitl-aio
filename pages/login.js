import React, { useState, useEffect } from 'react'
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout';
import { motion } from 'framer-motion'
import {signin,google,github,userAuth} from '../firebase/auth'
import { onAuthStateChanged } from 'firebase/auth';


const login = () => {

  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const delay = 2.1;

  useEffect(() => {
  
    onAuthStateChanged(userAuth, (user) => {
      if (user) {
        const uid = user.uid;
        router.push('/')
      } else {
      }
    });
   
    setLoading(false);
    setTimeout(() => {
      setLoading(true)
    }, delay * 1000);
  }, [])

  const signinuser = async () => {signin(email,password)}
  const signinwithgoogle = async () => {google()}
  const signinwithgithub = async () => {github()}


  return  (
    <div>
    <Layout products={[]}>
    

      <motion.div
      initial={{ y: -600 }} animate={{ y: 0 }} transition={{ delay: 0 }}>
      <div className='py-10'>

        <div className='bg-white w-full lg:w-[50%] shadow-2xl  h-fit flex flex-col-3 justify-between pt-10 px-10 m-auto '>
          <h1 className='text-2xl '>
            Sign In to DRUGWISE
          </h1>
        </div>
        <div className='bg-white w-full lg:w-[50%] shadow-2xl  h-fit lg:flex flex-col-3 justify-between pt-5  pb-10 px-10 m-auto '>
          <div className='my-10'>
            <div>
              <label htmlFor="email" className='text-[#383838]'>Email</label>
              <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='example.com'
                className='py-3 shadow-md rounded-md px-2 lg:w-[350px] w-full  block my-2 mb-4 border-[#c7c5c5] outline-none border-[1px]' />
            </div>

            <div>
              <label htmlFor="password" className='text-[#383838]'>Password</label>
              <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='password'
                className='py-3 shadow-md rounded-md px-2 lg:w-[350px] w-full  block my-2 mb-4 border-[#c7c5c5] outline-none border-[1px]' />
            </div>

            <div onClick={signinuser}>
              <Button className="w-full text-center" text={"Sign In"} />
            </div>

          </div>

          <div className='py-10 hidden lg:block'>
            <div className='border-[#c7c5c5] w-[0.1px] border-[1px] h-28'></div>
            <h6 className='text-[#c7c5c5] font-bold -translate-x-2'>or</h6>
            <div className='border-[#c7c5c5] w-[0.1px] border-[1px] h-28'></div>
          </div>

          <div className=' gap-y-10'>

            <div className="flex items-center justify-center my-10">
              <button onClick={signinwithgoogle} className="flex w-[320px]  text-center  items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg className="h-6 w-6 mr-2" width="80px" height="80px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                <span className='mx-4 text-[15px]'>Continue with Google</span>
              </button>
            </div>

            <div className="flex   items-center justify-center my-10">
              <button className="flex  w-[320px]  text-center items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg width="20px" height="20px" viewBox="38.657999999999994 12.828 207.085 207.085" xmlns="http://www.w3.org/2000/svg"><path d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z" fill="#3c5a9a" /></svg>
                <span className='mx-4 text-[15px]'>Continue with facebook</span>
              </button>
            </div>

            <div className="flex items-center justify-center my-10">
              <button onClick={signinwithgithub} className=" w-[320px]  text-center flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg width="20px" height="20px" viewBox="0 -3 256 256" version="1.1" preserveAspectRatio="xMidYMid">
                  <g><path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#161614">
                  </path>
                  </g>
                </svg>
                <span className='mx-4 text-[15px]'>Continue with Github</span>
              </button>
            </div>
          </div>
        </div>
        <div className='bg-[#f8f8f8] w-full lg:w-[50%] shadow-md h-fit flex flex-col-3 justify-between py-10 px-10 m-auto '>
          Don't have an Account??
          <Link href={'/signup'}>
            <Button className={""} text="Sign Up" />
          </Link>
        </div>
      </div>
      </motion.div>
    </Layout>
    </div>
  )
}

export default login
