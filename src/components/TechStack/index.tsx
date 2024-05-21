import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { IconProps } from "radix-ui";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "lib/utils";

export function TechStack() {
  return (
    <>
      <div className="container" id="techstack">
        <div className="bg-background relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg p-20">
          <p className="z-10 whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black dark:text-white lg:text-5xl">
            Our Tech Stack
          </p>

          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
          />
        </div>
        <div className="m-2 items-center justify-center rounded-sm border pr-4 align-middle dark:border-[#b4fbff38] dark:hover:shadow-2xl dark:hover:shadow-[#62818263] lg:inline-flex">
          <div className="bg-background relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  lg:min-w-[32rem] ">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span>

            {/* Inner Circles */}
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={60}
            >
              <Icons.node />
            </OrbitingCircles>
            {/* <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={60}
            >
              <Icons.mongodb />
            </OrbitingCircles> */}
            {/* <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={15}
              radius={60}
            >
              <Icons.express />
            </OrbitingCircles> */}
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={60}
            >
              <Icons.mongodb />
            </OrbitingCircles>
            {/* Outer Circles (reverse) */}
            {/* <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={140}
            >
              <Icons.node />
            </OrbitingCircles> */}
            <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={140}
            >
              <Icons.react />
            </OrbitingCircles>
            <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={140}
            >
              <Icons.express />
            </OrbitingCircles>
            {/* <OrbitingCircles
              reverse
              className="h-[45px] w-[45px] border-none bg-transparent"
              duration={20}
              delay={5}
              radius={140}
            >
              <Icons.react />
            </OrbitingCircles> */}

            {/* 3rd round  */}
            {/* <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={240}
      >
        <Icons.node />
      </OrbitingCircles>
      <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={240}
      >
        <Icons.mongodb />
      </OrbitingCircles>
<OrbitingCircles

        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={240}
      >
        <Icons.express />
      </OrbitingCircles>
      <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={25}
        radius={240}
      >
        <Icons.react />
      </OrbitingCircles> */}
          </div>
          <div className="bg-transparent p-6 lg:p-10">
            <h1 className="text-balance from-white from-30% to-white/40 py-6 text-center text-5xl font-medium leading-none tracking-tighter text-black dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
            Web Development
            </h1>
            <p className="text-justify font-mono text-lg font-medium text-gray-600 dark:text-gray-400">
            Frontend: Our in-house experts craft responsive interfaces that captivate users, using cutting-edge technologies and best practices. 
            <br/>
           
            Backend: We engineer robust backend solutions, ensuring optimal performance and scalability, tailored to meet your project`&apos;`s needs.
            </p>
            <div className="flex flex-row justify-items-start	gap-3 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" ><path d="M1 5.3L15.892 0l15.284 5.218-2.47 19.694L15.892 32 3.286 25.004 1 5.3z" fill="#e23237"/><path d="M31.176 5.218L15.892 0v32l12.814-7.088 2.47-19.694z" fill="#b52e31"/><path d="M15.915 3.74l-9.28 20.64 3.463-.07 1.87-4.664h8.3l2.032 4.7 3.302.07L15.915 3.74zm.023 6.626l3.14 6.557H13.2l2.747-6.557z" fill="#fff"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" ><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z" fill="#007acc"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" ><path d="M24.4,3.925H30L16,28.075,2,3.925H12.71L16,9.525l3.22-5.6Z" fill="#41b883"/><path d="M2,3.925l14,24.15L30,3.925H24.4L16,18.415,7.53,3.925Z" fill="#41b883"/><path d="M7.53,3.925,16,18.485l8.4-14.56H19.22L16,9.525l-3.29-5.6Z" fill="#35495e"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 32 32" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" ><defs><linearGradient id="a" x1="-133.268" y1="-202.91" x2="-133.198" y2="-202.84" gradientTransform="translate(25243.061 38519.17) scale(189.38 189.81)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#387eb8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="-133.575" y1="-203.203" x2="-133.495" y2="-203.133" gradientTransform="translate(25309.061 38583.42) scale(189.38 189.81)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe052"/><stop offset="1" stop-color="#ffc331"/></linearGradient></defs><path d="M15.885,2.1c-7.1,0-6.651,3.07-6.651,3.07V8.36h6.752v1H6.545S2,8.8,2,16.005s4.013,6.912,4.013,6.912H8.33V19.556s-.13-4.013,3.9-4.013h6.762s3.772.06,3.772-3.652V5.8s.572-3.712-6.842-3.712h0ZM12.153,4.237a1.214,1.214,0,1,1-1.183,1.244v-.02a1.214,1.214,0,0,1,1.214-1.214h0Z" fill="url(#a)"/><path d="M16.085,29.91c7.1,0,6.651-3.08,6.651-3.08V23.65H15.985v-1h9.47S30,23.158,30,15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13,4.013-3.9,4.013H12.975S9.2,16.356,9.2,20.068V26.2s-.572,3.712,6.842,3.712h.04Zm3.732-2.147A1.214,1.214,0,1,1,21,26.519v.03a1.214,1.214,0,0,1-1.214,1.214h.03Z" fill="url(#b)"/></svg>
            <div className="hidden dark:block">
         <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24"  className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" ><path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z" fill="#fff"/></svg>
         
         </div>   
         <div className="dark:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24"  className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" ><path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z"/></svg>

            </div>  
             </div> 
            
          </div>
        </div>
        <div className="m-2 hidden items-center justify-center rounded-sm border pr-4 align-middle dark:border-[#b4fbff38] dark:hover:shadow-2xl dark:hover:shadow-[#62818263] lg:inline-flex">
          <div className="bg-transparent p-6 lg:p-10">
            <h1 className="text-balance from-white from-30% to-white/40 py-6 text-center text-5xl font-medium leading-none tracking-tighter text-black dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
            Mobile Technologies
            </h1>
            <p className="text-justify font-mono text-lg font-medium text-gray-600 dark:text-gray-400">
            We leverage cutting-edge mobile technologies to create custom apps that drive business growth and success.
            </p><div className="flex flex-row justify-items-start	gap-3 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-252 343.9 106.1 106.1" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" ><path fill="#F05138" d="M-145.9 373.3v-3.2c-.1-2.3-.2-4.7-.6-7-.4-2.3-1.1-4.5-2.2-6.6-1.1-2.1-2.4-4-4.1-5.6-1.7-1.7-3.6-3-5.6-4.1-2.1-1.1-4.3-1.8-6.6-2.2-2.3-.4-4.6-.6-7-.6h-53.7c-.6 0-1.2 0-1.7.1-1.7.1-3.5.2-5.2.5-1.7.3-3.4.8-5 1.4-.5.2-1.1.5-1.6.7-1.6.8-3 1.8-4.4 2.9-.4.4-.9.8-1.3 1.2-1.7 1.7-3 3.6-4.1 5.6-1.1 2.1-1.8 4.3-2.2 6.6-.4 2.3-.5 4.6-.6 7v53.7c.1 2.3.2 4.7.6 7 .4 2.3 1.1 4.5 2.2 6.6 1.1 2.1 2.4 4 4.1 5.6 1.7 1.7 3.6 3 5.6 4.1 2.1 1.1 4.3 1.8 6.6 2.2 2.3.4 4.6.6 7 .6h53.7c2.3-.1 4.7-.2 7-.6 2.3-.4 4.5-1.1 6.6-2.2 2.1-1.1 4-2.4 5.6-4.1 1.7-1.7 3-3.6 4.1-5.6 1.1-2.1 1.8-4.3 2.2-6.6.4-2.3.6-4.6.6-7v-3.2V377v-3.7z"/><path fill="#FFF" d="M-168 409.4l.3-1.2c4.4-17.5-6.3-38.3-24.5-49.2 8 10.8 11.5 23.9 8.4 35.3-.3 1-.6 2-1 3-.4-.3-.9-.6-1.6-.9 0 0-18.1-11.2-37.7-30.9-.5-.5 10.5 15.7 22.9 28.8-5.9-3.3-22.2-15.2-32.6-24.6 1.3 2.1 2.8 4.2 4.4 6.1 8.6 11 19.9 24.5 33.4 34.9-9.5 5.8-22.9 6.3-36.2 0-3.3-1.5-6.4-3.4-9.3-5.5 5.6 9 14.3 16.8 24.9 21.4 12.6 5.4 25.2 5.1 34.5.1 0 0 .1 0 .1-.1.4-.2.8-.5 1.2-.7 4.5-2.3 13.3-4.6 18.1 4.6 1.4 2.1 3.9-9.9-5.3-21.1z"/></svg>

          <svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 256 256" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10"  version="1.1" preserveAspectRatio="xMidYMid">
    <defs>
        <linearGradient x1="26.599%" y1="146.559136%" x2="73.8446667%" y2="52.3813953%" id="linearGradient-1">
            <stop stop-color="#0095D5" offset="9.677%">

</stop>
            <stop stop-color="#238AD9" offset="30.07%">

</stop>
            <stop stop-color="#557BDE" offset="62.11%">

</stop>
            <stop stop-color="#7472E2" offset="86.43%">

</stop>
            <stop stop-color="#806EE3" offset="100%">

</stop>
        </linearGradient>
        <linearGradient x1="13.9840532%" y1="37.1049231%" x2="68.682392%" y2="-13.5538462%" id="linearGradient-2">
            <stop stop-color="#0095D5" offset="11.83%">

</stop>
            <stop stop-color="#3C83DC" offset="41.78%">

</stop>
            <stop stop-color="#6D74E1" offset="69.62%">

</stop>
            <stop stop-color="#806EE3" offset="83.33%">

</stop>
        </linearGradient>
        <linearGradient x1="-16.8361667%" y1="91.9396667%" x2="76.2191667%" y2="-1.11566667%" id="linearGradient-3">
            <stop stop-color="#C757BC" offset="10.75%">

</stop>
            <stop stop-color="#D0609A" offset="21.38%">

</stop>
            <stop stop-color="#E1725C" offset="42.54%">

</stop>
            <stop stop-color="#EE7E2F" offset="60.48%">

</stop>
            <stop stop-color="#F58613" offset="74.3%">

</stop>
            <stop stop-color="#F88909" offset="82.32%">

</stop>
        </linearGradient>
    </defs>
    <g>
				<polygon fill="url(#linearGradient-1)" points="0 256 128.426667 127.573333 256 256">

</polygon>
				<polygon fill="url(#linearGradient-2)" points="0 0 128.426667 0 0 138.666667">

</polygon>
				<polygon fill="url(#linearGradient-3)" points="128.426667 0 0 135.253333 0 256 128.426667 127.573333 256 0">

</polygon>
    </g>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -169.5 512 512" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10"  version="1.1" preserveAspectRatio="xMidYMid">
    <g fill="#3880FF">
        <path d="M86.5106979,0.000800355684 C100.536693,0.000800355684 113.743651,3.27775181 126.131574,9.62528231 L126.131574,9.62528231 L127.769646,10.4443185 L126.336333,11.5704933 C122.855429,14.3347404 120.091182,17.9180238 118.35073,22.0132047 L118.35073,22.0132047 L117.838832,23.1393795 L116.815037,22.6274819 C107.293741,18.1227828 97.1581684,15.7680538 86.6130774,15.7680538 C47.6064787,15.7680538 15.9712058,47.5057062 15.9712058,86.4099254 C15.9712058,125.314145 47.5040992,157.051797 86.5106979,157.051797 C125.517297,157.051797 157.152569,125.314145 157.152569,86.4099254 C157.152569,77.0933887 155.412118,67.981611 151.726455,59.381731 L151.726455,59.381731 L151.214557,58.2555563 L152.340732,57.7436586 C156.538292,56.2079658 160.223955,53.6484777 163.192961,50.3723329 L163.192961,50.3723329 L164.319136,48.9390196 L165.035793,50.5770919 C170.257149,61.9412191 172.816637,74.022003 172.816637,86.2051663 C172.816637,133.811645 134.014797,172.613485 86.4083183,172.613485 C38.8018396,172.613485 0,133.811645 0,86.2051663 C0,38.5986876 38.8018396,-0.203152008 86.5106979,0.000800355684 Z M86.5106979,47.0961881 C108.112777,47.0961881 125.824435,64.7054663 125.926815,86.5123049 C125.926815,108.319144 108.317536,125.928422 86.5106979,125.928422 C64.7038592,125.928422 47.0945811,108.319144 47.0945811,86.5123049 C47.0945811,64.7054663 64.8062388,47.0961881 86.5106979,47.0961881 Z M142.921816,14.5394995 C152.873322,14.5394995 160.940612,22.6067893 160.940612,32.5582957 C160.940612,42.5098021 152.873322,50.5770919 142.921816,50.5770919 C132.970309,50.5770919 124.903019,42.5098021 124.903019,32.5582957 C124.903019,22.6067893 132.970309,14.5394995 142.921816,14.5394995 Z">

</path>
        <path d="M480.569486,46.9938086 C487.326535,46.9938086 493.264547,49.2461581 497.769246,51.9080258 C503.809638,55.4913091 508.211958,59.0745924 512,64.9102253 L512,64.9102253 L498.895421,73.8172439 C498.895421,73.8172439 491.728854,62.5554963 480.057588,62.5554963 C466.236353,62.5554963 457.226955,73.2029668 457.226955,86.5123049 C457.226955,99.821643 466.338732,110.469114 480.057588,110.469114 C491.728854,110.469114 498.793041,99.0026068 498.793041,99.1049864 L498.793041,99.1049864 L512,107.909625 C508.211958,113.745258 503.809638,117.226162 497.769246,120.911825 C493.264547,123.573693 487.224155,125.826042 480.569486,125.826042 C457.738852,125.826042 440.334333,108.626282 440.231954,86.4099254 C440.334333,64.1935686 457.738852,46.9938086 480.569486,46.9938086 Z M283.079384,47.0961881 C302.019596,47.0961881 322.495501,60.5079058 322.393504,86.5123049 C322.393504,109.342939 304.886223,125.826042 283.386523,125.826042 C259.634473,125.826042 243.663267,107.500107 243.663267,86.1027868 C243.663267,65.1149844 260.146371,47.0961881 283.079384,47.0961881 Z M235.575285,48.83664 L235.575285,124.08559 L217.35173,124.08559 L217.35173,48.83664 L235.575285,48.83664 Z M432.246351,48.83664 L432.246351,124.08559 L414.022795,124.08559 L414.022795,48.83664 L432.246351,48.83664 Z M371.944811,47.0961881 C394.980204,47.0961881 403.580084,62.9650144 403.887223,82.7242625 L403.887223,82.7242625 L403.887223,123.983211 L385.663667,123.983211 L385.663667,80.8814311 C385.663667,70.8482377 378.804239,62.3507372 370.10198,62.3507372 C361.092581,62.3507372 349.011798,69.6196834 349.011798,78.526702 L349.011798,78.526702 L349.011798,124.08559 L330.788242,124.08559 L330.788242,48.83664 L345.940412,48.83664 L347.066587,56.9246224 L347.153104,56.8430704 C349.471664,54.678802 359.31144,47.0961881 371.944811,47.0961881 Z M283.284143,62.5554963 C270.589082,62.5554963 260.863027,72.6910691 260.863027,86.4099254 C260.863027,100.231161 270.691462,110.366734 283.181764,110.366734 C294.64827,110.366734 305.295741,100.947818 305.295741,86.5123049 C305.295741,71.7696534 294.545891,62.5554963 283.284143,62.5554963 Z">

</path>
    </g>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -14 256 256" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" version="1.1" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M73.8663206,0 C66.952309,0.0146617449 60.184271,3.93931348 56.7037125,9.9265042 L2.56976851,103.963223 C-0.856589505,109.966444 -0.856589505,117.813085 2.56976851,123.816305 L56.7037125,217.853023 C60.1846366,223.840262 66.952309,227.765965 73.8663206,227.779527 L182.133826,227.779527 C189.047838,227.764865 195.815506,223.840262 199.296431,217.853023 L253.430366,123.816305 C256.856721,117.813085 256.856368,109.966444 253.430366,103.963223 L199.296431,9.9265042 C195.815506,3.93931348 189.047838,0.0135621543 182.133826,0 L73.8663206,0 L73.8663206,0 Z M74.8488536,55.0126186 C74.9975819,54.9979569 75.1535758,54.9979569 75.3027674,55.0126186 L93.9772836,55.0126186 C94.8039203,55.0297239 95.6057607,55.5074519 96.018567,56.2249969 L127.69764,112.677374 C127.857095,112.956484 127.95984,113.267458 127.998827,113.586646 C128.037837,113.267385 128.140483,112.956386 128.300014,112.677374 L159.903262,56.2249969 C160.329167,55.4857038 161.168569,55.0053365 162.020021,55.0126186 L180.694546,55.0126186 C182.348195,55.0272804 183.586572,57.1101012 182.811656,58.5740505 L151.889065,113.889776 L182.811656,169.129724 C183.659919,170.602081 182.39107,172.781473 180.694546,172.766909 L162.020021,172.766909 C161.153689,172.759578 160.309324,172.245978 159.903262,171.478754 L128.300014,115.026377 C128.140556,114.747267 128.037813,114.436267 127.998827,114.117106 C127.959816,114.43634 127.857168,114.74739 127.69764,115.026377 L96.018567,171.478754 C95.624559,172.224278 94.8184519,172.732966 93.9772836,172.766909 L75.3027674,172.766909 C73.6062411,172.78157 72.3377353,170.602081 73.1859985,169.129724 L104.10858,113.889776 L73.1859985,58.5740505 C72.4447465,57.2383669 73.3491119,55.297716 74.8488536,55.0126186 L74.8488536,55.0126186 L74.8488536,55.0126186 Z" fill="#3498DB">

</path>
    </g>
</svg>



          </div>
          </div>
          
          <div className="bg-background relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  lg:min-w-[32rem] ">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span>

            {/* Inner Circles */}
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={60}
            >
              <Icons.native />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={60}
            >
              <Icons.flutter />
            </OrbitingCircles>
            {/* <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={15}
              radius={60}
            >
              <Icons.express />
            </OrbitingCircles> */}
            {/* <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={5}
              radius={60}
            >
              <Icons.react />
            </OrbitingCircles> */}
            {/* Outer Circles (reverse) */}
            <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={140}
            >
              <Icons.ios />
            </OrbitingCircles>
            <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={140}
            >
              <Icons.android />
            </OrbitingCircles>
            {/* <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={15}
              radius={140}
            >
              <Icons.flutter />
            </OrbitingCircles>
            <OrbitingCircles
              reverse
              className="h-[45px] w-[45px] border-none bg-transparent"
              duration={20}
              delay={5}
              radius={140}
            >
              <Icons.native />
            </OrbitingCircles> */}

            {/* 3rd round  */}
            {/* <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={240}
      >
        <Icons.node />
      </OrbitingCircles>
      <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={240}
      >
        <Icons.mongodb />
      </OrbitingCircles>
<OrbitingCircles

        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={240}
      >
        <Icons.express />
      </OrbitingCircles>
      <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={25}
        radius={240}
      >
        <Icons.react />
      </OrbitingCircles> */}
          </div>
          <div className="bg-transparent p-6 lg:hidden lg:p-10">
            <h1 className="text-balance from-white from-30% to-white/40 py-6 text-center text-5xl font-medium leading-none tracking-tighter text-black dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
            Mobile Technologies
            </h1>
            <p className="text-justify font-mono text-lg font-medium text-gray-600 dark:text-gray-400">
            Our expertise lies in developing, deploying, and scaling custom mobile apps using the latest technology stack, ensuring your business stays ahead in the mobile realm.
            </p>
            
          </div>
        </div>
        <div className="m-2 items-center justify-center rounded-sm border pr-4 align-middle dark:border-[#b4fbff38] dark:hover:shadow-2xl dark:hover:shadow-[#62818263] lg:inline-flex">
          <div className="bg-background relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  lg:min-w-[32rem] ">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span>

            {/* Inner Circles */}
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={60}
            >
              <Icons.woo />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={60}
            >
              <Icons.wix />
            </OrbitingCircles>
            {/* <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={15}
              radius={60}
            >
              <Icons.express />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={5}
              radius={60}
            >
              <Icons.react />
            </OrbitingCircles> */}
            {/* Outer Circles (reverse) */}
            {/* <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={140}
            >
              <Icons.wix />
            </OrbitingCircles>
            <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={140}
            >
              <Icons.woo />
            </OrbitingCircles> */}
            <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={15}
              radius={140}
            >
              <Icons.magento />
            </OrbitingCircles>
            <OrbitingCircles
              reverse
              className="h-[45px] w-[45px] border-none bg-transparent"
              duration={20}
              delay={5}
              radius={140}
            >
              <Icons.shopify />
            </OrbitingCircles>

            {/* 3rd round  */}
            {/* <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={240}
      >
        <Icons.node />
      </OrbitingCircles>
      <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={240}
      >
        <Icons.mongodb />
      </OrbitingCircles>
<OrbitingCircles

        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={240}
      >
        <Icons.express />
      </OrbitingCircles>
      <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={25}
        radius={240}
      >
        <Icons.react />
      </OrbitingCircles> */}
          </div>
          <div className="bg-transparent p-6 lg:p-10">
            <h1 className="text-balance from-white from-30% to-white/40 py-6 text-center text-5xl font-medium leading-none tracking-tighter text-black dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
              eCommerce
            </h1>
            <p className="text-justify font-mono text-lg font-medium text-gray-600 dark:text-gray-400">
            Leveraging our expertise in both mobile and web development, we create intuitive eCommerce solutions to drive performance and facilitate seamless scaling for businesses.

            <div className="flex flex-row justify-items-start	gap-3 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1494" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" viewBox="0 0 256 153" preserveAspectRatio="xMidYMid"><path d="M23.759 0h208.378C245.325 0 256 10.675 256 23.863v79.541c0 13.188-10.675 23.863-23.863 23.863H157.41l10.257 25.118-45.109-25.118H23.863c-13.187 0-23.862-10.675-23.862-23.863V23.863C-.104 10.78 10.57 0 23.759 0z" fill="#7f54b3"/><path d="M14.578 21.75c1.457-1.978 3.642-3.018 6.556-3.226 5.308-.417 8.326 2.08 9.054 7.492 3.226 21.75 6.764 40.17 10.51 55.259l22.79-43.395c2.082-3.955 4.684-6.036 7.806-6.244 4.579-.312 7.388 2.601 8.533 8.741 2.602 13.84 5.932 25.6 9.886 35.59 2.706-26.432 7.285-45.476 13.737-57.235 1.56-2.914 3.85-4.371 6.868-4.58 2.394-.207 4.579.521 6.556 2.082 1.977 1.561 3.018 3.538 3.226 5.932.104 1.873-.208 3.434-1.04 4.995-4.059 7.493-7.39 20.085-10.095 37.567-2.601 16.963-3.538 30.18-2.914 39.65.209 2.6-.208 4.89-1.248 6.868-1.25 2.289-3.122 3.538-5.516 3.746-2.706.208-5.515-1.04-8.221-3.85-9.678-9.887-17.379-24.664-22.998-44.332-6.765 13.32-11.76 23.31-14.986 29.97-6.14 11.76-11.343 17.796-15.714 18.108-2.81.208-5.203-2.186-7.284-7.18-5.307-13.633-11.031-39.962-17.17-78.986-.417-2.706.207-5.1 1.664-6.972zm223.636 16.338c-3.746-6.556-9.262-10.51-16.65-12.072-1.978-.416-3.85-.624-5.62-.624-9.99 0-18.107 5.203-24.455 15.61-5.412 8.845-8.117 18.627-8.117 29.346 0 8.013 1.665 14.881 4.995 20.605 3.746 6.556 9.262 10.51 16.65 12.071 1.977.417 3.85.625 5.62.625 10.094 0 18.211-5.203 24.455-15.61 5.411-8.95 8.117-18.732 8.117-29.45.104-8.117-1.665-14.882-4.995-20.501zm-13.112 28.826c-1.457 6.868-4.059 11.967-7.91 15.401-3.017 2.706-5.827 3.85-8.428 3.33-2.498-.52-4.58-2.705-6.14-6.764-1.25-3.226-1.873-6.452-1.873-9.47 0-2.601.208-5.203.728-7.596.937-4.267 2.706-8.43 5.515-12.384 3.435-5.1 7.077-7.18 10.823-6.452 2.498.52 4.58 2.706 6.14 6.764 1.249 3.226 1.873 6.452 1.873 9.47 0 2.706-.208 5.307-.728 7.7zm-52.033-28.826c-3.746-6.556-9.366-10.51-16.65-12.072-1.977-.416-3.85-.624-5.62-.624-9.99 0-18.107 5.203-24.455 15.61-5.411 8.845-8.117 18.627-8.117 29.346 0 8.013 1.665 14.881 4.995 20.605 3.746 6.556 9.262 10.51 16.65 12.071 1.978.417 3.85.625 5.62.625 10.094 0 18.211-5.203 24.455-15.61 5.412-8.95 8.117-18.732 8.117-29.45 0-8.117-1.665-14.882-4.995-20.501zm-13.216 28.826c-1.457 6.868-4.059 11.967-7.909 15.401-3.018 2.706-5.828 3.85-8.43 3.33-2.497-.52-4.578-2.705-6.14-6.764-1.248-3.226-1.872-6.452-1.872-9.47 0-2.601.208-5.203.728-7.596.937-4.267 2.706-8.43 5.516-12.384 3.434-5.1 7.076-7.18 10.822-6.452 2.498.52 4.58 2.706 6.14 6.764 1.25 3.226 1.873 6.452 1.873 9.47.105 2.706-.208 5.307-.728 7.7z" fill="#FFF"/></svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="30" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" viewBox="0 0 75 30" fill="none"><g fill="#00FFFF" clip-path="url(#Logo_svg__a)"><path d="M75 0h-4.142c-1.15 0-2.224.57-2.87 1.52l-5.54 8.174a.372.372 0 0 1-.615 0l-5.54-8.173A3.46 3.46 0 0 0 53.424 0h-4.143l9.87 14.56-9.815 14.477h4.143c1.149 0 2.223-.569 2.868-1.52l5.486-8.093a.372.372 0 0 1 .616 0l5.485 8.093a3.46 3.46 0 0 0 2.87 1.52h4.142L65.131 14.56zM40.758 2.97v26.067h1.98a2.97 2.97 0 0 0 2.97-2.97V0h-1.98a2.97 2.97 0 0 0-2.97 2.97M37.126 0h-1.762a4.15 4.15 0 0 0-4.051 3.233l-3.942 17.328-3.45-16.175c-.638-2.99-3.706-5.006-6.845-4.139-1.999.552-3.481 2.241-3.914 4.27L9.747 20.54 5.813 3.234A4.16 4.16 0 0 0 1.76 0H0l6.604 29.036h2.502a4.81 4.81 0 0 0 4.706-3.808l4.221-19.81a.54.54 0 0 1 .523-.424c.25 0 .471.178.523.423l4.226 19.812a4.81 4.81 0 0 0 4.706 3.807h2.51z"></path></g><defs><clipPath id="Logo_svg__a"><path fill="#ffffff" d="M0 0h75v29.037H0z"></path></clipPath></defs></svg>
    
          <svg xmlns="http://www.w3.org/2000/svg" width="256px" height="303px" viewBox="0 0 256 303" version="1.1" preserveAspectRatio="xMidYMid" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10">
    <g>
        <path d="M144.852,90.67 L144.852,262.862 L127.919,273.211 L110.973,262.807 L110.973,90.803 L67.095,117.819 L67.095,265.074 L127.919,302.291 L189.258,264.809 L189.258,117.725 L144.852,90.67 L144.852,90.67 Z M127.919,0 L0,77.502 L0,224.776 L33.223,244.348 L33.223,97.06 L127.945,39.464 L222.755,96.976 L223.146,97.199 L223.104,244.128 L256,224.776 L256,77.502 L127.919,0 L127.919,0 Z" fill="#EC6737"/>
    </g>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="2192" height="2500" viewBox="0 0 256 292" preserveAspectRatio="xMidYMid" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10">
    <g>
        <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95BF46"/>
        <path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"/>
        <path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF"/>
    </g>
</svg>

<svg fill="#04B6F0" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" stroke="#04B6F0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 1 5.25 C 3.933594 10.816406 9.117188 11.683594 15.40625 11.8125 C 19.117188 11.890625 27.28125 11.574219 27.28125 13.5625 C 27.28125 15.054688 21.84375 19.730469 21.84375 20.6875 C 21.84375 20.6875 25.613281 17.5 27.71875 15.625 C 29.824219 13.75 31 12.640625 31 11.53125 C 31 9.273438 22.269531 9.6875 15.21875 9.6875 C 8.167969 9.6875 4.3125 8.351563 1 5.25 Z M 8.875 22.53125 C 7.707031 22.53125 6.75 23.457031 6.75 24.625 C 6.75 25.792969 7.707031 26.75 8.875 26.75 C 10.042969 26.75 10.96875 25.792969 10.96875 24.625 C 10.96875 23.457031 10.042969 22.53125 8.875 22.53125 Z M 18.625 22.53125 C 17.457031 22.53125 16.53125 23.457031 16.53125 24.625 C 16.53125 25.792969 17.457031 26.75 18.625 26.75 C 19.792969 26.75 20.75 25.792969 20.75 24.625 C 20.75 23.457031 19.792969 22.53125 18.625 22.53125 Z"></path></g></svg>

<svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 256 256" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" version="1.1" preserveAspectRatio="xMidYMid">
	<g>
		<path d="M82.979,196.416 C85.023,195.506 87.094,194.669 89.184,193.884 C91.544,192.997 93.923,192.163 96.334,191.437 C99.335,190.533 102.361,189.715 105.428,189.064 C109.563,188.186 113.747,187.536 117.962,187.127 C115.598,194.56 112.985,201.951 110.154,209.295 C110.275,210.717 110.34,212.148 110.378,213.583 C116.08,212.458 121.968,211.856 128,211.856 C134.031,211.856 139.92,212.458 145.622,213.583 C145.66,212.148 145.725,210.717 145.846,209.295 C143.014,201.951 140.402,194.56 138.038,187.127 C142.253,187.536 146.437,188.186 150.572,189.064 C153.638,189.715 156.664,190.533 159.665,191.437 C162.077,192.163 164.456,192.997 166.816,193.884 C168.907,194.67 170.979,195.507 173.023,196.417 C187.527,202.876 200.749,212.456 211.593,224.888 C238.773,201.417 256,166.731 256,128 C256,57.308 198.692,0 128,0 C57.308,0 0,57.308 0,128 C0,166.731 17.227,201.416 44.407,224.888 C55.251,212.456 68.475,202.875 82.979,196.416" fill="#A5DBE8">

</path>
		<path d="M173.023,196.417 L180.969,223.74 L183.223,223.846 C184.686,223.846 185.715,224.231 185.715,225.694 C185.715,228.126 185.841,230.859 186.074,233.245 C188.054,234.926 190.465,236.822 192.293,238.664 C199.16,234.666 205.615,230.05 211.593,224.888 C200.749,212.456 187.527,202.876 173.023,196.417" fill="#525353">

</path>
		<path d="M157.486,196.144 L166.816,193.884 C164.456,192.997 162.077,192.163 159.665,191.437 C156.664,190.533 153.638,189.715 150.572,189.064 C146.437,188.186 142.253,187.536 138.038,187.127 C140.402,194.56 143.014,201.951 145.846,209.295 C145.725,210.717 145.66,212.148 145.622,213.583 C152.233,214.887 158.733,217.153 164.743,219.811 L157.486,196.144" fill="#525353">

</path>
		<path d="M63.707,238.664 C65.193,239.53 66.694,240.375 68.22,241.182 C68.754,238.617 69.608,235.063 69.866,232.424 C67.886,234.105 65.535,236.822 63.707,238.664" fill="#000000">

</path>
		<path d="M164.587,219.575 C158.578,216.917 152.233,214.887 145.622,213.583 C139.92,212.458 134.031,211.856 128,211.856 C121.968,211.856 116.08,212.458 110.378,213.583 C103.768,214.886 96.871,216.863 90.863,219.52 L90.224,223.501 L165.778,223.501 L164.587,219.575" fill="#000000">

</path>
		<path d="M69.632,233.182 C69.866,230.796 70.035,228.669 70.035,226.236 C70.035,224.774 71.038,223.837 72.501,223.837 L74.9,223.753 L82.979,196.416 C68.475,202.875 55.251,212.456 44.407,224.888 C50.385,230.05 56.84,234.666 63.707,238.664 C65.535,236.822 67.439,235.055 69.419,233.374" fill="#525353">

</path>
		<path d="M187.051,238.045 C187.569,240.645 187.686,241.163 187.78,241.182 C189.306,240.375 190.806,239.53 192.293,238.664 C190.465,236.822 188.502,234.996 186.521,233.315 L187.051,238.045" fill="#000000">

</path>
		<path d="M164.587,219.575 L165.778,223.501 L181.232,223.501 L173.023,196.417 C170.979,195.507 168.907,194.67 166.816,193.884 L157.486,196.144 L164.587,219.575" fill="#AA9678">

</path>
		<path d="M75.039,228.971 C75.12,228.914 75.202,228.857 75.282,228.799 L75.05,228.799 C75.048,228.856 75.042,228.914 75.039,228.971" fill="#C4B6A1">

</path>
		<path d="M180.95,228.799 L180.717,228.799 C180.798,228.857 180.88,228.914 180.96,228.971 C180.958,228.914 180.952,228.856 180.95,228.799" fill="#AA9678">

</path>
		<path d="M180.684,228.404 L127.89,228.464 L128,256 C147.648,256 166.256,251.561 182.893,243.649 C181.807,238.877 181.698,233.737 181.521,228.735 C181.441,228.677 180.684,228.404 180.684,228.404" fill="#AA9678">

</path>
		<path d="M127.915,228.578 C127.915,228.578 74.83,228.511 74.749,228.568 C74.573,233.571 73.541,239.507 73.107,243.649 C89.744,251.561 108.352,256 128,256 L128.03,228.667 L127.915,228.578" fill="#C4B6A1">

</path>
		<path d="M128,226.15 L128.001,226.15 L128.001,228.799 L128,228.799 L128,226.15 Z" fill="#786453">

</path>
		<path d="M164.649,205.236 C164.263,204.792 163.865,204.317 163.452,203.776 C163.866,204.317 164.263,204.792 164.649,205.236" fill="#525353">

</path>
		<path d="M167.594,208.16 C167.594,208.16 167.603,208.189 167.621,208.243 C167.603,208.189 167.594,208.16 167.594,208.16 C167.594,208.16 166.296,207.131 164.649,205.236 C166.296,207.131 167.594,208.16 167.594,208.16" fill="#AA9678">

</path>
		<path d="M206.706,92.348 L206.706,92.354 L206.706,92.348" fill="#FFFFFF">

</path>
		<path d="M211.857,129.201 C211.857,129.188 211.858,129.176 211.858,129.163 C211.858,129.176 211.857,129.188 211.857,129.201" fill="#FFFFFF">

</path>
		<path d="M211.858,129.163 C211.858,129.151 211.857,129.141 211.857,129.128 C211.857,129.14 211.858,129.151 211.858,129.163" fill="#BBBCBD">

</path>
		<path d="M211.714,127.169 C211.718,127.203 211.728,127.233 211.732,127.267 C211.735,127.288 211.741,127.307 211.744,127.327 L211.744,127.335 C211.805,127.824 211.828,128.335 211.839,128.85 C211.841,128.945 211.857,129.034 211.857,129.128 C211.857,129.141 211.858,129.151 211.858,129.163 C211.858,129.176 211.857,129.188 211.857,129.201 C211.856,129.303 211.839,129.398 211.838,129.499 C211.826,130.004 211.804,130.505 211.745,130.985 L211.745,130.992 C211.741,131.017 211.735,131.04 211.731,131.065 C211.727,131.104 211.715,131.139 211.71,131.177 C211.638,131.701 211.546,132.209 211.423,132.692 C211.422,132.695 211.422,132.697 211.421,132.699 L211.421,132.7 L211.439,132.68 C211.441,132.672 211.444,132.665 211.446,132.657 L211.446,132.658 L214.796,129.151 L211.419,125.616 C211.419,125.618 211.419,125.621 211.42,125.623 C211.546,126.116 211.642,126.634 211.714,127.169" fill="#676A6A">

</path>
		<path d="M211.71,131.177 C211.719,131.111 211.736,131.052 211.745,130.985 C211.804,130.505 211.826,130.004 211.838,129.499 C211.839,129.385 211.857,129.278 211.857,129.163 C211.857,129.056 211.841,128.956 211.839,128.85 C211.828,128.335 211.805,127.824 211.744,127.335 C211.736,127.277 211.721,127.226 211.714,127.169 C211.642,126.634 211.546,126.116 211.42,125.623 C211.376,125.451 211.315,125.298 211.264,125.132 C210.961,124.13 210.548,123.245 210.058,122.51 C209.992,122.412 209.925,122.317 209.857,122.225 C209.722,122.044 209.587,121.868 209.444,121.71 C209.232,121.481 209.013,121.27 208.782,121.095 C208.694,121.028 208.601,120.981 208.511,120.923 C208.311,120.794 208.107,120.681 207.896,120.595 C207.806,120.559 207.715,120.523 207.623,120.494 C207.325,120.402 207.02,120.336 206.706,120.336 C206.392,120.336 206.088,120.402 205.789,120.494 C205.697,120.523 205.606,120.559 205.516,120.596 C205.305,120.681 205.101,120.794 204.9,120.923 C204.812,120.981 204.718,121.027 204.631,121.094 C204.4,121.27 204.18,121.481 203.968,121.71 C203.825,121.868 203.69,122.044 203.557,122.223 C203.487,122.317 203.42,122.412 203.354,122.511 C202.864,123.246 202.45,124.131 202.148,125.133 C202.136,125.173 202.122,125.212 202.11,125.253 C201.976,125.713 201.872,126.197 201.785,126.694 C201.759,126.846 201.724,126.992 201.703,127.148 C201.623,127.704 201.582,128.284 201.572,128.878 C201.571,128.96 201.558,129.038 201.558,129.12 L201.578,129.12 C201.578,133.996 203.885,137.948 206.73,137.948 C207.22,137.948 207.691,137.82 208.14,137.601 C208.212,137.565 208.283,137.528 208.354,137.487 C208.54,137.38 208.723,137.263 208.898,137.122 C208.995,137.044 209.086,136.95 209.179,136.862 C209.406,136.65 209.622,136.41 209.827,136.143 C209.969,135.956 210.109,135.769 210.239,135.56 C210.322,135.427 210.398,135.283 210.475,135.141 C210.619,134.875 210.755,134.598 210.878,134.304 C210.924,134.198 210.971,134.095 211.013,133.986 C211.17,133.577 211.307,133.145 211.423,132.692 C211.546,132.209 211.638,131.701 211.71,131.177 L211.71,131.177 Z M206.891,127.988 C205.824,127.988 204.959,126.505 204.959,124.677 C204.959,122.85 205.824,121.367 206.891,121.367 C207.958,121.367 208.822,122.85 208.822,124.677 C208.822,126.505 207.958,127.988 206.891,127.988 L206.891,127.988 Z" fill="#000000">

</path>
		<path d="M206.891,121.367 C205.824,121.367 204.959,122.85 204.959,124.677 C204.959,126.505 205.824,127.988 206.891,127.988 C207.958,127.988 208.822,126.505 208.822,124.677 C208.822,122.85 207.958,121.367 206.891,121.367" fill="#FFFFFF">

</path>
		<path d="M202.148,125.133 L202.148,125.133 C202.45,124.131 202.864,123.246 203.354,122.511 C203.42,122.411 203.487,122.318 203.557,122.223 C203.69,122.044 203.825,121.868 203.968,121.71 C204.18,121.479 204.4,121.271 204.631,121.094 C204.718,121.027 204.812,120.981 204.9,120.923 C205.1,120.792 205.305,120.683 205.516,120.596 C205.606,120.559 205.697,120.523 205.789,120.494 C206.087,120.4 206.392,120.336 206.706,120.336 C207.02,120.336 207.325,120.4 207.623,120.494 C207.715,120.523 207.806,120.559 207.896,120.595 C208.107,120.683 208.311,120.792 208.511,120.923 C208.601,120.981 208.694,121.028 208.782,121.095 C209.012,121.271 209.232,121.479 209.444,121.71 C209.587,121.868 209.722,122.044 209.857,122.225 C209.925,122.318 209.992,122.411 210.058,122.51 C210.548,123.245 210.961,124.13 211.264,125.132 L211.264,125.134 L206.706,104.257 L202.147,125.133 L202.148,125.133" fill="#909393">

</path>
		<path d="M146.299,128.968 C146.293,128.548 146.266,128.133 146.219,127.725 C146.218,127.72 146.216,127.714 146.216,127.708 C146.168,127.306 146.101,126.909 146.015,126.52 C146.012,126.51 146.009,126.501 146.007,126.49 C145.921,126.105 145.816,125.727 145.694,125.356 C145.691,125.348 145.687,125.34 145.684,125.331 C145.561,124.96 145.421,124.597 145.262,124.243 C145.26,124.236 145.255,124.229 145.252,124.221 C145.093,123.866 144.917,123.519 144.725,123.183 C144.139,122.156 143.408,121.225 142.558,120.415 C141.479,119.388 140.21,118.557 138.811,117.981 C138.8,117.977 138.787,117.973 138.776,117.968 C138.086,117.687 137.365,117.467 136.618,117.317 C136.599,117.314 136.581,117.313 136.562,117.309 C135.813,117.162 135.041,117.082 134.249,117.082 C133.47,117.082 132.713,117.162 131.976,117.303 C131.95,117.308 131.924,117.31 131.898,117.315 C131.165,117.461 130.458,117.675 129.779,117.947 C129.762,117.954 129.743,117.96 129.725,117.968 C129.037,118.248 128.38,118.589 127.763,118.986 C127.76,118.988 127.758,118.989 127.756,118.989 C127.133,119.391 126.548,119.848 126.01,120.353 L125.997,120.394 L125.952,120.404 C125.093,121.221 124.354,122.163 123.763,123.198 C123.757,123.21 123.749,123.222 123.741,123.235 C123.561,123.552 123.398,123.882 123.248,124.218 C123.232,124.254 123.212,124.288 123.197,124.324 C123.06,124.635 122.942,124.957 122.832,125.281 C122.811,125.345 122.783,125.405 122.763,125.468 C122.667,125.771 122.589,126.082 122.515,126.393 C122.496,126.483 122.467,126.569 122.448,126.658 C122.384,126.966 122.34,127.281 122.299,127.597 C122.287,127.694 122.266,127.787 122.256,127.884 C122.213,128.297 122.189,128.716 122.189,129.142 C122.189,129.94 122.271,130.718 122.42,131.472 C122.422,131.487 122.423,131.504 122.427,131.52 C122.578,132.273 122.8,132.999 123.085,133.694 C123.089,133.704 123.091,133.714 123.096,133.723 C123.676,135.129 124.515,136.402 125.552,137.483 C126.372,138.338 127.316,139.071 128.354,139.657 C128.359,139.66 128.364,139.663 128.369,139.666 C128.693,139.848 129.028,140.012 129.369,140.164 C129.397,140.176 129.424,140.192 129.453,140.204 C129.769,140.342 130.096,140.461 130.425,140.572 C130.481,140.591 130.535,140.615 130.591,140.633 C130.895,140.73 131.209,140.808 131.523,140.88 C131.608,140.9 131.69,140.928 131.776,140.946 C132.081,141.009 132.395,141.052 132.711,141.093 C132.806,141.104 132.9,141.126 132.997,141.136 C133.408,141.179 133.826,141.202 134.249,141.202 C135.914,141.202 137.5,140.864 138.943,140.253 C139.664,139.949 140.35,139.576 140.991,139.142 C142.275,138.275 143.382,137.167 144.249,135.885 C144.682,135.243 145.056,134.558 145.361,133.836 C145.971,132.393 146.309,130.807 146.309,129.142 C146.309,129.113 146.305,129.086 146.305,129.059 C146.304,129.028 146.3,128.999 146.299,128.968 L146.299,128.968 Z M134.249,127.555 C131.747,127.555 129.719,125.526 129.719,123.024 C129.719,120.522 131.747,118.494 134.249,118.494 C136.751,118.494 138.779,120.522 138.779,123.024 C138.779,125.526 136.751,127.555 134.249,127.555 L134.249,127.555 Z" fill="#000000">

</path>
		<path d="M134.249,118.494 C131.747,118.494 129.719,120.522 129.719,123.024 C129.719,125.526 131.747,127.555 134.249,127.555 C136.751,127.555 138.779,125.526 138.779,123.024 C138.779,120.522 136.751,118.494 134.249,118.494" fill="#FFFFFF">

</path>
		<path d="M125.952,120.404 L125.952,120.404 L125.997,120.394 L126.01,120.353 L134.316,94.951 L134.316,89.006 C134.316,88.962 134.315,88.939 134.315,88.939 C129.689,87.99 124.933,87.469 120.065,87.469 C118.44,87.469 116.828,87.538 115.226,87.647 C114.993,87.663 114.759,87.677 114.525,87.695 C106.188,88.328 97.978,90.501 90.376,93.971 C83.857,96.948 77.8,100.869 72.355,105.518 L72.355,105.519 C72.353,105.522 72.349,105.524 72.346,105.527 C70.884,106.769 69.483,108.08 68.115,109.424 C67.859,109.674 67.599,109.922 67.346,110.176 C66.058,111.474 64.813,112.815 63.609,114.195 C63.348,114.496 63.091,114.803 62.833,115.107 C61.624,116.534 60.448,117.988 59.331,119.49 C59.238,119.616 59.151,119.748 59.059,119.874 C57.994,121.323 56.98,122.81 56.003,124.322 C55.812,124.617 55.616,124.908 55.429,125.206 C54.639,126.459 53.904,127.746 53.174,129.036 L91.011,129.036 L125.952,120.404" fill="#BBBCBD">

</path>
		<path d="M157.895,117.546 C157.972,116.555 158.035,115.565 158.086,114.573 C158.155,113.231 158.202,111.887 158.228,110.544 C158.248,109.501 158.245,108.457 158.24,107.414 C158.24,107.113 158.247,106.812 158.244,106.51 C158.216,103.822 158.111,101.131 157.947,98.437 C157.939,98.432 157.932,98.427 157.924,98.422 C157.921,98.415 157.917,98.409 157.914,98.403 C157.904,98.396 157.865,98.374 157.829,98.354 C157.797,98.335 157.769,98.319 157.709,98.285 C157.215,98.001 156.001,97.306 154.911,96.687 C154.887,96.674 154.864,96.66 154.841,96.647 C154.565,96.491 154.299,96.34 154.058,96.204 C154.053,96.201 154.048,96.199 154.044,96.196 C153.836,96.079 153.662,95.982 153.501,95.892 C153.469,95.874 153.424,95.849 153.394,95.832 C153.217,95.734 153.08,95.66 152.999,95.617 C151.26,94.715 149.485,93.88 147.68,93.118 C143.377,91.301 137.581,89.708 134.316,88.939 L134.316,94.951 L142.549,120.394 L142.558,120.415 C143.408,121.225 144.139,122.156 144.725,123.182 L144.725,123.183 C144.917,123.519 145.093,123.866 145.252,124.221 C145.256,124.229 145.26,124.236 145.262,124.243 C145.421,124.597 145.561,124.96 145.684,125.331 C145.687,125.34 145.691,125.348 145.694,125.356 C145.816,125.727 145.921,126.105 146.007,126.49 C146.009,126.501 146.012,126.51 146.015,126.52 C146.101,126.909 146.168,127.306 146.216,127.708 C146.216,127.714 146.218,127.72 146.219,127.725 C146.266,128.133 146.293,128.548 146.299,128.968 L146.33,129.036 L156.411,129.036 C157.092,125.347 157.567,121.609 157.868,117.855 C157.875,117.752 157.887,117.649 157.895,117.546" fill="#E3DDDB">

</path>
		<path d="M171.079,108.55 C171.072,108.561 171.067,108.574 171.061,108.585 C171.067,108.574 171.073,108.562 171.079,108.551" fill="#FCB03F">

</path>
		<path d="M126.01,120.353 L126.01,120.353 C126.548,119.848 127.133,119.391 127.756,118.989 C127.758,118.989 127.76,118.988 127.763,118.986 C128.38,118.589 129.037,118.248 129.725,117.968 C129.743,117.96 129.762,117.955 129.779,117.947 C130.458,117.675 131.165,117.461 131.898,117.315 C131.924,117.31 131.949,117.308 131.976,117.303 C132.713,117.162 133.47,117.082 134.249,117.082 C135.041,117.082 135.813,117.162 136.562,117.309 C136.581,117.313 136.599,117.314 136.618,117.317 C137.365,117.467 138.086,117.687 138.776,117.968 C138.787,117.973 138.799,117.977 138.811,117.981 C140.21,118.557 141.479,119.388 142.558,120.415 L142.549,120.394 L134.316,94.951 L126.01,120.353" fill="#909393">

</path>
		<path d="M123.085,133.694 C122.8,132.999 122.578,132.273 122.427,131.52 C122.423,131.504 122.422,131.487 122.42,131.472 C122.271,130.718 122.189,129.94 122.189,129.142 C122.189,128.716 122.213,128.297 122.256,127.884 C122.266,127.787 122.287,127.694 122.299,127.597 C122.34,127.281 122.384,126.966 122.448,126.658 C122.467,126.569 122.496,126.483 122.515,126.393 C122.589,126.082 122.667,125.771 122.763,125.468 C122.784,125.405 122.81,125.345 122.832,125.281 C122.942,124.957 123.06,124.635 123.197,124.324 C123.212,124.288 123.232,124.254 123.248,124.218 C123.398,123.882 123.561,123.552 123.741,123.235 C123.749,123.222 123.757,123.21 123.763,123.198 C124.354,122.163 125.093,121.221 125.952,120.404 L91.011,129.036 L90.944,129.036 L125.552,137.483 C124.515,136.402 123.676,135.129 123.096,133.723 C123.091,133.714 123.089,133.704 123.085,133.694" fill="#676A6A">

</path>
		<path d="M201.703,127.148 C201.725,126.992 201.758,126.846 201.785,126.694 C201.872,126.197 201.976,125.713 202.11,125.253 C202.125,125.201 202.131,125.142 202.147,125.091 L206.706,104.215 L206.705,92.312 C202.98,89.235 198.991,87.553 194.838,87.553 C189.59,87.553 184.697,90.451 181.038,94.03 C177.034,97.947 173.94,102.875 171.438,107.848 C171.323,108.077 171.205,108.297 171.091,108.527 C171.862,109.195 172.625,109.872 173.378,110.561 C175.082,112.12 176.749,113.72 178.394,115.342 C179.16,116.098 179.912,116.87 180.666,117.639 C181.466,118.454 182.267,119.267 183.055,120.095 C184.068,121.16 185.072,122.234 186.066,123.319 C186.485,123.775 186.903,124.233 187.317,124.693 C188.516,126.02 189.709,127.353 190.882,128.704 L190.884,128.706 C191.081,128.912 191.219,129.06 191.272,129.12 L201.554,129.12 C201.554,129.037 201.571,128.961 201.572,128.878 C201.582,128.284 201.623,127.704 201.703,127.148" fill="#E3DDDB">

</path>
		<path d="M171.09,108.582 C171.086,108.571 171.082,108.56 171.079,108.551 C171.073,108.562 171.067,108.574 171.061,108.585 C171.067,108.591 171.097,108.621 171.106,108.629 C171.101,108.613 171.096,108.598 171.09,108.582" fill="#E3DDDB">

</path>
		<path d="M46.975,142.173 C47.005,142.096 47.037,142.02 47.067,141.943 C47.729,140.212 48.454,138.504 49.215,136.812 C49.428,136.341 49.647,135.874 49.867,135.406 C50.491,134.078 51.151,132.768 51.835,131.47 C52.113,130.942 52.385,130.412 52.673,129.889 C52.832,129.6 53.012,129.324 53.174,129.036 C53.904,127.746 54.639,126.459 55.429,125.206 C55.616,124.907 55.812,124.617 56.003,124.322 C56.98,122.81 57.994,121.323 59.059,119.874 C59.151,119.748 59.238,119.616 59.331,119.49 C60.448,117.988 61.624,116.534 62.833,115.107 C63.091,114.803 63.347,114.497 63.609,114.195 C64.813,112.815 66.058,111.474 67.346,110.176 C67.6,109.922 67.859,109.674 68.115,109.424 C69.483,108.08 70.884,106.769 72.346,105.527 C72.349,105.524 72.353,105.521 72.355,105.518 C78.106,86.254 96.676,74.416 117.497,74.416 C125.877,74.416 134.211,76.831 141.353,81.2 C148.679,85.681 153.674,90.059 157.552,97.712 C157.571,97.751 157.591,97.789 157.61,97.827 C157.708,98.021 157.818,98.207 157.914,98.403 C157.917,98.409 157.921,98.415 157.924,98.422 C157.932,98.427 157.939,98.432 157.947,98.437 C161.191,100.435 164.286,102.7 167.228,105.182 C168.209,106.01 169.173,106.861 170.12,107.736 C170.432,108.022 170.753,108.294 171.061,108.585 C171.067,108.573 171.072,108.561 171.079,108.55 C171.082,108.542 171.086,108.533 171.09,108.526 C171.196,108.309 171.3,108.088 171.407,107.874 C174.341,89.357 183.663,79.26 193.297,79.26 C200.559,79.26 205.838,83.59 209.825,95.246 L209.866,95.371 C209.869,95.375 209.873,95.38 209.876,95.385 C211.002,96.608 212.099,97.956 213.163,99.433 L213.161,99.432 C213.182,99.46 213.204,99.486 213.225,99.515 L213.224,99.514 L213.225,99.515 C213.282,99.684 213.331,99.858 213.386,100.027 L213.386,100.026 L213.236,99.419 C201.251,63.937 167.691,38.391 128.163,38.391 C78.583,38.391 38.391,78.583 38.391,128.163 C38.391,137.937 39.953,147.347 42.853,156.103 C42.856,156.087 42.861,156.07 42.865,156.052 C43.435,153.411 44.118,150.786 44.913,148.189 C45.533,146.165 46.222,144.157 46.975,142.173" fill="#525353">

</path>
		<path d="M214.577,129.155 L211.446,132.658 L211.446,132.657 C211.444,132.665 211.441,132.672 211.439,132.68 C211.32,133.141 211.174,133.571 211.013,133.986 C210.971,134.095 210.924,134.198 210.878,134.304 C210.754,134.598 210.62,134.876 210.475,135.141 C210.398,135.283 210.322,135.427 210.239,135.56 C210.109,135.768 209.969,135.957 209.827,136.143 C209.622,136.41 209.406,136.65 209.179,136.862 C209.086,136.949 208.996,137.044 208.898,137.122 C208.723,137.263 208.54,137.38 208.354,137.487 C208.282,137.527 208.212,137.565 208.14,137.601 C207.691,137.82 207.22,137.948 206.73,137.948 C203.885,137.948 201.578,133.996 201.578,129.12 L191.241,129.12 C191.244,129.123 191.245,129.126 191.247,129.128 C193.167,131.344 195.053,133.59 196.914,135.858 C196.936,135.886 196.958,135.913 196.981,135.94 C198.79,138.148 200.572,140.376 202.335,142.619 C202.422,142.729 202.508,142.838 202.595,142.948 C204.267,145.08 205.92,147.226 207.559,149.378 C207.718,149.585 207.878,149.793 208.037,150.002 C209.77,152.282 211.487,154.568 213.192,156.857 C213.204,156.874 213.215,156.889 213.228,156.905 C216.181,148.167 217.833,138.832 217.936,129.12 L215.03,129.01 L214.577,129.155" fill="#FFFFFF">

</path>
		<path d="M114.525,87.695 C114.759,87.677 114.993,87.663 115.226,87.647 C116.828,87.538 118.44,87.469 120.065,87.469 C124.933,87.469 129.689,87.99 134.315,88.939 L134.316,88.939 C137.581,89.708 143.377,91.301 147.68,93.118 C149.485,93.88 151.26,94.715 152.999,95.617 C153.08,95.66 153.217,95.735 153.394,95.832 C153.424,95.849 153.469,95.874 153.501,95.892 C153.662,95.982 153.838,96.079 154.044,96.196 C154.048,96.199 154.053,96.201 154.058,96.204 C154.3,96.341 154.564,96.491 154.841,96.647 C154.864,96.66 154.887,96.674 154.911,96.687 C156.017,97.314 157.241,98.017 157.709,98.285 C157.769,98.319 157.797,98.335 157.829,98.354 C157.853,98.368 157.905,98.397 157.914,98.403 C157.818,98.207 157.708,98.021 157.61,97.827 C157.591,97.789 157.571,97.751 157.552,97.712 C153.674,90.059 147.704,83.495 140.378,79.014 C133.236,74.645 124.902,72.23 116.521,72.23 C95.701,72.23 78.106,86.254 72.355,105.518 C77.8,100.869 83.857,96.948 90.376,93.971 C97.978,90.501 106.188,88.328 114.525,87.695" fill="#000000">

</path>
		<path d="M213.225,99.515 L213.224,99.514 L213.225,99.515 C213.204,99.486 213.182,99.46 213.161,99.432 L213.163,99.433 C212.099,97.956 211.002,96.608 209.876,95.385 C209.874,95.381 209.87,95.376 209.867,95.373 C209.87,95.376 209.874,95.381 209.876,95.385 C209.867,95.374 209.857,95.361 209.847,95.35 C209.335,94.796 208.82,94.267 208.296,93.765 C208.099,93.576 207.895,93.411 207.696,93.23 C207.367,92.931 207.04,92.622 206.706,92.348 L206.706,104.257 L211.265,125.135 L211.265,125.134 C211.315,125.296 211.375,125.448 211.419,125.616 L214.577,129.155 L214.608,129.12 L217.913,129.12 C217.917,128.814 217.936,128.512 217.936,128.205 L217.936,128.2 C217.935,118.353 216.317,108.891 213.386,100.026 L213.386,100.027 C213.331,99.858 213.282,99.684 213.225,99.515" fill="#BBBCBD">

</path>
		<path d="M181.038,94.03 C184.697,90.451 189.59,87.553 194.838,87.553 C198.991,87.553 202.98,89.235 206.705,92.312 C206.705,92.312 206.706,92.339 206.706,92.348 L206.706,92.354 L206.706,92.348 C207.04,92.622 207.367,92.931 207.696,93.23 C207.895,93.411 208.099,93.576 208.296,93.765 C208.82,94.267 209.335,94.796 209.847,95.35 C209.857,95.361 209.867,95.374 209.876,95.385 C209.874,95.381 209.87,95.376 209.867,95.373 L209.866,95.372 L209.825,95.246 C205.838,83.59 199.405,76.017 192.145,76.017 C182.51,76.017 174.341,89.357 171.407,107.874 L171.438,107.848 C173.94,102.875 177.034,97.947 181.038,94.03" fill="#000000">

</path>
		<path d="M168.019,207.836 C168.019,207.836 166.722,206.808 165.075,204.913 C164.689,204.469 164.291,203.994 163.877,203.453 C163.566,203.048 163.251,202.615 162.936,202.156 C162.726,201.85 162.518,201.532 162.311,201.204 C161.688,200.219 161.191,199.02 160.643,197.835 C160.009,196.463 160.007,195.55 159.643,194.272 C159.383,193.358 159.167,192.403 159.006,191.409 C158.765,189.919 158.65,188.341 158.703,186.681 C158.731,185.768 158.825,184.823 158.962,183.861 C159.094,182.936 159.276,181.989 159.519,181.022 C160.245,178.119 161.5,175.027 163.458,171.763 C163.463,171.754 163.951,170.654 163.956,170.645 C164.596,169.579 164.738,169.626 165.346,168.599 C173.91,154.146 178.53,143.217 176.27,126.389 C176.108,125.188 175.667,122.497 175.426,121.233 C175.298,122.107 174.815,124.892 174.801,124.952 C174.716,125.336 174.483,125.753 174.395,126.014 C170.675,137.024 164.819,145.123 156.393,154.268 C155.251,155.507 154.055,156.764 152.831,158.033 C150.771,160.168 148.611,162.349 146.326,164.623 C145.414,165.53 144.484,166.45 143.538,167.388 C142.669,168.248 141.588,170.087 140.298,171.442 C139.502,173.671 138.597,176.185 137.832,178.829 C137.487,178.698 137.158,178.581 136.807,178.445 C120.439,172.114 109.48,163.655 109.48,163.655 C109.48,163.655 117.912,174.634 132.118,184.94 C133.493,185.938 134.849,186.802 136.177,187.568 C135.591,196.844 139.683,205.749 158.154,208.405 C161.277,208.854 164.475,208.833 167.696,208.47 C167.664,208.374 167.876,208.376 167.859,208.323 C167.841,208.269 168.031,208.127 168.031,208.127" fill="#000000">

</path>
		<path d="M158.139,183.959 C174.537,186.605 198.806,186.171 224,174.375 C224.607,174.091 225.276,174.839 225.883,174.541 C225.883,174.541 208.664,192.128 188.1,202.071 C187.499,202.361 186.906,202.67 186.299,202.946 C184.312,203.854 182.291,204.645 180.262,205.375 C176.283,206.805 172.251,207.89 168.248,208.391 C168.064,208.415 167.88,208.45 167.696,208.47 C167.664,208.374 167.638,208.296 167.621,208.243 C167.603,208.189 167.594,208.16 167.594,208.16 C167.594,208.16 166.296,207.131 164.649,205.236 C164.263,204.792 163.865,204.317 163.452,203.776 C163.141,203.371 162.826,202.938 162.511,202.479 C162.301,202.173 162.092,201.855 161.885,201.527 C161.263,200.542 160.658,199.453 160.11,198.269 C159.563,197.085 159.073,195.804 158.683,194.432 C158.422,193.518 158.206,192.563 158.045,191.569 C157.804,190.078 157.69,188.501 157.742,186.841 C157.77,185.927 157.864,184.983 158.001,184.021 L158.139,183.959" fill="#9F2254">

</path>
		<path d="M146.386,165.29 C148.672,163.016 150.832,160.835 152.892,158.7 C154.115,157.431 155.312,156.174 156.454,154.935 C164.879,145.79 171.064,137.232 174.785,126.222 C174.872,125.961 174.96,125.617 175.045,125.23 C175.059,125.17 175.072,125.113 175.085,125.051 C175.172,124.64 175.257,124.183 175.342,123.668 C175.376,123.313 176.489,122.597 176.52,122.264 C175.587,117.47 173.437,112.43 171.09,108.582 C171.096,108.598 171.101,108.613 171.106,108.629 C171.097,108.621 171.067,108.591 171.061,108.585 C170.753,108.294 170.432,108.022 170.12,107.736 C169.173,106.861 168.209,106.01 167.228,105.182 C164.285,102.7 161.191,100.435 157.947,98.437 C158.111,101.131 158.216,103.822 158.244,106.51 C158.248,106.812 158.24,107.113 158.24,107.414 C158.245,108.457 158.248,109.501 158.228,110.544 C158.202,111.887 158.155,113.231 158.086,114.573 C158.035,115.565 157.972,116.555 157.895,117.546 C157.887,117.649 157.875,117.752 157.868,117.855 C157.567,121.609 157.092,125.347 156.411,129.036 L155.227,134.635 C152.754,144.661 147.731,153.755 143.601,163.145 C142.506,165.635 141.467,168.153 140.556,170.718 C140.473,170.953 140.384,171.2 140.298,171.442 C141.588,170.087 142.73,168.915 143.598,168.055 C144.545,167.118 145.475,166.197 146.386,165.29" fill="#FCB03F">

</path>
		<path d="M92.198,219.213 C98.207,216.555 103.768,214.886 110.378,213.583 C110.34,212.148 110.275,210.717 110.154,209.295 C112.985,201.951 115.598,194.56 117.962,187.127 C113.747,187.536 109.563,188.186 105.428,189.064 C102.361,189.715 99.335,190.533 96.334,191.437 C93.923,192.163 91.544,192.997 89.184,193.884 L98.515,196.144 L91.007,219.71 L92.198,219.213" fill="#525353">

</path>
		<path d="M207.559,149.378 C205.92,147.226 204.267,145.08 202.595,142.948 C202.509,142.838 202.421,142.729 202.335,142.619 C200.572,140.376 198.79,138.148 196.981,135.94 C196.958,135.913 196.936,135.886 196.914,135.858 C195.053,133.59 193.167,131.344 191.247,129.128 C191.126,128.987 191.005,128.844 190.882,128.704 C189.709,127.353 188.516,126.02 187.317,124.693 C186.902,124.234 186.485,123.775 186.066,123.319 C185.072,122.234 184.068,121.16 183.055,120.095 C182.266,119.268 181.467,118.453 180.666,117.639 C179.912,116.87 179.16,116.098 178.394,115.342 C176.748,113.721 175.082,112.12 173.378,110.561 C172.624,109.872 171.861,109.194 171.09,108.526 C171.086,108.533 171.082,108.542 171.079,108.55 C172.701,113.212 174.552,117.932 175.479,122.794 C175.72,124.059 175.919,125.289 176.081,126.491 C178.341,143.318 172.949,154.305 164.386,168.758 C163.771,169.794 163.142,170.848 162.497,171.922 C160.539,175.188 159.285,178.279 158.558,181.182 C158.316,182.149 158.133,183.096 158.001,184.021 C174.794,186.731 200.046,187.236 225.883,174.541 C225.883,174.541 220.816,167.094 213.192,156.857 C211.487,154.568 209.77,152.282 208.037,150.002 C207.879,149.793 207.718,149.585 207.559,149.378" fill="#DF0067">

</path>
		<path d="M90.115,223.922 L98.515,196.144 L89.184,193.884 C87.094,194.669 85.023,195.506 82.979,196.416 L74.66,223.922 L83.947,224.067 L90.115,223.922" fill="#AA9678">

</path>
		<path d="M96.02,211.904 C96.84,212.219 97.674,212.503 98.506,212.794 C107.791,216.049 117.765,217.841 128.164,217.841 C140.021,217.841 151.33,215.519 161.692,211.343 C162.24,211.123 162.777,210.881 163.319,210.65 C164.199,210.275 165.073,209.89 165.938,209.489 C166.712,209.129 167.486,208.772 168.248,208.391 C168.064,208.415 167.88,208.45 167.696,208.47 C164.475,208.833 161.277,208.854 158.154,208.405 C139.683,205.749 135.591,196.844 136.177,187.568 C134.849,186.802 133.493,185.938 132.118,184.94 C117.912,174.634 109.48,163.655 109.48,163.655 C109.48,163.655 120.439,172.114 136.807,178.445 C137.158,178.581 137.487,178.698 137.832,178.829 C138.597,176.185 139.502,173.671 140.298,171.442 C140.384,171.2 140.473,170.953 140.556,170.718 C141.467,168.153 142.506,165.635 143.601,163.145 C147.731,153.755 152.754,144.661 155.227,134.635 L156.411,129.036 L146.309,129.036 L146.308,129.037 C146.308,129.043 146.309,129.05 146.309,129.057 L146.305,129.059 C146.305,129.086 146.309,129.113 146.309,129.142 C146.309,130.807 145.971,132.393 145.361,133.836 C145.056,134.558 144.682,135.243 144.249,135.885 C143.382,137.167 142.275,138.275 140.991,139.142 C140.35,139.576 139.664,139.949 138.943,140.253 C137.5,140.864 135.914,141.202 134.249,141.202 C133.826,141.202 133.408,141.179 132.997,141.136 C132.9,141.126 132.807,141.105 132.711,141.093 C132.395,141.052 132.081,141.009 131.776,140.946 C131.69,140.927 131.608,140.9 131.523,140.88 C131.209,140.808 130.895,140.73 130.591,140.633 C130.535,140.614 130.481,140.591 130.425,140.572 C130.096,140.461 129.769,140.342 129.453,140.204 C129.424,140.192 129.397,140.177 129.369,140.164 C129.028,140.012 128.693,139.848 128.369,139.666 L128.354,139.657 C127.316,139.071 126.372,138.338 125.552,137.483 L90.944,129.036 L53.174,129.036 C53.012,129.324 52.832,129.6 52.673,129.889 C52.385,130.412 52.113,130.943 51.835,131.47 C51.151,132.768 50.491,134.078 49.867,135.406 C49.647,135.873 49.428,136.341 49.215,136.812 C48.454,138.504 47.729,140.212 47.067,141.943 C47.037,142.02 47.005,142.096 46.975,142.173 C46.222,144.157 45.533,146.165 44.913,148.189 C44.118,150.786 43.435,153.411 42.865,156.052 C48.811,174.188 60.38,189.772 75.503,200.756 C75.943,201.075 76.407,201.359 76.853,201.671 C79.411,203.459 82.054,205.132 84.796,206.65 C88.396,208.645 92.138,210.414 96.02,211.904" fill="#FFFFFF">

</path>
		<path d="M186.58,233.374 C186.348,230.988 186.204,228.582 186.204,226.15 C186.204,224.688 185.019,223.501 183.556,223.501 L72.444,223.501 C70.981,223.501 69.795,224.688 69.795,226.15 C69.795,228.582 69.652,230.988 69.419,233.374 C69.161,236.013 68.754,238.617 68.22,241.182 C69.831,242.034 71.455,242.863 73.107,243.649 C74.193,238.877 74.863,233.974 75.039,228.971 C75.042,228.914 75.048,228.856 75.05,228.799 L180.95,228.799 C180.952,228.856 180.958,228.914 180.96,228.971 C181.137,233.974 181.807,238.877 182.893,243.649 C184.545,242.863 186.169,242.034 187.78,241.182 C187.246,238.617 186.839,236.013 186.58,233.374" fill="#8B7460">

</path>
	</g>
</svg>

<svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M128.047512,7.3783408e-06 C198.721844,0.0237668475 256.000007,57.3256748 256.000007,128.000007 L256.000007,128.000007 L256.000007,128.047512 C255.976248,198.73372 198.650588,256.023752 127.952503,256.000007 C57.2662946,255.976248 -0.0237373249,198.638712 7.3783408e-06,127.952503 C0.0237668475,57.2662946 57.3494269,-0.0237373249 128.047512,7.3783408e-06 Z M127.394329,32.9204063 C123.87902,46.2215745 112.026729,58.0382374 99.6162644,70.4487025 C81.054009,89.058462 59.9502804,110.114686 59.9502804,141.740589 C59.9977845,178.936356 90.1154299,209.08963 127.311197,209.184638 C164.57822,209.184638 194.80275,178.995736 194.838378,141.740589 C194.838378,110.114686 173.79403,89.0703381 155.172394,70.4487025 L155.172394,70.4487025 L153.509304,68.7850783 C141.716229,56.9780684 130.740892,45.6373441 127.394329,32.9204063 Z M128.308785,133.914277 C136.051965,142.168127 140.968646,147.856751 146.063469,154.067922 C146.443502,154.531088 146.787908,155.029881 147.096685,155.564303 C153.331607,164.554468 152.488408,176.668032 145.065881,184.696237 C136.325114,194.161444 121.575068,194.74337 112.109862,186.002602 C102.644655,177.261834 102.062729,162.511789 110.803497,153.046582 C115.767683,147.179817 121.765085,141.40806 128.308785,133.914277 Z M97.4904526,102.965309 L100.744488,106.041204 L115.850815,121.491936 C116.420865,122.145118 116.420865,123.107078 115.850815,123.76026 L115.850815,123.76026 L100.055678,141.218043 L94.5333179,147.939884 C92.4312583,150.505109 90.6498518,153.295979 89.2247266,156.288742 C89.0228339,156.787536 88.5952963,157.155693 88.0727505,157.274454 L88.0727505,157.274454 L87.5145764,157.274454 C85.9825669,157.143817 84.2249125,154.317319 84.2249125,154.317319 L84.2249125,154.317319 L83.945588,153.893962 C83.5807559,153.325432 83.2463265,152.74018 82.9422998,152.132127 L82.9422998,152.132127 L82.6453988,151.490821 C80.4839589,144.460203 80.3176943,136.96642 82.1347289,129.840794 L82.1347289,129.840794 L82.3393123,129.09986 C84.0164452,123.184984 86.6633017,117.575692 90.1748101,112.513647 C92.4312583,109.188355 94.8777232,106.005576 97.4904526,102.965309 L97.4904526,102.965309 Z M127.489338,71.7313151 C131.515316,76.3035917 136.051965,80.8877444 140.32734,85.1631199 L140.32734,85.1631199 L140.422348,85.460021 C149.365009,93.7851272 157.440718,102.989061 164.554468,112.929309 C170.587498,121.408803 173.889038,131.527192 174.007798,141.942482 C174.007798,146.443502 173.330864,150.908895 172.000747,155.208022 L172.000747,155.208022 L171.934858,155.385394 C171.576967,156.256918 170.798298,156.892936 169.863059,157.048809 L169.863059,157.048809 L169.435522,157.048809 C168.50919,156.751908 167.737248,156.134354 167.25033,155.291154 L167.25033,155.291154 L166.534081,154.215912 C162.683313,148.503112 158.341202,143.140565 153.557252,138.177776 L153.557252,138.177776 L147.393586,131.669705 L126.848031,110.269075 C123.380227,106.931907 117.180932,100.946381 114.568203,97.6923454 C114.48507,97.5142047 114.390062,97.3479401 114.271302,97.1816755 C113.558739,96.20784 113.012441,95.1271201 112.644284,93.9751439 L112.644284,93.9751439 L112.644284,93.3338375 C112.288002,91.243654 112.573027,89.0940902 113.451855,87.1701712 C114.021905,85.9469387 114.805723,84.8305907 115.767683,83.8805072 C119.746157,79.9020328 123.724632,76.0066907 127.489338,71.7313151 Z" fill="#009DDE"> </path> </g> </g></svg>



  </div>




            </p>
          </div>
        </div>
        <div className="m-2 hidden items-center justify-center rounded-sm border pr-4 align-middle dark:border-[#b4fbff38] dark:hover:shadow-2xl dark:hover:shadow-[#62818263] lg:inline-flex">
          <div className="bg-transparent p-6 lg:p-10">
            <h1 className="text-balance from-white from-30% to-white/40 py-6 text-center text-5xl font-medium leading-none tracking-tighter text-black dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
            Frameworks
            </h1>
            <p className="text-justify font-mono text-lg font-medium text-gray-600 dark:text-gray-400">
            Our professionals specialize in utilizing versatile frameworks, enabling the creation of dynamic and feature-rich applications tailored to your specific needs and objectives. 
            </p>
            <div className="flex justify-items-start gap-3 mt-4">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="M0 0h32v32H0z"></path> <path fill="#70AD51" d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z"></path> </g> </g></svg>

            <svg viewBox="-24 0 304 304" version="1.1" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M13.1040062,287.305758 C7.90005751,287.305758 6.38666428,284.276558 6.38666428,279.736378 C6.38666428,278.222985 6.577347,276.516495 6.81147641,274.718285 C7.95074533,266.866501 10.7337476,262.374596 17.4510895,262.374596 C21.9936829,262.374596 24.2094644,264.406936 24.2094644,268.097491 L24.2094644,269.895702 L28.7158522,269.895702 C28.76654,269.895702 28.76654,268.2399 28.76654,267.863362 C28.76654,262.471144 25.5007967,257.356502 17.4583306,257.356502 C6.52907289,257.356502 2.03475359,263.294217 0.378951735,274.933105 C0.142408614,276.494772 -1.77635684e-14,277.95265 -1.77635684e-14,279.50949 C-1.77635684e-14,286.36924 2.69852255,292.608669 12.3485164,292.608669 C19.6813532,292.608669 24.0356776,289.033971 26.5893778,284.633786 L22.2833275,281.734926 C19.4930842,286.135111 16.463884,287.305758 13.1040062,287.305758 L13.1040062,287.305758 Z M42.6743101,265.637925 C33.9198009,265.637925 30.1375246,270.129831 28.8606745,279.070195 C28.7158522,280.11533 28.6217177,281.201497 28.6217177,282.19353 C28.6217177,287.9647 31.3178265,292.555567 38.7906582,292.555567 C47.5451674,292.555567 51.3781315,287.870565 52.6549816,279.070195 C52.7973902,277.935754 52.8915247,276.895447 52.8915247,275.85514 C52.8939384,269.989836 50.103695,265.637925 42.6743101,265.637925 L42.6743101,265.637925 Z M46.3165914,279.072609 C45.3704189,285.555822 43.338079,287.542301 39.5027013,287.542301 C36.4300544,287.542301 34.9166612,286.265451 34.9166612,282.432487 C34.9166612,281.486314 35.0132094,280.351873 35.2014784,279.072609 C36.1476509,272.640084 38.0399959,270.653605 41.9188203,270.653605 C45.042155,270.653605 46.6014086,271.930455 46.6014086,275.80928 C46.6014086,276.755452 46.5048604,277.844033 46.3165914,279.072609 L46.3165914,279.072609 Z M74.8972761,257.827175 L73.432157,266.511687 C73.3380225,267.267176 73.3862966,267.016151 73.6711138,267.72578 C72.3001292,266.685473 69.8381497,265.997567 68.1823479,265.997567 C60.3281508,265.997567 55.9303797,269.552955 54.511121,279.487766 C54.3228519,280.670482 54.2745778,281.667342 54.2745778,282.659375 C54.2745778,289.900491 58.532354,292.599014 64.2552493,292.599014 C66.6713684,292.599014 69.0343859,292.649702 70.8784567,291.090448 L71.3491293,294.032755 L75.8917227,294.032755 L81.1898059,257.827175 L74.8972761,257.827175 L74.8972761,257.827175 Z M70.4029568,286.168903 C68.2764824,287.443339 66.1958684,287.73057 64.9190183,287.73057 C61.465006,287.73057 60.5188335,285.93236 60.5188335,283.047982 C60.5188335,281.959401 60.6612421,280.684964 60.8519248,279.309152 C61.9380922,271.788047 64.3517976,270.460509 67.4751322,270.460509 C69.5074721,270.460509 71.0667258,270.7936 72.5366723,271.599777 L70.4029568,286.168903 L70.4029568,286.168903 Z M95.0058551,265.637925 C86.3454804,265.637925 82.2808007,269.750879 80.9074023,279.070195 C80.76258,280.207051 80.6684455,281.295632 80.6684455,282.335939 C80.6684455,288.722603 83.9341888,292.555567 91.1222033,292.555567 C96.7051037,292.555567 100.871159,290.235996 103.094182,285.97822 L98.3150451,284.037601 C96.9440605,286.118215 95.0999896,287.537474 91.8342463,287.537474 C88.3343736,287.537474 86.9151149,286.596129 86.9151149,283.472794 C86.9151149,282.857299 86.963389,281.961814 87.0575235,281.961814 L104.134489,281.961814 C104.373445,279.548109 104.653435,277.841619 104.653435,276.427188 C104.653435,271.698739 102.857639,265.637925 95.0058551,265.637925 L95.0058551,265.637925 Z M98.2691847,277.136817 L87.8612874,277.136817 C88.9040081,274.723112 90.6515307,270.986696 94.2479517,270.986696 C97.038195,270.986696 98.4115933,272.618361 98.4115933,275.408604 C98.4091796,275.881691 98.3657329,277.136817 98.2691847,277.136817 L98.2691847,277.136817 Z M122.860015,265.068291 L123.427235,260.24088 L110.084272,260.24088 L109.519465,265.068291 L113.019338,265.068291 L109.237062,289.205344 L105.732362,289.205344 L105.167555,294.032755 L118.508104,294.032755 L119.077738,289.205344 L115.575452,289.205344 L119.357728,265.068291 L122.860015,265.068291 Z M149.970753,272.309407 L151.674829,267.481996 L147.086375,267.481996 L143.777185,268.165075 C141.9307,266.984773 139.42286,266.098943 137.059843,266.098943 C130.291813,266.098943 124.523057,269.3671 124.523057,276.796485 C124.523057,278.879513 125.278547,280.561865 126.176446,281.698721 C124.759601,282.45421 123.528611,283.718992 123.528611,285.425482 C123.528611,286.180971 123.811014,286.955771 124.380649,287.662986 C121.539718,289.369476 119.794609,292.195925 119.794609,295.505115 C119.794609,301.894193 126.463677,303.257936 131.573491,303.257936 C138.006015,303.257936 145.671944,301.78799 145.671944,293.603115 C145.671944,290.812872 143.922007,288.633296 138.860467,287.687123 L129.72942,285.980634 C128.689113,285.789951 128.45257,285.459273 128.45257,284.986187 C128.45257,284.276558 128.882209,283.90002 129.589425,283.90002 L130.20492,283.994154 C131.43591,284.276558 132.855168,284.42138 134.320287,284.42138 C140.897634,284.42138 146.762938,281.580449 146.762938,274.201752 C146.762938,273.159031 146.574669,272.454229 146.101583,271.317374 C146.905347,271.696326 147.948068,272.311821 148.370466,272.311821 L149.970753,272.311821 L149.970753,272.309407 Z M136.963295,291.891798 C138.759091,292.224889 139.372173,292.886245 139.372173,294.06896 C139.372173,297.901924 135.256805,298.375011 132.278293,298.375011 C127.735699,298.375011 126.034037,297.288843 126.034037,294.872724 C126.034037,292.743836 126.647118,291.751803 128.068791,290.235996 L136.963295,291.891798 L136.963295,291.891798 Z M135.020262,279.499835 C132.275879,279.499835 130.762486,278.507802 130.762486,276.139957 C130.762486,272.640084 132.797239,270.605331 136.345386,270.605331 C139.183904,270.605331 140.557302,271.788047 140.557302,274.10279 C140.557302,277.605076 138.568409,279.499835 135.020262,279.499835 L135.020262,279.499835 Z M166.777383,265.637925 C164.127134,265.637925 161.764117,266.938913 158.829051,269.253656 L158.404239,267.481996 L153.197877,267.481996 L149.555595,294.032755 L155.848125,294.032755 L158.592508,273.897625 C160.438993,272.763183 162.707876,271.114623 164.648495,271.114623 C167.011512,271.114623 167.865964,272.256305 167.865964,274.431054 C167.865964,274.952414 167.815276,276.494772 167.721142,277.061993 L165.406398,294.032755 L171.698928,294.032755 L174.013671,276.924411 C174.11022,276.123061 174.204354,274.805178 174.204354,274.049688 C174.206768,269.550542 172.075466,265.637925 166.777383,265.637925 L166.777383,265.637925 Z M186.157023,287.380583 L186.205297,286.731296 L188.947266,267.481996 L178.491095,267.481996 L177.832153,272.309407 L182.418193,272.309407 C182.039242,272.309407 181.802698,272.731805 181.756838,273.113171 L179.864493,285.93236 C179.770359,286.550268 179.724498,287.834359 179.724498,288.350892 C179.724498,291.662496 181.520295,294.032755 185.208437,294.032755 L188.425906,294.032755 L189.135535,289.205344 L187.103195,289.205344 C186.391152,289.205344 186.157023,287.947804 186.157023,287.380583 L186.157023,287.380583 Z M190.224116,257.827175 L184.073995,257.827175 C183.695043,257.827175 183.695043,256.434467 183.649183,256.907553 L182.794731,263.709375 C182.746457,264.136601 182.746457,265.068291 183.125409,265.068291 L189.277944,265.068291 C189.656896,265.068291 189.656896,263.414903 189.702756,262.985263 L190.557208,257.735454 C190.605482,257.262368 190.605482,257.827175 190.224116,257.827175 L190.224116,257.827175 Z M203.055374,287.542301 C201.49612,287.542301 200.738217,286.878532 200.738217,285.461687 L200.786491,285.365139 L202.77297,272.309407 L209.963398,272.309407 L212.138147,267.481996 L203.434326,267.481996 L204.899445,256.859279 L198.278651,258.976099 L197.093522,267.481996 L193.262971,267.481996 L192.601616,272.309407 L197.047661,272.309407 C196.622849,274.723112 196.195623,273.156617 196.149763,273.632117 L194.445687,285.080322 C194.351552,285.601682 194.351552,285.980634 194.351552,286.451306 C194.351552,290.945626 197.663156,292.627978 201.640942,292.627978 C205.329084,292.627978 208.31001,291.551466 210.629581,289.608433 L207.694515,285.99753 C206.224569,286.895428 205.232536,287.542301 203.055374,287.542301 L203.055374,287.542301 Z M226.142465,265.637925 C217.484504,265.637925 213.417411,269.750879 212.044012,279.070195 C211.901604,280.207051 211.807469,281.295632 211.807469,282.335939 C211.807469,288.722603 215.070799,292.555567 222.261227,292.555567 C227.844127,292.555567 232.010183,290.235996 234.230792,285.97822 L229.454069,284.037601 C228.083084,286.118215 226.2366,287.537474 222.970856,287.537474 C219.473397,287.537474 218.051725,286.596129 218.051725,283.472794 C218.051725,282.857299 218.102413,281.961814 218.196547,281.961814 L235.273512,281.961814 C235.510056,279.548109 235.794873,277.841619 235.794873,276.427188 C235.794873,271.698739 233.996662,265.637925 226.142465,265.637925 L226.142465,265.637925 Z M229.408208,277.136817 L219.000311,277.136817 C220.040618,274.723112 221.788141,270.986696 225.386975,270.986696 C228.177219,270.986696 229.550617,272.618361 229.550617,275.408604 C229.548203,275.881691 229.502343,277.136817 229.408208,277.136817 L229.408208,277.136817 Z M253.204929,265.637925 C250.933633,265.637925 248.804744,266.938913 246.675856,268.968839 L246.296905,267.481996 L241.09537,267.481996 L237.450675,294.032755 L243.791478,294.032755 L246.581722,273.472813 C248.237524,272.48078 250.129869,271.633569 251.928079,271.633569 C253.064934,271.633569 254.151102,271.452541 255.191409,271.59495 L256,266.108598 C255.049,265.920329 254.102828,265.637925 253.204929,265.637925 L253.204929,265.637925 Z M92.541462,238.809591 C78.2209483,232.62085 64.8200564,216.888319 64.7886782,200.791318 C64.7500589,183.241267 75.872413,168.341464 89.7053582,158.549061 C88.0423153,164.831936 87.1347621,170.578969 91.2549571,176.198075 C95.0855074,181.423747 101.793194,183.962965 108.126757,182.584739 C122.927598,179.345546 123.605849,163.074759 114.832031,153.596138 C106.157174,144.209238 97.7647203,133.605831 101.066669,119.992533 C102.720057,113.168988 106.91025,106.777496 112.217988,102.208352 C108.138826,112.930031 119.731852,123.504474 127.37123,128.771179 C140.622472,137.909467 155.160219,144.815078 167.344604,155.527102 C180.161379,166.784624 189.625517,182.007863 187.713863,199.661704 C185.642904,218.79756 170.43656,232.106731 153.381318,238.826487 C189.422766,230.870914 226.663826,202.898483 227.426556,162.925109 C228.058947,130.040788 205.500457,104.733088 177.554577,90.2436145 L176.094285,89.4470918 C176.861844,91.3080586 177.112869,92.8914493 177.083905,94.3082943 C177.33493,93.2631599 177.503889,92.189061 177.552163,91.0811703 C177.540095,92.459396 177.363894,93.7603832 177.040458,94.9817181 L177.083905,94.3082943 C176.66392,96.0823677 175.959118,97.7309284 175.015359,99.2394943 L175.425689,98.7977862 C169.85003,108.044691 154.75713,110.052894 147.301195,100.477725 C135.314734,85.0758714 147.55222,68.4695788 149.263537,52.160172 C151.406907,31.7185016 138.587718,11.8754302 122.693469,-1.42108547e-14 C131.447978,14.1612091 119.915294,32.8963898 110.687699,43.3694572 C101.740093,53.5239155 90.8591094,62.0008486 80.9822272,71.2260303 C70.3715786,81.1342906 60.1712599,91.5711525 51.4505426,103.200385 C34.009108,126.475745 23.3308756,155.749163 31.1778316,184.788452 C39.0199602,213.806017 64.1562874,232.278104 92.541462,238.809591 L92.541462,238.809591 Z" fill="#EE4323"> </path> </g> </g></svg>

            <div className="hidden dark:block">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" fill="#ffffff" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>flask</title> 
<path d="M14.319 9.028c0.35-0.62-1.443-0.835-0.235-0.219 0.112 0.037 0.087 0.262 0.235 0.219zM4.542 3.761c-0.762-0.995 1.432 0.167 0.659-0.875-0.652-0.519-1.278 0.585-0.659 0.875zM6.138 5.011c1.082-0.144-0.275-0.466-0.217-0.013zM5.283 4.806c0.232-0.315-0.407 0.16 0 0zM7.008 6.705c0.672 0.016-0.289-0.902 0.511-0.487-0.131-0.429-0.932-0.509-1.325-0.68-0.22 0.392 0.45 1.172 0.812 1.167zM4.916 6.619c0.575-0.434 1.984 0.257 1.080-0.431-0.087-0.077-1.982 0.522-1.080 0.431zM4.326 7.747c1.007-0.342 2.383-0.726 2.858 0.169-0.484-0.582-0.195-1.155 0.262-0.304 0.645 0.861 0.968-0.391 0.547-0.681 0.479 0.595 1.023 0.875 0.321 0.037 0.762-0.917-1.528 0.121-2.049 0.11-0.25 0.112-2.588 0.596-1.938 0.669zM6.2 10.881c0.246-0.304-0.337-0.081 0 0zM5.613 12.452c-0.060-0.362-0.175 0.192 0 0zM5.116 12.2c0.562-0.037 0.882-0.621-0.109-0.587-1.537-0.159 1.355 0.525-0.197 0.33-0.209 0.137 0.295 0.296 0.306 0.259zM29.116 27.445c0.696 0 2.109-0.216 0.594-0.216-0.237 0.038-1.386 0.030-0.595 0.216zM25.78 25.486c0.075-0.51-0.337 0.046 0 0zM28.395 27.273c0.015-0.444-0.38 0.2 0 0zM2.65 11.165c0.499-0.381-0.589-0.145 0 0zM4.549 12.515c0.306-0.325-0.663-0.132 0 0zM3.906 12.335c0.871-0.534-0.926-0.462 0 0zM10.348 8.28c0.291-0.765 1.132-0.306 0.135-0.154 0.021 0.081-0.030 0.395-0.135 0.154zM9.548 8.285c-0.069-1.517 1.398 0.54-0 0zM6.736 8.718c0.462-0.555 2.618-0.354 1.040-0.054-0.422-0.319-0.747 0.187-1.040 0.054zM6.541 8.848c0.277-0.325 0.080 0.287-0 0zM5.782 9.154c0.040-0.514 1.272 0.272 0.204 0.185zM5.226 9.144c0.437-0.325 0.232 0.182-0 0zM5.167 9.687c0.304-1.117 1.625 0.918 0.497 0.147-0.121-0.095-0.275-0.152-0.443-0.152-0.019 0-0.038 0.001-0.057 0.002l0.002-0zM2.050 11.274c-0.116-0.669-0.1-1.842 1.015-1.445-1.488 0.295 1.030 1.849 0.712 0.622 0.625 0.030 1.225-0.37 0.895 0.237 1.233-0.137 2.087-1.205 3.279-1.056 1.082-0.090 2.082-0.299 3.033-0.615l-0.091 0.026c0.822-0.060 1.612-0.945 1.162-1.468-0.218-0.013-0.473-0.021-0.73-0.021-0.993 0-1.96 0.114-2.888 0.329l0.086-0.017c-1.372 0.285-2.619 0.827-4.005 1.061-1.35 0.181 0.271 0.5-0.115 0.57-0.705 0.245 0.84 0.41-0.091 0.667-0.575-0.11-1.175-0.307-0.928-0.912-1.293 0.166-2.431 0.704-1.408 2.019h0.075zM4.22 12.726c0.069-0.475-0.512 0.094-0 0zM26.941 27.412c0.165-0.49-0.417 0.062 0 0zM24.474 26.133c0.412-0.379-0.525-0.117 0 0zM4.062 13.526c0.647-0.254-1.175-0.525-0.13-0.050zM2.538 12.615c-0.044-0.4-0.237 0.050 0 0zM2.263 12.823c-0.025-0.337-0.18 0.127 0 0zM4.12 14.028c-0.087-0.731-1.050-0.11 0-0zM7.719 16.687c0.152-0.14-0.362-0.104 0 0zM4.463 14.6c-0.15-0.121-0.117 0.152 0 0zM3.946 14.347c0.011-0.312-0.829-0.28 0 0zM3.041 14.119c-0.172-0.968-0.656-0.147-0 0zM6.836 16.754c0.011-0.509-0.396-0.019 0 0zM23.985 27.436c0.64-0.13 2.097 0.325 2.332-0.17-0.775-0.019-2.687-0.547-2.777 0.125l0.17 0.029zM6.378 16.639c-0.009-0.166-0.152 0.062 0 0zM4.933 15.939c0.499-0.169-0.459-0.112 0 0zM16.467 23.725c-0.009-0.501-0.494 0.125 0 0zM5.241 16.65c0.775-0.3-0.83-0.212 0 0zM20.249 26.297c0.27-0.2-0.337-0.025 0 0zM17.435 24.523c-0.050-0.194-0.196 0.037 0 0zM17.093 24.274c-0.135-0.347-0.535-0.008 0 0zM9.994 19.796c0-0.506-0.906-0.205 0 0zM9.174 19.606c-0.332-0.279-0.016-0.040 0 0zM3.771 16.275c0.115-0.479-1.066-2.633-0.557-1.080 0.182 0.325 0.162 0.942 0.557 1.080zM6.715 18.599c0.646 0.145 2.582 1.592 1.44 0.1-0.585-0.172-0.234-1.603-0.831-1.35 0.4 0.669 0.33 0.953-0.512 0.532-1.056-0.516-0.592 0.255-0.387 0.467-0.28 0.065 0.374 0.245 0.291 0.25zM22.891 29.012c0.482-0.322-0.586-0.104 0 0zM21.166 27.865c0.717-0.602-0.759 0.266-0 0zM21.503 28.028c0.881-0.637-0.535-0.122-0.185 0.12zM11.639 22.174c-0.181-0.371-0.28 0.059 0 0zM11.064 21.841c-0.025-0.3-0.364 0.025 0 0zM20.399 27.727c0.689-0.444-0.157-0.375-0.125 0.040zM6.272 18.818c0.204-0.302-0.525-0.039 0 0zM20.625 28.018c0.712-0.61-0.45-0.128 0-0zM19.543 27.593c1.418-0.917-0.582-0.4 0-0zM4.51 18.178c-0.657-0.937-0.409-1.36-1.043-2.124-0.12-0.587-1.087-1.916-0.5-0.507 0.537 0.823 0.697 2.098 1.543 2.632zM19.784 27.853c0.771-0.817-0.747 0.049 0 0zM19.783 28.115c0.004-0.187-0.3 0.082-0 0zM18.333 27.121c0.697-0.585-0.675 0.26-0 0zM11.964 23.185c0.452 0.4 2.077 0.295 0.55 0.050-0.227-0.337-1.438-0.255-0.55-0.050zM7.327 20.39c-0.302-0.502-1.080-0.455 0 0zM6.513 19.855c-0.125-0.491-0.875-0.487 0-0zM18.624 27.462c0.406-0.394 0.016 0.629 0.675-0.096 0.006-0.519-0.021-0.825-0.757-0.195-0.202 0.112-0.292 0.591 0.082 0.291zM17.861 27.141c0.025-0.35-0.241 0.3 0-0zM10.438 22.644c1.762 0.567-0.864-0.695 0-0zM8.988 21.811c0.425 0.316 1.6 0.898 0.605 0.12 0.336-0.39-0.642-0.597-0.317-0.857-0.825-0.505-0.65-0.46-0.072-0.445-0.992-0.442 0.142-0.41 0.087-0.637-0.381-0.075-1.899-0.675-1.005 0.050-0.907-0.462-0.216 0.172-0.49 0.105-0.928-0.252 0.825 0.706-0.147 0.469 0.531 0.421 1.432 1.080 0.225 0.446-0.16 0.229 0.862 0.575 1.115 0.75zM11.726 23.628c0.769 0.2 0.765-0.119 0.069-0.212-0.375-0.35-1.557-0.719-0.5-0.044 0.071 0.177 0.294 0.174 0.43 0.257zM10.339 22.928c-0.16-0.139 0.020 0.087-0-0zM11.013 9.666c0.117-0.144 0.025 0.174-0-0zM10.61 12.069c-0.27-0.475 0.34-2.091 0.407-1.087-0.284 0.781-0.081 1.218 0.116 0.17 0.366-0.825-0.079 1.628-0.525 0.918zM10.218 12.706c-0.066-0.4 0.225 0.505 0 0zM10.459 13.343c-0.393-0.97 0.365 0.512-0-0zM10.623 13.706c-0.003-0.209 0.054 0.302-0-0zM7.795 12.132c0.257-0.542 0.475 0.604-0-0zM6.793 11.535c0.161-0.069 0.085 0.215-0-0zM11.076 14.879c0.146-1.18 0.129 0.691-0-0zM7.234 12.625c0.211-0.31-0.562-1.4 0.111-0.391 0.29 0.231 0.84 0.387 0.354 0.484 0.762 0.674-0.187 0.182-0.465-0.092zM11.296 15.203c0.055-1.037 0.31-0.619 0.002 0.147zM6.848 12.985c0.519-0.11 2.147 0.911 0.65 0.292-0.165-0.185-0.52-0.1-0.65-0.293zM11.586 16.261c0.162-0.577 0.012 0.381 0 0zM9.484 14.913c-0.082-1.012 0.184 0.167 0 0zM6.715 13.444c-0.871-1.203 2.533 1.216 0.559 0.305-0.206-0.054-0.455-0.075-0.559-0.305zM11.521 16.702c0.067-0.275 0.009 0.322 0 0zM11.771 16.95c0.060-0.641 0.124 0.437-0 0zM10.334 16.1c-0.587-0.352-0.154-2.479 0.046-1.025 0.571-0.185-0.031 0.75 0.394 0.742-0.066 0.591-0.257 0.804-0.437 0.282zM6.448 13.841c-1.357-1.207 1.706 0.632 0.221 0.225zM7.319 14.674c-0.41-0.771 0.5 0.322 0 0zM6.881 14.533c0.271-0.269 0.144 0.265 0 0zM6.169 14.552c-0.467-0.462-0.805-0.891 0.021-0.287 0.319 0.012-0.707-0.972 0.075-0.312 0.825 0.15 0.409 1.352-0.096 0.6zM7.524 15.601c0.27-0.569 0.457 0.792 0 0zM6.961 15.408c0.050-0.754 0.287 0.516 0 0zM8.215 16.271c-0.262-0.448-0.417-0.987-0.417-1.562 0-0.001 0-0.002 0-0.003v0c0.095 0.472 1.005 2.033 0.446 0.647-0.617-1.162 0.737 0.377 0.877 0.667 0.062 0.287-0.381-0.079-0.080 0.597-0.55-0.771-0.325 0.425-0.826-0.347zM12.271 18.977c-0.44-0.987 0.312-0.54 0.097 0.162zM9.919 18.222c-0.194-0.347 0.404 0.325 0 0zM12.658 20.128c0.168-0.63 0.198 0.53 0 0zM8.78 18.026c0.274-0.075 0.135 0.467 0 0zM13.653 21.39c-0.465-0.9 0.587 0.255 0 0zM14.056 21.931c-0.012-0.585 0.134 0.45 0 0zM18.687 25.45c0.231-0.014 0.008 0.175 0 0zM14.64 22.879c-0.37-0.387-0.466-1.112-0.066-0.481 0.205 0.082 0.656 1.183 0.066 0.481zM15.883 26.388c0.966-0.577 0.647 1.352 1.638 0.162 0.977-0.712-0.843 0.883 0.362 0.129 0.87-0.584 2.157 0.275 2.969 0.556 0.585-0.029 1.153 0.506 1.753 0.181 1.153-0.312-2.257-0.462-1.362-1.012-0.138 0.031-0.297 0.049-0.46 0.049-0.805 0-1.509-0.435-1.89-1.082l-0.006-0.010c-1.299-0.215-2.402-0.92-3.136-1.914l-0.009-0.013c-0.24-0.394 0.35 0.055-0.207-0.587-0.606-0.61-1.123-1.311-1.527-2.079l-0.023-0.047c-0.571-0.305-0.637-1.203-0.696-0.030 0.005-0.741-0.691-1.24-0.86-1.032-0.002-0.714 0.744-0.356 0.22-0.884-0.112-0.74-0.482-1.512-0.594-2.346-0.172-0.402-0.025-1.263-0.591-0.352-0.206 0.962-0.069-1.183 0.252-0.475 0.421-0.725-0.15-0.637-0.175-0.537 0.275-0.61 0.175-1.475-0.071-1.145 0.146-0.646 0.231-2.377-0.219-2.069 0.272-0.675 0.517-3.090-0.667-2.169-0.62 0.025-1.202 0.159-1.736 0.382l0.033-0.012c1.232 0.679-0.125 0.245-0.625 0.137-0.065 0.627-0.562 0.356-1.182 0.362 0.991 0.122-0.482 1.012-1.051 0.667-0.737 0.352 0.637 1.233 0.015 1.506 0.075 0.41-1.131-0.15-1.037 0.8-0.716-0.301-0.097 1.125 0.261 0.642 1.218 0.33 0.857 1.082 0.887 1.796-0.197 0.416-0.98-0.978-0.175-0.914-0.634-1.033-0.701-0.375-1.23 0.106-0.125 0.035 1.348 0.684 0.425 1.003 0.812 0.125 0.835 0.837 1 1.287 0.487 0.509 0.387-0.562 0.973 0.050-0.37-0.545-1.958-1.535-0.68-1.217-0.006-0.55-0.231-0.991 0.161-0.98 0.387-0.702-0.406 1.733 0.469 0.84 0.241-0.106 0.3-0.704 0.737 0.056 0.631 0.622 0.227 1.072-0.664 0.504 0.159 0.541 1.192 0.734 0.998 1.581 0.206 0.744 0.494 0.47 0.745 0.427 0.197 0.722 0.309 0.191 0.319-0.154 0.9 0.194 0.69 0.725 0.972 1.1 0.621 0.28-0.89-1.902 0.177-0.657 1.122 1.012 0.421 1.437-0.587 1.275 0.637-0.051 0.844 0.862 1.641 0.83 0.727 0.346 1.218 1.675-0.034 1.121-0.435-0.391-1.974-0.875-0.716-0.13 1.282 0.525 2.335 1.039 3.35 1.611l-0.15-0.077c0.8 0.572 1.147 1.227 1.45 1.357-0.672 0.321-2.028-0.257-1.021-0.435-0.629-0.114-1.335-0.431-0.734 0.35 0.512 0.429 1.812 0.382 2.046 0.431-0.199 0.435-0.537 0.47 0.008 0.504-0.607 0.325 0.195 0.375 0.251 0.56zM12.289 24.179c1.033 0.132-1.231-0.704-0.226-0.075zM15.045 26.050c0.897-0.356-0.875-0.175 0 0zM9.746 22.754c0.575-0.062-0.925-0.389 0 0zM12.877 24.744c0.075-0.319-0.66-0.096 0 0zM17.456 27.709c-0.012-0.246-0.229 0.094 0 0zM13.25 25.129c-0.142-0.162-0.068 0.035 0 0zM6.493 20.836c-0.096-0.371-0.842-0.667 0 0zM9.067 22.501c0.775-0.046-1.060-0.341 0 0zM11.239 24.068c-0.080-0.239-0.42-0.010 0 0zM17.025 27.637c0.035-0.454-0.441 0.337 0 0zM8.94 22.657c-0.052-0.25-0.332 0.023 0 0zM14.743 26.356c1.35 0.012-1.218-0.184 0 0zM12.277 24.931c1.425 0.404-1.197-0.9-0.351-0.147l0.187 0.085 0.162 0.062zM13.507 25.91c0.241-0.412-1.018-0.237 0 0zM9.458 23.438c0.582 0.447 2.349 0.057 0.892-0.266-0.662-0.354-2.158-0.595-1.14 0.212zM12.687 25.653c0.537-0.202-0.87-0.204 0 0zM11.48 24.912c0.375-0.262-0.776-0.2 0 0zM10.043 24.075c-0.050-0.209-0.77-0.231 0 0zM14.943 27.892c0.496 0.312 2.899 0.687 1.393 0.129-0.25 0.052-2.787-0.717-1.395-0.129zM11.856 25.965c-0.017-0.207-0.22 0.094 0 0zM11.239 25.657c0.609-0.394-0.787-0.005 0 0zM13.947 27.548c0.239-0.352-0.762-0.134 0 0zM12.538 26.761c0.39-0.375-0.605-0.235 0 0zM11.714 26.417c-0.067-0.331-0.3 0.185 0 0zM11.056 26.177c0.269-0.12-0.387-0.15 0 0zM6.115 21.807c0.041-0.182 0.221 0.396 0 0zM9.606 25.64c1.212 0.449-0.005-0.852-0.562-0.777-0.245-0.426-0.938-0.696-0.45-0.925-0.88 0.305-0.921-1.162-1.337-0.953-0.93-0.294-0.362-1.337-1.47-1.974-0.101-0.675-1.102-1.26-1.422-2.277-0.141-0.52-1.131-2.016-0.522-0.625 0.648 1.386 1.378 2.579 2.221 3.68l-0.034-0.047c0.545 1.179 1.346 2.158 2.336 2.898l0.020 0.014c0.362 0.348 0.71 0.879 1.221 0.987zM11.985 27.322c1.11 0.571 2.398 1.016 3.753 1.268l0.088 0.014c1.303 0.299 2.799 0.47 4.336 0.47 0.798 0 1.586-0.046 2.36-0.136l-0.094 0.009c-0.987-0.446-2.009 0.175-2.993-0.319-0.35 0.040-0.756 0.062-1.167 0.062-0.879 0-1.734-0.103-2.553-0.298l0.075 0.015c-1.631-0.594-2.987-1.206-4.292-1.902l0.179 0.087c-1.596-0.582 0.825 0.747 1.256 0.856 0.997 0.566-1.096-0.291-1.392-0.526-0.835-0.469-0.942-0.371-0.082 0.105 0.174 0.1 0.345 0.207 0.525 0.294zM9.967 26.447c-1.228-0.845-2.28-1.828-3.171-2.945l-0.023-0.029c-1.676-2.057-3.041-4.451-3.971-7.051l-0.053-0.168c-0.557-1.693-0.75-3.509-1.467-5.136-0.145-0.266-0.23-0.583-0.23-0.92 0-0.972 0.711-1.779 1.641-1.928l0.011-0.001c0.575-0.109 1.59-0.652 0.366-0.264-1.097 0.805-1.203-0.731-0.079-0.827 0.489-0.005 0.884-0.402 0.884-0.892 0-0.147-0.036-0.286-0.099-0.409l0.002 0.005c-0.825-0.537 1.999-1.128 0.579-1.929-1.478-1.598 2.071-1.904 1.196-0.092-0.209 1.393 2.479-0.256 1.856 1.353 0.634 0.774 2.374 0.175 2.331 1.261 0.925 0.062 1.241 0.84 2.108 0.9 0.9 0.406 2.527 0.725 2.832 1.737-0.891 0.707-2.954-1.456-3.053 0.497 0.023 3.075 0.48 6.034 1.312 8.832l-0.057-0.225c0.67 1.664 1.62 3.085 2.804 4.271l-0-0c1.079 1.202 2.376 2.182 3.834 2.884l0.074 0.032c1.16 0.548 2.508 0.98 3.918 1.228l0.097 0.014c0.56-0.429 1.55-2.021 2.422-1.35 0.041 0.755-1.735 1.578-0.084 1.495 0.97-0.292 1.642 0.75 2.441-0.19 0.735 0.871 3.057-0.557 2.533 1.225-0.707 0.455-1.739 0.18-2.448 0.807-1.168-0.584-2.099 0.522-3.393 0.382-1.271 0.231-2.734 0.363-4.228 0.363-0.044 0-0.089-0-0.133-0l0.007 0c-2.548-0.045-4.986-0.444-7.29-1.149l0.187 0.049c-1.394-0.471-2.603-1.091-3.7-1.86l0.046 0.031z" /> </g>

</svg>
  </div>
            <div className="dark:hidden">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <title>flask</title> 
<path d="M14.319 9.028c0.35-0.62-1.443-0.835-0.235-0.219 0.112 0.037 0.087 0.262 0.235 0.219zM4.542 3.761c-0.762-0.995 1.432 0.167 0.659-0.875-0.652-0.519-1.278 0.585-0.659 0.875zM6.138 5.011c1.082-0.144-0.275-0.466-0.217-0.013zM5.283 4.806c0.232-0.315-0.407 0.16 0 0zM7.008 6.705c0.672 0.016-0.289-0.902 0.511-0.487-0.131-0.429-0.932-0.509-1.325-0.68-0.22 0.392 0.45 1.172 0.812 1.167zM4.916 6.619c0.575-0.434 1.984 0.257 1.080-0.431-0.087-0.077-1.982 0.522-1.080 0.431zM4.326 7.747c1.007-0.342 2.383-0.726 2.858 0.169-0.484-0.582-0.195-1.155 0.262-0.304 0.645 0.861 0.968-0.391 0.547-0.681 0.479 0.595 1.023 0.875 0.321 0.037 0.762-0.917-1.528 0.121-2.049 0.11-0.25 0.112-2.588 0.596-1.938 0.669zM6.2 10.881c0.246-0.304-0.337-0.081 0 0zM5.613 12.452c-0.060-0.362-0.175 0.192 0 0zM5.116 12.2c0.562-0.037 0.882-0.621-0.109-0.587-1.537-0.159 1.355 0.525-0.197 0.33-0.209 0.137 0.295 0.296 0.306 0.259zM29.116 27.445c0.696 0 2.109-0.216 0.594-0.216-0.237 0.038-1.386 0.030-0.595 0.216zM25.78 25.486c0.075-0.51-0.337 0.046 0 0zM28.395 27.273c0.015-0.444-0.38 0.2 0 0zM2.65 11.165c0.499-0.381-0.589-0.145 0 0zM4.549 12.515c0.306-0.325-0.663-0.132 0 0zM3.906 12.335c0.871-0.534-0.926-0.462 0 0zM10.348 8.28c0.291-0.765 1.132-0.306 0.135-0.154 0.021 0.081-0.030 0.395-0.135 0.154zM9.548 8.285c-0.069-1.517 1.398 0.54-0 0zM6.736 8.718c0.462-0.555 2.618-0.354 1.040-0.054-0.422-0.319-0.747 0.187-1.040 0.054zM6.541 8.848c0.277-0.325 0.080 0.287-0 0zM5.782 9.154c0.040-0.514 1.272 0.272 0.204 0.185zM5.226 9.144c0.437-0.325 0.232 0.182-0 0zM5.167 9.687c0.304-1.117 1.625 0.918 0.497 0.147-0.121-0.095-0.275-0.152-0.443-0.152-0.019 0-0.038 0.001-0.057 0.002l0.002-0zM2.050 11.274c-0.116-0.669-0.1-1.842 1.015-1.445-1.488 0.295 1.030 1.849 0.712 0.622 0.625 0.030 1.225-0.37 0.895 0.237 1.233-0.137 2.087-1.205 3.279-1.056 1.082-0.090 2.082-0.299 3.033-0.615l-0.091 0.026c0.822-0.060 1.612-0.945 1.162-1.468-0.218-0.013-0.473-0.021-0.73-0.021-0.993 0-1.96 0.114-2.888 0.329l0.086-0.017c-1.372 0.285-2.619 0.827-4.005 1.061-1.35 0.181 0.271 0.5-0.115 0.57-0.705 0.245 0.84 0.41-0.091 0.667-0.575-0.11-1.175-0.307-0.928-0.912-1.293 0.166-2.431 0.704-1.408 2.019h0.075zM4.22 12.726c0.069-0.475-0.512 0.094-0 0zM26.941 27.412c0.165-0.49-0.417 0.062 0 0zM24.474 26.133c0.412-0.379-0.525-0.117 0 0zM4.062 13.526c0.647-0.254-1.175-0.525-0.13-0.050zM2.538 12.615c-0.044-0.4-0.237 0.050 0 0zM2.263 12.823c-0.025-0.337-0.18 0.127 0 0zM4.12 14.028c-0.087-0.731-1.050-0.11 0-0zM7.719 16.687c0.152-0.14-0.362-0.104 0 0zM4.463 14.6c-0.15-0.121-0.117 0.152 0 0zM3.946 14.347c0.011-0.312-0.829-0.28 0 0zM3.041 14.119c-0.172-0.968-0.656-0.147-0 0zM6.836 16.754c0.011-0.509-0.396-0.019 0 0zM23.985 27.436c0.64-0.13 2.097 0.325 2.332-0.17-0.775-0.019-2.687-0.547-2.777 0.125l0.17 0.029zM6.378 16.639c-0.009-0.166-0.152 0.062 0 0zM4.933 15.939c0.499-0.169-0.459-0.112 0 0zM16.467 23.725c-0.009-0.501-0.494 0.125 0 0zM5.241 16.65c0.775-0.3-0.83-0.212 0 0zM20.249 26.297c0.27-0.2-0.337-0.025 0 0zM17.435 24.523c-0.050-0.194-0.196 0.037 0 0zM17.093 24.274c-0.135-0.347-0.535-0.008 0 0zM9.994 19.796c0-0.506-0.906-0.205 0 0zM9.174 19.606c-0.332-0.279-0.016-0.040 0 0zM3.771 16.275c0.115-0.479-1.066-2.633-0.557-1.080 0.182 0.325 0.162 0.942 0.557 1.080zM6.715 18.599c0.646 0.145 2.582 1.592 1.44 0.1-0.585-0.172-0.234-1.603-0.831-1.35 0.4 0.669 0.33 0.953-0.512 0.532-1.056-0.516-0.592 0.255-0.387 0.467-0.28 0.065 0.374 0.245 0.291 0.25zM22.891 29.012c0.482-0.322-0.586-0.104 0 0zM21.166 27.865c0.717-0.602-0.759 0.266-0 0zM21.503 28.028c0.881-0.637-0.535-0.122-0.185 0.12zM11.639 22.174c-0.181-0.371-0.28 0.059 0 0zM11.064 21.841c-0.025-0.3-0.364 0.025 0 0zM20.399 27.727c0.689-0.444-0.157-0.375-0.125 0.040zM6.272 18.818c0.204-0.302-0.525-0.039 0 0zM20.625 28.018c0.712-0.61-0.45-0.128 0-0zM19.543 27.593c1.418-0.917-0.582-0.4 0-0zM4.51 18.178c-0.657-0.937-0.409-1.36-1.043-2.124-0.12-0.587-1.087-1.916-0.5-0.507 0.537 0.823 0.697 2.098 1.543 2.632zM19.784 27.853c0.771-0.817-0.747 0.049 0 0zM19.783 28.115c0.004-0.187-0.3 0.082-0 0zM18.333 27.121c0.697-0.585-0.675 0.26-0 0zM11.964 23.185c0.452 0.4 2.077 0.295 0.55 0.050-0.227-0.337-1.438-0.255-0.55-0.050zM7.327 20.39c-0.302-0.502-1.080-0.455 0 0zM6.513 19.855c-0.125-0.491-0.875-0.487 0-0zM18.624 27.462c0.406-0.394 0.016 0.629 0.675-0.096 0.006-0.519-0.021-0.825-0.757-0.195-0.202 0.112-0.292 0.591 0.082 0.291zM17.861 27.141c0.025-0.35-0.241 0.3 0-0zM10.438 22.644c1.762 0.567-0.864-0.695 0-0zM8.988 21.811c0.425 0.316 1.6 0.898 0.605 0.12 0.336-0.39-0.642-0.597-0.317-0.857-0.825-0.505-0.65-0.46-0.072-0.445-0.992-0.442 0.142-0.41 0.087-0.637-0.381-0.075-1.899-0.675-1.005 0.050-0.907-0.462-0.216 0.172-0.49 0.105-0.928-0.252 0.825 0.706-0.147 0.469 0.531 0.421 1.432 1.080 0.225 0.446-0.16 0.229 0.862 0.575 1.115 0.75zM11.726 23.628c0.769 0.2 0.765-0.119 0.069-0.212-0.375-0.35-1.557-0.719-0.5-0.044 0.071 0.177 0.294 0.174 0.43 0.257zM10.339 22.928c-0.16-0.139 0.020 0.087-0-0zM11.013 9.666c0.117-0.144 0.025 0.174-0-0zM10.61 12.069c-0.27-0.475 0.34-2.091 0.407-1.087-0.284 0.781-0.081 1.218 0.116 0.17 0.366-0.825-0.079 1.628-0.525 0.918zM10.218 12.706c-0.066-0.4 0.225 0.505 0 0zM10.459 13.343c-0.393-0.97 0.365 0.512-0-0zM10.623 13.706c-0.003-0.209 0.054 0.302-0-0zM7.795 12.132c0.257-0.542 0.475 0.604-0-0zM6.793 11.535c0.161-0.069 0.085 0.215-0-0zM11.076 14.879c0.146-1.18 0.129 0.691-0-0zM7.234 12.625c0.211-0.31-0.562-1.4 0.111-0.391 0.29 0.231 0.84 0.387 0.354 0.484 0.762 0.674-0.187 0.182-0.465-0.092zM11.296 15.203c0.055-1.037 0.31-0.619 0.002 0.147zM6.848 12.985c0.519-0.11 2.147 0.911 0.65 0.292-0.165-0.185-0.52-0.1-0.65-0.293zM11.586 16.261c0.162-0.577 0.012 0.381 0 0zM9.484 14.913c-0.082-1.012 0.184 0.167 0 0zM6.715 13.444c-0.871-1.203 2.533 1.216 0.559 0.305-0.206-0.054-0.455-0.075-0.559-0.305zM11.521 16.702c0.067-0.275 0.009 0.322 0 0zM11.771 16.95c0.060-0.641 0.124 0.437-0 0zM10.334 16.1c-0.587-0.352-0.154-2.479 0.046-1.025 0.571-0.185-0.031 0.75 0.394 0.742-0.066 0.591-0.257 0.804-0.437 0.282zM6.448 13.841c-1.357-1.207 1.706 0.632 0.221 0.225zM7.319 14.674c-0.41-0.771 0.5 0.322 0 0zM6.881 14.533c0.271-0.269 0.144 0.265 0 0zM6.169 14.552c-0.467-0.462-0.805-0.891 0.021-0.287 0.319 0.012-0.707-0.972 0.075-0.312 0.825 0.15 0.409 1.352-0.096 0.6zM7.524 15.601c0.27-0.569 0.457 0.792 0 0zM6.961 15.408c0.050-0.754 0.287 0.516 0 0zM8.215 16.271c-0.262-0.448-0.417-0.987-0.417-1.562 0-0.001 0-0.002 0-0.003v0c0.095 0.472 1.005 2.033 0.446 0.647-0.617-1.162 0.737 0.377 0.877 0.667 0.062 0.287-0.381-0.079-0.080 0.597-0.55-0.771-0.325 0.425-0.826-0.347zM12.271 18.977c-0.44-0.987 0.312-0.54 0.097 0.162zM9.919 18.222c-0.194-0.347 0.404 0.325 0 0zM12.658 20.128c0.168-0.63 0.198 0.53 0 0zM8.78 18.026c0.274-0.075 0.135 0.467 0 0zM13.653 21.39c-0.465-0.9 0.587 0.255 0 0zM14.056 21.931c-0.012-0.585 0.134 0.45 0 0zM18.687 25.45c0.231-0.014 0.008 0.175 0 0zM14.64 22.879c-0.37-0.387-0.466-1.112-0.066-0.481 0.205 0.082 0.656 1.183 0.066 0.481zM15.883 26.388c0.966-0.577 0.647 1.352 1.638 0.162 0.977-0.712-0.843 0.883 0.362 0.129 0.87-0.584 2.157 0.275 2.969 0.556 0.585-0.029 1.153 0.506 1.753 0.181 1.153-0.312-2.257-0.462-1.362-1.012-0.138 0.031-0.297 0.049-0.46 0.049-0.805 0-1.509-0.435-1.89-1.082l-0.006-0.010c-1.299-0.215-2.402-0.92-3.136-1.914l-0.009-0.013c-0.24-0.394 0.35 0.055-0.207-0.587-0.606-0.61-1.123-1.311-1.527-2.079l-0.023-0.047c-0.571-0.305-0.637-1.203-0.696-0.030 0.005-0.741-0.691-1.24-0.86-1.032-0.002-0.714 0.744-0.356 0.22-0.884-0.112-0.74-0.482-1.512-0.594-2.346-0.172-0.402-0.025-1.263-0.591-0.352-0.206 0.962-0.069-1.183 0.252-0.475 0.421-0.725-0.15-0.637-0.175-0.537 0.275-0.61 0.175-1.475-0.071-1.145 0.146-0.646 0.231-2.377-0.219-2.069 0.272-0.675 0.517-3.090-0.667-2.169-0.62 0.025-1.202 0.159-1.736 0.382l0.033-0.012c1.232 0.679-0.125 0.245-0.625 0.137-0.065 0.627-0.562 0.356-1.182 0.362 0.991 0.122-0.482 1.012-1.051 0.667-0.737 0.352 0.637 1.233 0.015 1.506 0.075 0.41-1.131-0.15-1.037 0.8-0.716-0.301-0.097 1.125 0.261 0.642 1.218 0.33 0.857 1.082 0.887 1.796-0.197 0.416-0.98-0.978-0.175-0.914-0.634-1.033-0.701-0.375-1.23 0.106-0.125 0.035 1.348 0.684 0.425 1.003 0.812 0.125 0.835 0.837 1 1.287 0.487 0.509 0.387-0.562 0.973 0.050-0.37-0.545-1.958-1.535-0.68-1.217-0.006-0.55-0.231-0.991 0.161-0.98 0.387-0.702-0.406 1.733 0.469 0.84 0.241-0.106 0.3-0.704 0.737 0.056 0.631 0.622 0.227 1.072-0.664 0.504 0.159 0.541 1.192 0.734 0.998 1.581 0.206 0.744 0.494 0.47 0.745 0.427 0.197 0.722 0.309 0.191 0.319-0.154 0.9 0.194 0.69 0.725 0.972 1.1 0.621 0.28-0.89-1.902 0.177-0.657 1.122 1.012 0.421 1.437-0.587 1.275 0.637-0.051 0.844 0.862 1.641 0.83 0.727 0.346 1.218 1.675-0.034 1.121-0.435-0.391-1.974-0.875-0.716-0.13 1.282 0.525 2.335 1.039 3.35 1.611l-0.15-0.077c0.8 0.572 1.147 1.227 1.45 1.357-0.672 0.321-2.028-0.257-1.021-0.435-0.629-0.114-1.335-0.431-0.734 0.35 0.512 0.429 1.812 0.382 2.046 0.431-0.199 0.435-0.537 0.47 0.008 0.504-0.607 0.325 0.195 0.375 0.251 0.56zM12.289 24.179c1.033 0.132-1.231-0.704-0.226-0.075zM15.045 26.050c0.897-0.356-0.875-0.175 0 0zM9.746 22.754c0.575-0.062-0.925-0.389 0 0zM12.877 24.744c0.075-0.319-0.66-0.096 0 0zM17.456 27.709c-0.012-0.246-0.229 0.094 0 0zM13.25 25.129c-0.142-0.162-0.068 0.035 0 0zM6.493 20.836c-0.096-0.371-0.842-0.667 0 0zM9.067 22.501c0.775-0.046-1.060-0.341 0 0zM11.239 24.068c-0.080-0.239-0.42-0.010 0 0zM17.025 27.637c0.035-0.454-0.441 0.337 0 0zM8.94 22.657c-0.052-0.25-0.332 0.023 0 0zM14.743 26.356c1.35 0.012-1.218-0.184 0 0zM12.277 24.931c1.425 0.404-1.197-0.9-0.351-0.147l0.187 0.085 0.162 0.062zM13.507 25.91c0.241-0.412-1.018-0.237 0 0zM9.458 23.438c0.582 0.447 2.349 0.057 0.892-0.266-0.662-0.354-2.158-0.595-1.14 0.212zM12.687 25.653c0.537-0.202-0.87-0.204 0 0zM11.48 24.912c0.375-0.262-0.776-0.2 0 0zM10.043 24.075c-0.050-0.209-0.77-0.231 0 0zM14.943 27.892c0.496 0.312 2.899 0.687 1.393 0.129-0.25 0.052-2.787-0.717-1.395-0.129zM11.856 25.965c-0.017-0.207-0.22 0.094 0 0zM11.239 25.657c0.609-0.394-0.787-0.005 0 0zM13.947 27.548c0.239-0.352-0.762-0.134 0 0zM12.538 26.761c0.39-0.375-0.605-0.235 0 0zM11.714 26.417c-0.067-0.331-0.3 0.185 0 0zM11.056 26.177c0.269-0.12-0.387-0.15 0 0zM6.115 21.807c0.041-0.182 0.221 0.396 0 0zM9.606 25.64c1.212 0.449-0.005-0.852-0.562-0.777-0.245-0.426-0.938-0.696-0.45-0.925-0.88 0.305-0.921-1.162-1.337-0.953-0.93-0.294-0.362-1.337-1.47-1.974-0.101-0.675-1.102-1.26-1.422-2.277-0.141-0.52-1.131-2.016-0.522-0.625 0.648 1.386 1.378 2.579 2.221 3.68l-0.034-0.047c0.545 1.179 1.346 2.158 2.336 2.898l0.020 0.014c0.362 0.348 0.71 0.879 1.221 0.987zM11.985 27.322c1.11 0.571 2.398 1.016 3.753 1.268l0.088 0.014c1.303 0.299 2.799 0.47 4.336 0.47 0.798 0 1.586-0.046 2.36-0.136l-0.094 0.009c-0.987-0.446-2.009 0.175-2.993-0.319-0.35 0.040-0.756 0.062-1.167 0.062-0.879 0-1.734-0.103-2.553-0.298l0.075 0.015c-1.631-0.594-2.987-1.206-4.292-1.902l0.179 0.087c-1.596-0.582 0.825 0.747 1.256 0.856 0.997 0.566-1.096-0.291-1.392-0.526-0.835-0.469-0.942-0.371-0.082 0.105 0.174 0.1 0.345 0.207 0.525 0.294zM9.967 26.447c-1.228-0.845-2.28-1.828-3.171-2.945l-0.023-0.029c-1.676-2.057-3.041-4.451-3.971-7.051l-0.053-0.168c-0.557-1.693-0.75-3.509-1.467-5.136-0.145-0.266-0.23-0.583-0.23-0.92 0-0.972 0.711-1.779 1.641-1.928l0.011-0.001c0.575-0.109 1.59-0.652 0.366-0.264-1.097 0.805-1.203-0.731-0.079-0.827 0.489-0.005 0.884-0.402 0.884-0.892 0-0.147-0.036-0.286-0.099-0.409l0.002 0.005c-0.825-0.537 1.999-1.128 0.579-1.929-1.478-1.598 2.071-1.904 1.196-0.092-0.209 1.393 2.479-0.256 1.856 1.353 0.634 0.774 2.374 0.175 2.331 1.261 0.925 0.062 1.241 0.84 2.108 0.9 0.9 0.406 2.527 0.725 2.832 1.737-0.891 0.707-2.954-1.456-3.053 0.497 0.023 3.075 0.48 6.034 1.312 8.832l-0.057-0.225c0.67 1.664 1.62 3.085 2.804 4.271l-0-0c1.079 1.202 2.376 2.182 3.834 2.884l0.074 0.032c1.16 0.548 2.508 0.98 3.918 1.228l0.097 0.014c0.56-0.429 1.55-2.021 2.422-1.35 0.041 0.755-1.735 1.578-0.084 1.495 0.97-0.292 1.642 0.75 2.441-0.19 0.735 0.871 3.057-0.557 2.533 1.225-0.707 0.455-1.739 0.18-2.448 0.807-1.168-0.584-2.099 0.522-3.393 0.382-1.271 0.231-2.734 0.363-4.228 0.363-0.044 0-0.089-0-0.133-0l0.007 0c-2.548-0.045-4.986-0.444-7.29-1.149l0.187 0.049c-1.394-0.471-2.603-1.091-3.7-1.86l0.046 0.031z"/> </g>

</svg>
  </div> 

   </div>
 

          </div>
          <div className="bg-background relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  lg:min-w-[32rem] ">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span>

            {/* Inner Circles */}
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={60}
            >
              <Icons.node />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={60}
            >
              <Icons.mongodb />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={15}
              radius={60}
            >
              <Icons.express />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={5}
              radius={60}
            >
              <Icons.angular />
            </OrbitingCircles>
            {/* Outer Circles (reverse) */}
            <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={20}
              radius={140}
            >
              <Icons.laravel />
            </OrbitingCircles>
            <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={10}
              radius={140}
            >
              <Icons.wordpress />
            </OrbitingCircles>
            <OrbitingCircles
              reverse
              className="h-[40px] w-[40px] border-none bg-transparent"
              duration={20}
              delay={15}
              radius={140}
            >
              <Icons.dj />
            
            </OrbitingCircles>
            <OrbitingCircles
              reverse
              className="h-[45px] w-[45px] border-none bg-transparent"
              duration={20}
              delay={5}
              radius={140}
            >
              <Icons.net />
            </OrbitingCircles>

            {/* 3rd round  */}
            {/* <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={240}
      >
        <Icons.node />
      </OrbitingCircles>
      <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={240}
      >
        <Icons.mongodb />
      </OrbitingCircles>
<OrbitingCircles

        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={240}
      >
        <Icons.express />
      </OrbitingCircles>
      <OrbitingCircles
      
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={20}
        delay={25}
        radius={240}
      >
        <Icons.react />
      </OrbitingCircles> */}
          </div>
          <div className="bg-transparent p-6 lg:hidden lg:p-10">
            <h1 className="text-balance from-white from-30% to-white/40 py-6 text-center text-5xl font-medium leading-none tracking-tighter text-black dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
            Frameworks
            </h1>
            <p className="text-justify font-mono text-lg font-medium text-gray-600 dark:text-gray-400">
            Our professionals specialize in utilizing versatile frameworks, enabling the creation of dynamic and feature-rich applications tailored to your specific needs and objectives. 
            </p>

            {/* <div className="flex justify-center mt-4">

            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="M0 0h32v32H0z"></path> <path fill="#70AD51" d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z"></path> </g> </g></svg>
  </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

const Icons = {
  react: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">

    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" stroke-width="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
  ),
  mongodb: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 32 32"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#00ED64"/><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#00ba4e"/><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/></svg>
  ),
  node: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" fill="#8cc84b"><path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"/></svg>
  ),
  express: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#0F0F0F" d="M228 182.937a12.732 12.732 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.289 13.289 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.952 11.952 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.558 5.558 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433ZM28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.864 33.864 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.145 45.145 0 0 1-21.573 32.972a52.263 52.263 0 0 1-60.884-7.784a54.767 54.767 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A860.69 860.69 0 0 1 28 124.5Zm9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869l.056.111Z"/></g></svg>
  ),
  woo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1494" viewBox="0 0 256 153" preserveAspectRatio="xMidYMid"><path d="M23.759 0h208.378C245.325 0 256 10.675 256 23.863v79.541c0 13.188-10.675 23.863-23.863 23.863H157.41l10.257 25.118-45.109-25.118H23.863c-13.187 0-23.862-10.675-23.862-23.863V23.863C-.104 10.78 10.57 0 23.759 0z" fill="#7f54b3"/><path d="M14.578 21.75c1.457-1.978 3.642-3.018 6.556-3.226 5.308-.417 8.326 2.08 9.054 7.492 3.226 21.75 6.764 40.17 10.51 55.259l22.79-43.395c2.082-3.955 4.684-6.036 7.806-6.244 4.579-.312 7.388 2.601 8.533 8.741 2.602 13.84 5.932 25.6 9.886 35.59 2.706-26.432 7.285-45.476 13.737-57.235 1.56-2.914 3.85-4.371 6.868-4.58 2.394-.207 4.579.521 6.556 2.082 1.977 1.561 3.018 3.538 3.226 5.932.104 1.873-.208 3.434-1.04 4.995-4.059 7.493-7.39 20.085-10.095 37.567-2.601 16.963-3.538 30.18-2.914 39.65.209 2.6-.208 4.89-1.248 6.868-1.25 2.289-3.122 3.538-5.516 3.746-2.706.208-5.515-1.04-8.221-3.85-9.678-9.887-17.379-24.664-22.998-44.332-6.765 13.32-11.76 23.31-14.986 29.97-6.14 11.76-11.343 17.796-15.714 18.108-2.81.208-5.203-2.186-7.284-7.18-5.307-13.633-11.031-39.962-17.17-78.986-.417-2.706.207-5.1 1.664-6.972zm223.636 16.338c-3.746-6.556-9.262-10.51-16.65-12.072-1.978-.416-3.85-.624-5.62-.624-9.99 0-18.107 5.203-24.455 15.61-5.412 8.845-8.117 18.627-8.117 29.346 0 8.013 1.665 14.881 4.995 20.605 3.746 6.556 9.262 10.51 16.65 12.071 1.977.417 3.85.625 5.62.625 10.094 0 18.211-5.203 24.455-15.61 5.411-8.95 8.117-18.732 8.117-29.45.104-8.117-1.665-14.882-4.995-20.501zm-13.112 28.826c-1.457 6.868-4.059 11.967-7.91 15.401-3.017 2.706-5.827 3.85-8.428 3.33-2.498-.52-4.58-2.705-6.14-6.764-1.25-3.226-1.873-6.452-1.873-9.47 0-2.601.208-5.203.728-7.596.937-4.267 2.706-8.43 5.515-12.384 3.435-5.1 7.077-7.18 10.823-6.452 2.498.52 4.58 2.706 6.14 6.764 1.249 3.226 1.873 6.452 1.873 9.47 0 2.706-.208 5.307-.728 7.7zm-52.033-28.826c-3.746-6.556-9.366-10.51-16.65-12.072-1.977-.416-3.85-.624-5.62-.624-9.99 0-18.107 5.203-24.455 15.61-5.411 8.845-8.117 18.627-8.117 29.346 0 8.013 1.665 14.881 4.995 20.605 3.746 6.556 9.262 10.51 16.65 12.071 1.978.417 3.85.625 5.62.625 10.094 0 18.211-5.203 24.455-15.61 5.412-8.95 8.117-18.732 8.117-29.45 0-8.117-1.665-14.882-4.995-20.501zm-13.216 28.826c-1.457 6.868-4.059 11.967-7.909 15.401-3.018 2.706-5.828 3.85-8.43 3.33-2.497-.52-4.578-2.705-6.14-6.764-1.248-3.226-1.872-6.452-1.872-9.47 0-2.601.208-5.203.728-7.596.937-4.267 2.706-8.43 5.516-12.384 3.434-5.1 7.076-7.18 10.822-6.452 2.498.52 4.58 2.706 6.14 6.764 1.25 3.226 1.873 6.452 1.873 9.47.105 2.706-.208 5.307-.728 7.7z" fill="#FFF"/></svg>
  ),
  wix: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width="75" height="30" viewBox="0 0 75 30" fill="none"><g fill="#00FFFF" clip-path="url(#Logo_svg__a)"><path d="M75 0h-4.142c-1.15 0-2.224.57-2.87 1.52l-5.54 8.174a.372.372 0 0 1-.615 0l-5.54-8.173A3.46 3.46 0 0 0 53.424 0h-4.143l9.87 14.56-9.815 14.477h4.143c1.149 0 2.223-.569 2.868-1.52l5.486-8.093a.372.372 0 0 1 .616 0l5.485 8.093a3.46 3.46 0 0 0 2.87 1.52h4.142L65.131 14.56zM40.758 2.97v26.067h1.98a2.97 2.97 0 0 0 2.97-2.97V0h-1.98a2.97 2.97 0 0 0-2.97 2.97M37.126 0h-1.762a4.15 4.15 0 0 0-4.051 3.233l-3.942 17.328-3.45-16.175c-.638-2.99-3.706-5.006-6.845-4.139-1.999.552-3.481 2.241-3.914 4.27L9.747 20.54 5.813 3.234A4.16 4.16 0 0 0 1.76 0H0l6.604 29.036h2.502a4.81 4.81 0 0 0 4.706-3.808l4.221-19.81a.54.54 0 0 1 .523-.424c.25 0 .471.178.523.423l4.226 19.812a4.81 4.81 0 0 0 4.706 3.807h2.51z"></path></g><defs><clipPath id="Logo_svg__a"><path fill="#ffffff" d="M0 0h75v29.037H0z"></path></clipPath></defs></svg>
  ),
  net: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" height="64" width="64"><defs><clipPath id="A"><path d="M166.826 402.017c5.768-17.646 7.956-49.126 24.83-49.126 1.284 0 2.582.126 3.886.374-15.34 3.576-17.16 34.714-26.52 50.838a72.74 72.74 0 0 1-2.197-2.086"/></clipPath><clipPath id="B"><path d="M195.484 352.88h-28.716v51.212h28.716V352.88z"/></clipPath><clipPath id="C"><path d="M195.484 404.093V352.88h-28.716v51.212h28.716z"/></clipPath><clipPath id="D"><path d="M169.023 404.103c9.36-16.124 11.178-47.262 26.52-50.838 1.203.222 2.413.556 3.623.98-13.77 6.747-17.576 36.98-28.205 51.537-.644-.536-1.3-1.095-1.937-1.678"/></clipPath><clipPath id="E"><path d="M199.257 353.196h-30.14v52.517h30.14v-52.517z"/></clipPath><clipPath id="F"><path d="M199.257 405.713v-52.517h-30.14v52.517h30.14z"/></clipPath><clipPath id="G"><path d="M141.147 415.526h89.5v-31.384h-89.5v31.384z"/></clipPath><clipPath id="H"><path d="M140.174 416.526h91.464v-33.374h-91.464v33.374z"/></clipPath><clipPath id="I"><path d="M141.147 384.142h89.48v31.373h-89.48v-31.373z"/></clipPath><clipPath id="J"><path d="M141.147 415.526h89.5v-31.384h-89.5v31.384z"/></clipPath><clipPath id="K"><path d="M141.147 384.142h89.48v31.373h-89.48v-31.373z"/></clipPath><clipPath id="L"><path d="M141.162 415.515h89.462v-31.373h-89.462v31.373z"/></clipPath><clipPath id="M"><path d="M230.638 384.152h-89.464v31.374h89.464v-31.374z"/></clipPath><clipPath id="N"><path d="M230.638 415.526v-31.374h-89.464v31.374h89.464z"/></clipPath><linearGradient id="O" spreadMethod="pad" y2="384.152" x2="185.906" y1="415.525" x1="185.906" href="#CP"><stop offset="0" stop-color="#231f20"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="P" height="1" width="1" y="0" x="0" maskUnits="userSpaceOnUse"><g clip-path="url(#G)"><g clip-path="url(#H)"><g clip-path="url(#I)"><g clip-path="url(#J)"><g clip-path="url(#K)"><g clip-path="url(#L)"><g clip-path="url(#M)"><g clip-path="url(#N)"><path d="M230.638 384.152h-89.464v31.374h89.464v-31.374z" fill="url(#O)" stroke="none"/></g></g></g></g></g></g></g></g></mask><clipPath id="Q"><path d="M185.528 413.668h28.657V360.46h-28.657v53.207z"/></clipPath><clipPath id="R"><path d="M185.532 360.462h28.6v53.206h-28.6v-53.206z"/></clipPath><clipPath id="S"><path d="M209.912 360.462l4.235 3.7c-5.864 17.564-7.963 49.496-24.955 49.496a19.81 19.81 0 0 1-3.664-.343c15.477-3.846 17.46-37.523 24.384-52.863"/></clipPath><clipPath id="T"><path d="M185.566 413.666h28.62V360.46h-28.62v53.205z"/></clipPath><clipPath id="U"><path d="M185.566 360.46v53.205h28.62V360.46h-28.62z"/></clipPath><clipPath id="V"><path d="M141.147 415.526h89.5v-31.384h-89.5v31.384z"/></clipPath><clipPath id="W"><path d="M140.174 416.526h91.464v-33.374h-91.464v33.374z"/></clipPath><clipPath id="X"><path d="M141.147 384.142h89.48v31.373h-89.48v-31.373z"/></clipPath><clipPath id="Y"><path d="M141.147 415.526h89.5v-31.384h-89.5v31.384z"/></clipPath><clipPath id="Z"><path d="M141.147 384.142h89.48v31.373h-89.48v-31.373z"/></clipPath><clipPath id="a"><path d="M141.162 415.515h89.462v-31.373h-89.462v31.373z"/></clipPath><clipPath id="b"><path d="M230.638 384.152h-89.464v31.374h89.464v-31.374z"/></clipPath><clipPath id="c"><path d="M230.638 415.526v-31.374h-89.464v31.374h89.464z"/></clipPath><mask id="d" height="1" width="1" y="0" x="0" maskUnits="userSpaceOnUse"><g clip-path="url(#V)"><g clip-path="url(#W)"><g clip-path="url(#X)"><g clip-path="url(#Y)"><g clip-path="url(#Z)"><g clip-path="url(#a)"><g clip-path="url(#b)"><g clip-path="url(#c)"><path d="M230.638 384.152h-89.464v31.374h89.464v-31.374z" fill="url(#O)" stroke="none"/></g></g></g></g></g></g></g></g></mask><clipPath id="e"><path d="M182.5 413.692h6.682v-.367H182.5v.367z"/></clipPath><clipPath id="f"><path d="M182.52 413.325h6.668v.367h-6.668v-.367z"/></clipPath><clipPath id="g"><path d="M181.57 412.222c13.863-7.25 15.067-40.086 26.13-53.42.74.522 1.475 1.076 2.2 1.66-6.923 15.34-8.905 49.02-24.38 52.863-1.322-.246-2.64-.6-3.96-1.103"/></clipPath><clipPath id="h"><path d="M209.982 358.734h-28.34v54.526h28.34v-54.526z"/></clipPath><clipPath id="i"><path d="M209.982 413.26v-54.526h-28.34v54.526h28.34z"/></clipPath><clipPath id="j"><path d="M170.96 405.78c10.63-14.556 14.435-44.8 28.205-51.537 2.83.998 5.678 2.532 8.535 4.557-11.063 13.335-12.267 46.17-26.13 53.42-3.52-1.308-7.054-3.488-10.6-6.44"/></clipPath><clipPath id="k"><path d="M207.683 354.228h-36.74v57.98h36.74v-57.98z"/></clipPath><clipPath id="l"><path d="M207.683 412.207v-57.98h-36.74v57.98h36.74z"/></clipPath><clipPath id="m"><path d="M107.023 417.34h89.588v-76.127h-89.588v76.127z"/></clipPath><clipPath id="n"><path d="M106.14 418.335h91.47v-78.123h-91.47v78.123z"/></clipPath><clipPath id="o"><path d="M107.028 341.218h89.456v76.12h-89.456v-76.12z"/></clipPath><clipPath id="p"><path d="M107.023 417.34h89.588v-76.127h-89.588v76.127z"/></clipPath><clipPath id="q"><path d="M107.028 341.218h89.456v76.12h-89.456v-76.12z"/></clipPath><clipPath id="r"><path d="M196.495 341.218h-89.472v76.12h89.472v-76.12z"/></clipPath><clipPath id="s"><path d="M107.14 417.335h89.47v-76.122h-89.47v76.122z"/></clipPath><clipPath id="t"><path d="M107.14 341.213v76.123h89.47v-76.123h-89.47z"/></clipPath><linearGradient id="u" spreadMethod="pad" y2="417.334" x2="151.875" y1="341.213" x1="151.875" href="#CP"><stop offset="0" stop-color="#231f20"/><stop offset=".462" stop-color="#231f20"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="v" height="1" width="1" y="0" x="0" maskUnits="userSpaceOnUse"><g clip-path="url(#m)"><g clip-path="url(#n)"><g clip-path="url(#o)"><g clip-path="url(#p)"><g clip-path="url(#q)"><g clip-path="url(#r)"><g clip-path="url(#s)"><g clip-path="url(#t)"><path d="M107.14 417.335h89.47v-76.122h-89.47v76.122z" fill="url(#u)" stroke="none"/></g></g></g></g></g></g></g></g></mask><clipPath id="w"><path d="M154.597 406.73h12.227v-19.47h-12.227v19.47z"/></clipPath><clipPath id="x"><path d="M154.605 387.26h12.206v19.472h-12.206V387.26z"/></clipPath><clipPath id="y"><path d="M204.64 416.495h89.5v-54.65h-89.5v54.65z"/></clipPath><clipPath id="z"><path d="M203.64 417.495h91.47v-56.65h-91.47v56.65z"/></clipPath><clipPath id="AA"><path d="M204.647 361.844h89.482v54.648h-89.482v-54.648z"/></clipPath><clipPath id="AB"><path d="M204.64 416.495h89.5v-54.65h-89.5v54.65z"/></clipPath><clipPath id="AC"><path d="M204.647 361.844h89.482v54.648h-89.482v-54.648z"/></clipPath><clipPath id="AD"><path d="M204.657 416.492h89.47v-54.648h-89.47v54.648z"/></clipPath><clipPath id="AE"><path d="M294.1 361.846h-89.47v54.65h89.47v-54.65z"/></clipPath><clipPath id="AF"><path d="M294.1 416.495v-54.65h-89.47v54.65h89.47z"/></clipPath><linearGradient id="AG" spreadMethod="pad" y2="361.846" x2="249.375" y1="416.494" x1="249.375" href="#CP"><stop offset="0" stop-color="#2e2a2b"/><stop offset=".731" stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="AH" height="1" width="1" y="0" x="0" maskUnits="userSpaceOnUse"><g clip-path="url(#y)"><g clip-path="url(#z)"><g clip-path="url(#AA)"><g clip-path="url(#AB)"><g clip-path="url(#AC)"><g clip-path="url(#AD)"><g clip-path="url(#AE)"><g clip-path="url(#AF)"><path d="M294.1 361.846h-89.47v54.65h89.47v-54.65z" fill="url(#AG)" stroke="none"/></g></g></g></g></g></g></g></g></mask><clipPath id="AI"><path d="M221.458 415.068h49.877v-62.164h-49.877v62.164z"/></clipPath><clipPath id="AJ"><path d="M221.504 352.904h49.826v62.132h-49.826v-62.132z"/></clipPath><clipPath id="AK"><path d="M262.806 415.036c-7.84-30.236-24.22-54.525-37.95-60.648-.008-.006-.02-.01-.023-.01a21.68 21.68 0 0 0-.742-.316c-.032-.01-.062-.024-.1-.036-.07-.03-.14-.052-.2-.08-.033-.008-.064-.025-.093-.037l-.345-.123c-.048-.015-.095-.033-.14-.048-.053-.014-.1-.038-.17-.056-.05-.022-.105-.037-.163-.058-.05-.015-.102-.027-.146-.048-.1-.03-.194-.054-.294-.087-.043-.01-.08-.025-.124-.035-.062-.018-.133-.035-.198-.053-.048-.012-.086-.025-.134-.035-.07-.023-.148-.04-.216-.058l-.264-.055a5.53 5.53 0 0 1 1.964-.347c13.022 0 26.147 23.333 47.87 62.132h-8.53z"/></clipPath><clipPath id="AL"><path d="M221.457 415.068h49.83v-62.132h-49.83v62.132z"/></clipPath><clipPath id="AM"><path d="M221.458 352.935v62.133h49.83v-62.133h-49.83z"/></clipPath><clipPath id="AN"><path d="M85.885 420.357h89.473v-76.144H85.885v76.144z"/></clipPath><clipPath id="AO"><path d="M84.892 421.33h91.466v-78.117H84.892v78.117z"/></clipPath><clipPath id="AP"><path d="M85.887 344.24h89.457v76.116H85.887V344.24z"/></clipPath><clipPath id="AQ"><path d="M85.885 420.357h89.473v-76.144H85.885v76.144z"/></clipPath><clipPath id="AR"><path d="M85.887 344.24h89.457v76.116H85.887V344.24z"/></clipPath><clipPath id="AS"><path d="M175.35 344.24H85.885v76.116h89.466V344.24z"/></clipPath><clipPath id="AT"><path d="M85.892 420.33h89.466v-76.117H85.892v76.117z"/></clipPath><clipPath id="AU"><path d="M85.892 344.213v76.118h89.467v-76.118H85.892z"/></clipPath><linearGradient id="AV" spreadMethod="pad" y2="420.329" x2="130.625" y1="344.213" x1="130.625" href="#CP"><stop offset="0" stop-color="#231f20"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="AW" height="1" width="1" y="0" x="0" maskUnits="userSpaceOnUse"><g clip-path="url(#AN)"><g clip-path="url(#AO)"><g clip-path="url(#AP)"><g clip-path="url(#AQ)"><g clip-path="url(#AR)"><g clip-path="url(#AS)"><g clip-path="url(#AT)"><g clip-path="url(#AU)"><path d="M85.892 420.33h89.466v-76.117H85.892v76.117z" fill="url(#AV)" stroke="none"/></g></g></g></g></g></g></g></g></mask><clipPath id="AX"><path d="M111.2 413.692h45.352V351.26H111.2v62.433z"/></clipPath><clipPath id="AY"><path d="M111.217 351.26h45.347v62.434h-45.347V351.26z"/></clipPath><clipPath id="AZ"><path d="M120.886 365.985c13.37 25.763 19.705 42.07 30.884 46.48-11.526-4.512-24.5-21.528-30.884-46.48"/></clipPath><clipPath id="Aa"><path d="M120.87 412.433h30.885V365.95H120.87v46.482z"/></clipPath><clipPath id="Ab"><path d="M120.87 365.952v46.48h30.885v-46.48H120.87z"/></clipPath><clipPath id="Ac"><path d="M64.298 437.096h135.628v-137.4H64.298v137.4z"/></clipPath><clipPath id="Ad"><path d="M63.298 438.096h137.628v-139.4H63.298v139.4z"/></clipPath><clipPath id="Ae"><path d="M98.22 328.665h67.698v79.73H98.22v-79.73z"/></clipPath><clipPath id="Af"><path d="M64.298 437.096h135.628v-137.4H64.298v137.4z"/></clipPath><clipPath id="Ag"><path d="M98.22 328.665h67.698v79.73H98.22v-79.73z"/></clipPath><clipPath id="Ah"><path d="M98.234 346.8l32.406-18.126 35.3 61.6-32.403 18.132-35.294-61.605z"/></clipPath><clipPath id="Ai"><path d="M199.926 389.262l-50.094-89.575-85.534 47.834 50.093 89.575 85.535-47.834z"/></clipPath><clipPath id="Aj"><path d="M199.926 389.262l-50.093-89.575-85.535 47.834 50.093 89.575 85.535-47.834z"/></clipPath><linearGradient id="Ak" spreadMethod="pad" y2="289.807" x2="88.162" y1="393.9" x1="146.375" href="#CP"><stop offset="0" stop-color="#231f20"/><stop offset=".129" stop-color="#fff"/><stop offset=".4" stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="Al" height="1" width="1" y="0" x="0" maskUnits="userSpaceOnUse"><g clip-path="url(#Ac)"><g clip-path="url(#Ad)"><g clip-path="url(#Ae)"><g clip-path="url(#Af)"><g clip-path="url(#Ag)"><g clip-path="url(#Ah)"><g clip-path="url(#Ai)"><g clip-path="url(#Aj)"><path d="M199.926 389.262l-50.094-89.575-85.534 47.834 50.093 89.575 85.535-47.834z" fill="url(#Ak)" stroke="none"/></g></g></g></g></g></g></g></g></mask><clipPath id="Am"><path d="M125.885 387.26h28.722V351.3h-28.722v35.97z"/></clipPath><clipPath id="An"><path d="M125.895 351.3h28.7v35.97h-28.7V351.3z"/></clipPath><clipPath id="Ao"><path d="M126.956 351.382l-.242-.028c-.02-.004-.032-.004-.047-.007l-.206-.02c-.01 0-.023-.003-.033-.003l-.493-.035h-.05c13.532.38 19.718 7.154 22.785 16.98l5.93 19c-5.668-7.977-11.362-17.484-17.087-28.14-2.76-5.135-6.96-7.28-10.557-7.737"/></clipPath><clipPath id="Ap"><path d="M125.894 387.258h28.714v-35.97h-28.714v35.97z"/></clipPath><clipPath id="Aq"><path d="M125.893 351.287v35.97h28.714v-35.97h-28.714z"/></clipPath><clipPath id="Ar"><path d="M126.956 351.387v-.005c3.598.458 7.798 2.6 10.557 7.737 5.725 10.65 11.422 20.163 17.082 28.14 2.062 6.468 3.76 11.417 5.43 15.182-11.286-10.742-22.617-28.606-33.068-51.054"/></clipPath><clipPath id="As"><path d="M127.028 402.367h33.068v-51.06h-33.068v51.06z"/></clipPath><clipPath id="At"><path d="M127.028 351.307v51.06h33.068v-51.06h-33.068z"/></clipPath><clipPath id="Au"><path d="M156.1 413.58c-.04-.008-.07-.01-.1-.013-.06-.012-.125-.023-.188-.028l-.113-.012-.2-.035c-.032-.002-.063-.008-.088-.01l-.435-.077c-.018-.003-.036-.008-.05-.008l-.2-.04-.106-.03-.205-.04-.096-.023-.717-.186c-.02-.008-.053-.014-.083-.025-.07-.017-.14-.042-.216-.066l-.098-.027-.215-.065c-.026-.007-.05-.02-.075-.02l-.497-.172-.24-.086-.096-.04c-.072-.02-.146-.05-.2-.075-.023-.012-.052-.022-.07-.035-11.18-4.412-17.514-20.718-30.884-46.48a123.95 123.95 0 0 1-2.819-14.716h.717l6.663.01h.063l.425.01.493.035c.01 0 .023.003.03.003.07.01.14.015.206.02.018.003.028.003.05.007.073.007.16.016.242.028v.005c10.45 22.448 21.782 40.312 33.068 51.054 1.242 2.813 2.464 4.96 3.805 6.585-.785 1.326-1.642 2.43-2.6 3.236-.01.005-.02.008-.028.018-.052.022-.105.047-.158.075a3.34 3.34 0 0 1-.158.081c-.05.02-.106.047-.154.075a.94.94 0 0 0-.18.08c-.05.016-.093.04-.14.06a6.14 6.14 0 0 0-.297.123l-.126.05a2.23 2.23 0 0 0-.22.087c-.038.01-.078.026-.12.038-.106.035-.206.073-.304.106-.017.005-.023.005-.027.01-.12.037-.235.067-.355.1-.028.013-.05.018-.08.026-.106.028-.2.058-.296.084-.025.003-.05.01-.07.016a9.25 9.25 0 0 1-.744.163c-.023.002-.053.01-.078.016l-.322.05c-.02.01-.04.01-.063.014l-.383.05c-.02.003-.042.008-.067.008-.1.016-.196.023-.292.032-.163-.012-.316-.027-.47-.042"/></clipPath><clipPath id="Av"><path d="M119.313 343.45l-12.043 68.3 55.044 9.705 12.043-68.3-55.044-9.706z"/></clipPath><clipPath id="Aw"><path d="M119.313 343.45l-12.043 68.3 55.043 9.706 12.043-68.3-55.044-9.706z"/></clipPath><clipPath id="Ax"><path d="M232.177 398.296l-6.468-20.63c7.06 9.714 14.012 21.93 20.63 36.033-7.72-2.427-11.84-7.976-14.163-15.402"/></clipPath><clipPath id="Ay"><path d="M225.748 413.707h20.63v-36.032h-20.63v36.032z"/></clipPath><clipPath id="Az"><path d="M225.748 377.675v36.033h20.63v-36.033h-20.63z"/></clipPath><clipPath id="BA"><path d="M207.146 420.525h89.495v-31.198h-89.495v31.198z"/></clipPath><clipPath id="BB"><path d="M206.17 421.525h91.47V388.35h-91.47v33.176z"/></clipPath><clipPath id="BC"><path d="M207.146 389.327h89.48v31.176h-89.48v-31.176z"/></clipPath><clipPath id="BD"><path d="M207.146 420.525h89.495v-31.198h-89.495v31.198z"/></clipPath><clipPath id="BE"><path d="M207.146 389.327h89.48v31.176h-89.48v-31.176z"/></clipPath><clipPath id="BF"><path d="M207.146 420.503h89.472v-31.176h-89.472v31.176z"/></clipPath><clipPath id="BG"><path d="M296.64 389.35h-89.47v31.176h89.47V389.35z"/></clipPath><clipPath id="BH"><path d="M296.64 420.525V389.35h-89.47v31.176h89.47z"/></clipPath><linearGradient id="BI" spreadMethod="pad" y2="389.349" x2="251.906" y1="420.525" x1="251.906" href="#CP"><stop offset="0" stop-color="#231f20"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="BJ" height="1" width="1" y="0" x="0" maskUnits="userSpaceOnUse"><g clip-path="url(#BA)"><g clip-path="url(#BB)"><g clip-path="url(#BC)"><g clip-path="url(#BD)"><g clip-path="url(#BE)"><g clip-path="url(#BF)"><g clip-path="url(#BG)"><g clip-path="url(#BH)"><path d="M296.64 389.35h-89.47v31.176h89.47V389.35z" fill="url(#BI)" stroke="none"/></g></g></g></g></g></g></g></g></mask><clipPath id="BK"><path d="M214.456 421.616h58.7v-73.628h-58.7v73.628z"/></clipPath><clipPath id="BL"><path d="M224.852 354.388h37.957v60.648h-37.957v-60.648z"/></clipPath><clipPath id="BM"><path d="M225.933 354.903l-1.076-.515c13.73 6.123 30.108 30.412 37.95 60.648h-1.6c-18.014-32.18-23.808-53.72-35.283-60.133"/></clipPath><clipPath id="BN"><path d="M273.147 413.298l-11.516-65.3-47.175 8.318 11.516 65.3 47.175-8.318z"/></clipPath><clipPath id="BO"><path d="M273.147 413.298l-11.516-65.3-47.175 8.318 11.516 65.3 47.175-8.318z"/></clipPath><clipPath id="BP"><path d="M256.184 415.036h-6.678c-.225 0-.445-.005-.665-.008l-.628-.007h-.015l-1.267-.06-.6-1.262c-6.62-14.102-13.572-26.32-20.63-36.033-3.32-10.214-5.754-16.413-8.74-20.06 1.278-2.177 2.76-3.708 4.53-4.36.052.017.092.024.137.033.01.007.02.007.03.007.03.005.063.018.095.02.073.017.15.033.22.058l.134.035c.065.018.136.035.198.05.04.018.08.027.124.037.103.033.195.055.294.087.044.02.093.036.146.048.055.02.113.036.163.06.06.018.118.03.17.053.046.012.096.033.14.053.115.04.228.075.347.12.03.01.06.028.093.034.07.03.143.05.2.084.028.01.058.023.1.033a21.68 21.68 0 0 1 .742.316c.002 0 .015.005.023.01.357.158.716.332 1.073.515 11.478 6.412 17.272 27.952 35.286 60.133h-5.032z"/></clipPath><clipPath id="BQ"><path d="M261.187 353.24h-44.25v61.8h44.25v-61.8z"/></clipPath><clipPath id="BR"><path d="M261.187 415.03v-61.8h-44.25v61.8h44.25z"/></clipPath><clipPath id="BS"><path d="M143.566 416.188h37.986v-8.76h-37.986v8.76z"/></clipPath><clipPath id="BT"><path d="M142.566 417.18h39.976v-10.752h-39.976v10.752z"/></clipPath><clipPath id="BU"><path d="M143.568 407.435h37.98v8.753h-37.98v-8.753z"/></clipPath><clipPath id="BV"><path d="M143.566 416.188h37.986v-8.76h-37.986v8.76z"/></clipPath><clipPath id="BW"><path d="M143.568 407.435h37.98v8.753h-37.98v-8.753z"/></clipPath><clipPath id="BX"><path d="M181.552 407.435h-37.976v8.753h37.976v-8.753z"/></clipPath><clipPath id="BY"><path d="M143.566 416.18h37.976v-8.753h-37.976v8.753z"/></clipPath><clipPath id="BZ"><path d="M143.566 407.428v8.752h37.976v-8.752h-37.976z"/></clipPath><linearGradient id="Ba" spreadMethod="pad" y2="416.181" x2="162.555" y1="407.428" x1="162.555" href="#CP"><stop offset="0" stop-color="#fff"/><stop offset=".363" stop-color="#fff"/><stop offset="1" stop-color="#918f90"/></linearGradient><mask id="Bb" height="1" width="1" y="0" x="0" maskUnits="userSpaceOnUse"><g clip-path="url(#BS)"><g clip-path="url(#BT)"><g clip-path="url(#BU)"><g clip-path="url(#BV)"><g clip-path="url(#BW)"><g clip-path="url(#BX)"><g clip-path="url(#BY)"><g clip-path="url(#BZ)"><path d="M143.566 416.18h37.976v-8.753h-37.976v8.753z" fill="url(#Ba)" stroke="none"/></g></g></g></g></g></g></g></g></mask><clipPath id="Bc"><path d="M154.208 420.9h30.08v-18.168h-30.08V420.9z"/></clipPath><clipPath id="Bd"><path d="M155.173 407.816h27.347v5.876h-27.347v-5.876z"/></clipPath><clipPath id="Be"><path d="M156.56 413.622l1.087.046c3.112 0 5.8-.963 8.192-2.65 2.515 1.98 5.553 2.674 9.773 2.674h-20.437c.47 0 .932-.026 1.385-.07"/></clipPath><clipPath id="Bf"><path d="M158.155 420.9l18.385-7.625-3.947-9.516-18.385 7.626 3.947 9.515z"/></clipPath><clipPath id="Bg"><path d="M158.155 420.9l18.385-7.626-3.947-9.516-18.385 7.626 3.947 9.516z"/></clipPath><clipPath id="Bh"><path d="M175.613 413.692c-4.22 0-7.258-.693-9.773-2.674.835-.592 1.64-1.276 2.402-2.038 3.497 2.226 6.963 3.698 10.38 4.34 1.305.246 2.606.37 3.888.37h-6.897z"/></clipPath><clipPath id="Bi"><path d="M164.075 412.92l15.6 7.07 4.614-10.177-15.6-7.07-4.614 10.177z"/></clipPath><clipPath id="Bj"><path d="M164.075 412.92l15.6 7.072 4.613-10.177-15.6-7.072-4.613 10.177z"/></clipPath><clipPath id="Bk"><path d="M186.546 410.283h89.5V361.15h-89.5v49.133z"/></clipPath><clipPath id="Bl"><path d="M185.578 411.246h91.47V360.15h-91.47v51.096z"/></clipPath><clipPath id="Bm"><path d="M186.546 361.187h89.482v49.096h-89.482v-49.096z"/></clipPath><clipPath id="Bn"><path d="M186.546 410.283h89.5V361.15h-89.5v49.133z"/></clipPath><clipPath id="Bo"><path d="M186.546 361.187h89.482v49.096h-89.482v-49.096z"/></clipPath><clipPath id="Bp"><path d="M276.023 361.187h-89.47v49.096h89.47v-49.096z"/></clipPath><clipPath id="Bq"><path d="M186.578 410.246h89.47V361.15h-89.47v49.095z"/></clipPath><clipPath id="Br"><path d="M186.58 361.15v49.095h89.47V361.15h-89.47z"/></clipPath><linearGradient id="Bs" spreadMethod="pad" y2="410.247" x2="231.313" y1="361.15" x1="231.313" href="#CP"><stop offset="0" stop-color="#231f20"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="Bt" height="1" width="1" y="0" x="0" maskUnits="userSpaceOnUse"><g clip-path="url(#Bk)"><g clip-path="url(#Bl)"><g clip-path="url(#Bm)"><g clip-path="url(#Bn)"><g clip-path="url(#Bo)"><g clip-path="url(#Bp)"><g clip-path="url(#Bq)"><g clip-path="url(#Br)"><path d="M186.578 410.246h89.47V361.15h-89.47v49.095z" fill="url(#Bs)" stroke="none"/></g></g></g></g></g></g></g></g></mask><clipPath id="Bu"><path d="M214.165 414.975h32.908v-50.787h-32.908v50.787z"/></clipPath><clipPath id="Bv"><path d="M214.167 364.188h32.753v50.772h-32.753v-50.772z"/></clipPath><clipPath id="Bw"><path d="M225.7 377.66l6.473 20.636c2.32 7.428 6.433 12.977 14.158 15.402l.593 1.262c-12.6-.753-18.473-7.16-21.435-16.642-5.178-16.558-8.314-27.292-11.333-34.13 3.857 3.688 7.712 8.214 11.544 13.472"/></clipPath><clipPath id="Bx"><path d="M247.073 364.203h-32.77v50.772h32.77v-50.772z"/></clipPath><clipPath id="By"><path d="M247.073 414.974v-50.77h-32.77v50.77h32.77z"/></clipPath><linearGradient id="Bz" spreadMethod="pad" y2="337.71" x2="181.125" y1="414.088" x1="181.125" href="#CP"><stop offset="0" stop-color="#0994dc"/><stop offset=".11" stop-color="#0994dc"/><stop offset=".35" stop-color="#66cef5"/><stop offset=".45" stop-color="#66cef5"/><stop offset=".846" stop-color="#127bca"/><stop offset="1" stop-color="#127bca"/></linearGradient><linearGradient id="CA" spreadMethod="pad" y2="337.638" x2="184.188" y1="415.963" x1="184.188" href="#CP"><stop offset="0" stop-color="#0e76bc"/><stop offset=".176" stop-color="#0e76bc"/><stop offset=".36" stop-color="#36aee8"/><stop offset=".52" stop-color="#36aee8"/><stop offset=".846" stop-color="#00adef"/><stop offset="1" stop-color="#00adef"/></linearGradient><linearGradient id="CB" spreadMethod="pad" y2="416.972" x2="199.875" y1="354.65" x1="199.875" href="#CP"><stop offset="0" stop-color="#1c63b7"/><stop offset=".5" stop-color="#33bdf2"/><stop offset="1" stop-color="#33bdf2"/></linearGradient><linearGradient id="CC" spreadMethod="pad" y2="342.579" x2="195.813" y1="423.9" x1="195.813" href="#CP"><stop offset="0" stop-color="#166ab8"/><stop offset=".099" stop-color="#166ab8"/><stop offset=".4" stop-color="#36aee8"/><stop offset=".516" stop-color="#36aee8"/><stop offset=".846" stop-color="#0798dd"/><stop offset="1" stop-color="#0798dd"/></linearGradient><linearGradient id="CD" spreadMethod="pad" y2="337.051" x2="189.313" y1="423.525" x1="189.313" href="#CP"><stop offset="0" stop-color="#124379"/><stop offset=".11" stop-color="#124379"/><stop offset=".39" stop-color="#1487cb"/><stop offset=".52" stop-color="#1487cb"/><stop offset=".78" stop-color="#165197"/><stop offset="1" stop-color="#165197"/></linearGradient><linearGradient id="CE" spreadMethod="pad" y2="416.954" x2="246.375" y1="356.244" x1="246.375" href="#CP"><stop offset="0" stop-color="#136ab4"/><stop offset=".315" stop-color="#59caf5"/><stop offset=".6" stop-color="#59caf5"/><stop offset="1" stop-color="#59caf5"/></linearGradient><linearGradient id="CF" spreadMethod="pad" y2="416.813" x2="136.313" y1="354.65" x1="136.313" href="#CP"><stop offset="0" stop-color="#318ed5"/><stop offset=".675" stop-color="#38a7e4"/><stop offset="1" stop-color="#38a7e4"/></linearGradient><linearGradient id="CG" spreadMethod="pad" y2="414.888" x2="140.25" y1="354.463" x1="140.25" href="#CP"><stop offset="0" stop-color="#05a1e6"/><stop offset="1" stop-color="#05a1e6"/></linearGradient><linearGradient id="CH" spreadMethod="pad" y2="402.367" x2="143.563" y1="351.307" x1="143.563" href="#CP"><stop offset="0" stop-color="#1959a6"/><stop offset=".154" stop-color="#1959a6"/><stop offset=".484" stop-color="#05a1e6"/><stop offset=".5" stop-color="#05a1e6"/><stop offset=".918" stop-color="#7ec5ea"/><stop offset="1" stop-color="#7ec5ea"/></linearGradient><linearGradient id="CI" spreadMethod="pad" y2="410.014" x2="135.55" y1="354.65" x1="145.313" href="#CP"><stop offset="0" stop-color="#165096"/><stop offset=".104" stop-color="#165096"/><stop offset="1" stop-color="#0d82ca"/></linearGradient><linearGradient id="CJ" spreadMethod="pad" y2="414.896" x2="236.063" y1="385.963" x1="236.063" href="#CP"><stop offset="0" stop-color="#05a1e6"/><stop offset=".649" stop-color="#05a1e6"/><stop offset=".874" stop-color="#0495d6"/><stop offset="1" stop-color="#0495d6"/></linearGradient><linearGradient id="CK" spreadMethod="pad" y2="350.933" x2="237.83" y1="417.65" x1="249.594" href="#CP"><stop offset="0" stop-color="#38a7e4"/><stop offset=".357" stop-color="#38a7e4"/><stop offset=".962" stop-color="#0e88d3"/><stop offset="1" stop-color="#0e88d3"/></linearGradient><linearGradient id="CL" spreadMethod="pad" y2="352.093" x2="239.063" y1="415.213" x1="239.063" href="#CP"><stop offset="0" stop-color="#168cd4"/><stop offset=".5" stop-color="#1c87cc"/><stop offset="1" stop-color="#154b8d"/></linearGradient><linearGradient id="CM" spreadMethod="pad" y2="410.471" x2="173.102" y1="416.502" x1="158.563" href="#CP"><stop offset="0" stop-color="#97d6ee"/><stop offset=".703" stop-color="#55c1ea"/><stop offset="1" stop-color="#55c1ea"/></linearGradient><linearGradient id="CN" spreadMethod="pad" y2="414.512" x2="178.479" y1="409.307" x1="166.996" href="#CP"><stop offset="0" stop-color="#7accec"/><stop offset=".335" stop-color="#7accec"/><stop offset=".841" stop-color="#3fb7ed"/><stop offset="1" stop-color="#3fb7ed"/></linearGradient><linearGradient id="CO" spreadMethod="pad" y2="350.007" x2="230.688" y1="411.744" x1="230.688" href="#CP"><stop offset="0" stop-color="#1da7e7"/><stop offset="1" stop-color="#37abe7"/></linearGradient><linearGradient id="CP" gradientUnits="userSpaceOnUse"/></defs><g transform="matrix(.159929 0 0 .159929 -.550897 17.516765)"><g transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#A)"><g clip-path="url(#B)"><g clip-path="url(#C)"><path d="M195.484 352.88h-28.716v51.212h28.716V352.88z" fill="url(#Bz)"/></g></g></g><g clip-path="url(#D)"><g clip-path="url(#E)"><g clip-path="url(#F)"><path d="M199.257 353.196h-30.14v52.517h30.14v-52.517z" fill="url(#CA)"/></g></g></g></g><path d="M92.56-50c-1.602 0-3.23.156-4.86.468-4.267.804-8.604 2.64-12.975 5.422 1.195 1.18 2.33 2.526 3.397 4 4.445-3.7 8.86-6.416 13.263-8.055a29.65 29.65 0 0 1 4.948-1.375 15.24 15.24 0 0 0-3.773-.46" fill="#14559a"/><g mask="url(#P)" transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#Q)"><g clip-path="url(#R)"><g clip-path="url(#S)"><g clip-path="url(#T)"><g clip-path="url(#U)"><path d="M185.566 413.666h28.62V360.46h-28.62v53.205z" fill="url(#CB)"/></g></g></g></g></g></g><g mask="url(#d)"><g clip-path="url(#e)" transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#f)"><path d="M185.528 413.325c-.954.242-1.957.367-3.018.367l6.682-.024a19.81 19.81 0 0 1-3.664-.343" fill="#3092c4"/></g></g></g><path d="M126.442 21.194c-.83-.794-1.618-1.66-2.394-2.6-3.57 2.53-7.132 4.45-10.67 5.696a16.46 16.46 0 0 0 3.976 1.355c1.084.224 2.2.336 3.4.336 3.968 0 7.104-.473 9.776-1.75-1.47-.796-2.82-1.826-4.08-3.047" fill="#1969bc"/><g transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#g)"><g clip-path="url(#h)"><g clip-path="url(#i)"><path d="M209.982 358.734h-28.34v54.526h28.34v-54.526z" fill="url(#CC)"/></g></g></g><g clip-path="url(#j)"><g clip-path="url(#k)"><g clip-path="url(#l)"><path d="M207.683 354.228h-36.74v57.98h36.74v-57.98z" fill="url(#CD)"/></g></g></g></g><g mask="url(#v)"><g clip-path="url(#w)" transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#x)"><path d="M160.024 402.44c-1.668-3.765-3.367-8.717-5.427-15.182 4.094 5.765 8.173 10.735 12.227 14.758-.56 1.717-1.157 3.302-1.803 4.713-1.66-1.27-3.33-2.7-4.997-4.3" fill="#33bdf2"/></g></g></g><path d="M72.543-42.664L70.7-41.306c.808 1.764 1.555 3.745 2.254 5.9l2.75-2.608c-.983-1.686-2.024-3.246-3.16-4.64" fill="#2b74b1"/><path d="M74.726-44.12l-2.183 1.455c1.133 1.395 2.176 2.955 3.16 4.64l2.42-2.097c-1.07-1.473-2.202-2.82-3.397-4" fill="#125a9e"/><g mask="url(#AH)" transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#AI)"><g clip-path="url(#AJ)"><g clip-path="url(#AK)"><g clip-path="url(#AL)"><g clip-path="url(#AM)"><path d="M221.457 415.068h49.83v-62.132h-49.83v62.132z" fill="url(#CE)"/></g></g></g></g></g></g><g mask="url(#AW)"><g clip-path="url(#AX)" transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#AY)"><path d="M151.77 412.466c.008.008.02.013.024.013a.19.19 0 0 0 .03.011l.228.088c.018.004.028.01.04.014a.5.5 0 0 1 .052.023l.23.08.5.18c.026 0 .05.012.075.02l.215.065c.033.012.068.018.098.03l.216.063.083.025.717.184.096.025.208.04.103.03.2.04c.018 0 .03.005.05.008l.435.077a.57.57 0 0 0 .088.011l.198.035.114.012.193.028a.68.68 0 0 1 .106.013l.47.042-1.385.07c-14.664 0-34.863-27.203-43.965-62.433l1.754.008c2.915 5.192 5.53 10.106 7.92 14.718 6.375 24.953 19.355 41.972 30.884 46.48" fill="#05a1e6"/></g></g></g><g fill="#0d82ca"><path d="M64.453-35.945c2.084-1.987 4.17-3.775 6.246-5.36l-1.5-2.873c-1.676 2.034-3.206 4.718-4.756 8.234"/><path d="M65.958-48.22c1.2 1.004 2.27 2.385 3.25 4.04l.945-1.06c-1.36-1.27-2.83-2.314-4.43-3.1l.198.094c.01.013.022.02.035.025"/></g><g clip-path="url(#AZ)" transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#Aa)"><g clip-path="url(#Ab)"><path d="M120.87 412.433h30.885V365.95H120.87v46.482z" fill="url(#CF)"/></g></g></g><path d="M70.155-45.24l-.945 1.06c.525.878 1.013 1.835 1.5 2.873l1.844-1.358a25.11 25.11 0 0 0-2.39-2.575" fill="#127bca"/><g transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g mask="url(#Al)"><g clip-path="url(#Am)"><g clip-path="url(#An)"><g clip-path="url(#Ao)"><g clip-path="url(#Ap)"><g clip-path="url(#Aq)"><path d="M125.894 387.258h28.714v-35.97h-28.714v35.97z" fill="url(#CG)"/></g></g></g></g></g></g><g clip-path="url(#Ar)"><g clip-path="url(#As)"><g clip-path="url(#At)"><path d="M127.028 402.367h33.068v-51.06h-33.068v51.06z" fill="url(#CH)"/></g></g></g></g><path d="M15.53 9.625c-3 5.765-6.263 11.907-9.9 18.398l6.378-.002c.843-6.446 2.04-12.595 3.524-18.395" fill="#05a1e6"/><g transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#Au)"><g clip-path="url(#Av)"><g clip-path="url(#Aw)"><path d="M119.313 343.45l-12.043 68.3 55.044 9.705 12.043-68.3-55.044-9.706z" fill="url(#CI)"/></g></g></g><g clip-path="url(#Ax)"><g clip-path="url(#Ay)"><g clip-path="url(#Az)"><path d="M225.748 413.707h20.63v-36.032h-20.63v36.032z" fill="url(#CJ)"/></g></g></g><g mask="url(#BJ)"><g clip-path="url(#BK)"><g clip-path="url(#BL)"><g clip-path="url(#BM)"><g clip-path="url(#BN)"><g clip-path="url(#BO)"><path d="M273.147 413.298l-11.516-65.3-47.175 8.318 11.516 65.3 47.175-8.318z" fill="url(#CK)"/></g></g></g></g></g></g></g><path d="M135.633 20.1c3.734-4.56 6.778-12.308 10.926-25.075-4.787 6.58-9.6 12.233-14.434 16.846-.006.014-.006.026-.016.043 1.053 3.15 2.208 5.938 3.524 8.186" fill="#079ae1"/><path d="M135.633 20.1c-1.27 1.552-2.615 2.73-4.115 3.606l-.995.535a14.51 14.51 0 0 0 5.235 1.65h.013l.855.076h.054l.4.02h.056l.423.006.455-.006.14-.01.32-.01.157-.02.3-.02c.016 0 .025 0 .035-.01.04 0 .078-.006.116-.006l.334-.035c.01 0 .015-.004.03-.004.03-.007.067-.012.1-.016l.36-.052c.036 0 .067-.01.106-.015l.403-.066h.023c.01-.007.028-.007.036-.01l.803-.17c-2.214-.8-4.067-2.725-5.665-5.446" fill="#1969bc"/><g fill="#1e5cb3"><path d="M103.993 25.993a25.98 25.98 0 0 0 4.858-.467c1.504-.277 3.016-.695 4.53-1.224 1.257.616 2.578 1.07 3.976 1.358 1.084.22 2.2.334 3.4.334h-16.754z"/><path d="M120.747 25.993c3.968 0 7.108-.467 9.776-1.75a14.43 14.43 0 0 0 5.235 1.65h.013l.855.076h.054l.4.02h.056l.423.006h-16.824z"/></g><path d="M137.57 25.993l.455-.006.14-.01.32-.01.157-.02.3-.02c.016 0 .022 0 .035-.006.04 0 .077-.01.12-.01l.33-.035c.01 0 .015-.004.03-.004.03-.007.067-.012.1-.016l.36-.052a.45.45 0 0 0 .106-.015l.403-.066h.02c.015-.007.03-.007.04-.01l.804-.17a7 7 0 0 0 2.455.43l-6.185.016z" fill="#1d60b5"/><path d="M132.1 11.914c0-.007-.006-.016-.006-.022l-5.3 4.638-2.765 2.076 2.394 2.6c1.26 1.22 2.6 2.25 4.08 3.047l.995-.535c1.5-.876 2.846-2.054 4.115-3.606-1.314-2.25-2.47-5.035-3.524-8.186" fill="#175fab"/><g transform="matrix(1.25 0 0 -1.25 -135.57662 467.1064)"><g clip-path="url(#BP)"><g clip-path="url(#BQ)"><g clip-path="url(#BR)"><path d="M261.187 353.24h-44.25v61.8h44.25v-61.8z" fill="url(#CL)"/></g></g></g><g mask="url(#Bb)"><g clip-path="url(#Bc)"><g clip-path="url(#Bd)"><path d="M156.56 413.622l.084-.01a1.54 1.54 0 0 0 .208-.023c.025 0 .047-.005.067-.008l.383-.05c.022-.005.043-.005.063-.012l.322-.053a.38.38 0 0 1 .08-.016l.742-.163.068-.016.3-.084c.03-.008.053-.013.08-.026l.355-.1c.004-.006.01-.006.024-.01l.3-.106.12-.04.22-.1c.04-.01.083-.026.126-.043l.294-.123.143-.062.18-.076c.05-.028.107-.052.156-.075l.158-.08c1.278-.628 2.455-1.462 3.543-2.48a11.69 11.69 0 0 0 1.255 1.142c-2.38 1.687-5.08 2.65-8.192 2.65a12.05 12.05 0 0 1-1.087-.046" fill="#7dcbec"/><path d="M164.585 409.876c.667-.622 1.306-1.313 1.9-2.06l1.746 1.164c-.762.762-1.567 1.446-2.402 2.038-.434-.34-.852-.72-1.255-1.142" fill="#5ec5ed"/><g clip-path="url(#Be)"><g clip-path="url(#Bf)"><g clip-path="url(#Bg)"><path d="M158.155 420.9l18.385-7.625-3.947-9.516-18.385 7.626 3.947 9.515z" fill="url(#CM)"/></g></g></g><g clip-path="url(#Bh)"><g clip-path="url(#Bi)"><g clip-path="url(#Bj)"><path d="M164.075 412.92l15.6 7.07 4.614-10.177-15.6-7.07-4.614 10.177z" fill="url(#CN)"/></g></g></g></g></g></g><g mask="url(#Bt)"><g clip-path="url(#Bu)"><g clip-path="url(#Bv)"><g clip-path="url(#Bw)"><g clip-path="url(#Bx)"><g clip-path="url(#By)"><path d="M247.073 364.203h-32.77v50.772h32.77v-50.772z" fill="url(#CO)"/></g></g></g></g></g></g></g></g></svg>
  ),
  dj: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="#092e20"><path d="M27.724 0H38.2v48.44c-5.368 1.02-9.3 1.427-13.6 1.427-12.776 0-19.435-5.776-19.435-16.853 0-10.67 7.068-17.6 18.008-17.6 1.7 0 3 .135 4.553.543zm0 24.383c-1.223-.407-2.242-.543-3.533-.543-5.3 0-8.36 3.262-8.36 8.97 0 5.573 2.922 8.63 8.3 8.63 1.155 0 2.106-.068 3.6-.27zm27.113-8.223v24.26c0 8.36-.612 12.368-2.446 15.833-1.7 3.33-3.942 5.436-8.562 7.747l-9.718-4.62c4.62-2.174 6.863-4.076 8.3-7 1.495-3 1.97-6.456 1.97-15.56V16.16zM44.372.056h10.465v10.737H44.372z"/></svg>
  ),
  hibernate: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path d="M13.536 0l12.31 21.32L13.53 42.67 1.228 21.32z" fill="#59666c"/><path d="M38.16.001H13.543l12.31 21.32h24.624z" fill="#bcae79"/><path d="M50.464 64l-12.31-21.32L50.47 21.33 62.772 42.68z" fill="#59666c"/><path d="M25.84 63.998h24.62l-12.3-21.32H13.523z" fill="#bcae79"/></svg>
  ),
  angular: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M1 5.3L15.892 0l15.284 5.218-2.47 19.694L15.892 32 3.286 25.004 1 5.3z" fill="#e23237"/><path d="M31.176 5.218L15.892 0v32l12.814-7.088 2.47-19.694z" fill="#b52e31"/><path d="M15.915 3.74l-9.28 20.64 3.463-.07 1.87-4.664h8.3l2.032 4.7 3.302.07L15.915 3.74zm.023 6.626l3.14 6.557H13.2l2.747-6.557z" fill="#fff"/></svg>
  ),
  wordpress: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="#00749a"><path d="M2.26 16c0 5.45 3.13 10.145 7.7 12.348L3.478 10.435C2.725 12.174 2.26 14.03 2.26 16zm23.015-.696c0-1.68-.638-2.9-1.16-3.768-.696-1.16-1.333-2.087-1.333-3.246 0-1.275.986-2.435 2.32-2.435h.174C22.84 3.594 19.594 2.26 16 2.26A13.95 13.95 0 0 0 4.522 8.463h.87c1.45 0 3.652-.174 3.652-.174.754-.058.812 1.043.116 1.16 0 0-.754.116-1.565.116l4.986 14.84 3.014-8.986-2.145-5.855L12 9.45c-.754-.058-.638-1.16.058-1.16 0 0 2.26.174 3.594.174 1.45 0 3.652-.174 3.652-.174.754-.058.812 1.043.116 1.16 0 0-.754.116-1.565.116L22.84 24.35l1.4-4.58c.58-1.913 1.043-3.246 1.043-4.464zm-9.043 1.913L12.116 29.16c1.217.348 2.55.58 3.884.58 1.623 0 3.13-.3 4.58-.754-.058-.058-.058-.116-.116-.174zM28.058 9.45l.116 1.4c0 1.4-.232 2.957-1.043 4.928l-4.174 12.116c4.058-2.377 6.84-6.783 6.84-11.884-.058-2.377-.696-4.58-1.74-6.55zM16 0C7.188 0 0 7.188 0 16s7.188 16 16 16 16-7.188 16-16S24.812 0 16 0zm0 31.304C7.594 31.304.754 24.464.754 16A15.27 15.27 0 0 1 16 .754 15.27 15.27 0 0 1 31.246 16c0 8.464-6.84 15.304-15.246 15.304z"/></svg>
  ),
  laravel: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="52" viewBox="0 0 50 52"><title>Logomark</title><path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z" fill="#FF2D20" fill-rule="evenodd"/></svg>
  ),

  magento: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" width="256px" height="303px" viewBox="0 0 256 303" version="1.1" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M144.852,90.67 L144.852,262.862 L127.919,273.211 L110.973,262.807 L110.973,90.803 L67.095,117.819 L67.095,265.074 L127.919,302.291 L189.258,264.809 L189.258,117.725 L144.852,90.67 L144.852,90.67 Z M127.919,0 L0,77.502 L0,224.776 L33.223,244.348 L33.223,97.06 L127.945,39.464 L222.755,96.976 L223.146,97.199 L223.104,244.128 L256,224.776 L256,77.502 L127.919,0 L127.919,0 Z" fill="#EC6737"/>
    </g>
</svg>
  ),
  shopify: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="2192" height="2500" viewBox="0 0 256 292" preserveAspectRatio="xMidYMid"><path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95BF46"/><path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"/><path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF"/></svg>
  ),
  android: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="2025" viewBox="32.9 57.77898118 414.2 366.56939652" width="2500"><path d="m64.2 370.885c-10.7 0-17.9 8.4-17.9 19.2s7.2 19.2 17.9 19.2 17.9-8.4 17.9-19.2c-.1-10.8-7.3-19.2-17.9-19.2m-2.4-11.9c8.6 0 15.8 4.4 19.2 9.2v-8h13.2v59.9h-10.2a3.009 3.009 0 0 1 -3-3v-5c-3.4 4.8-10.5 9.2-19.2 9.2-16.4 0-28.9-14-28.9-31.1s12.4-31.2 28.9-31.2m47.4 1.2h13.2v8.1c3.6-6 10.4-9.3 18.2-9.3 13.9 0 22.9 9.8 22.9 25v36.1h-10.1a3.009 3.009 0 0 1 -3-3v-30.9c0-9.5-4.8-15.2-12.5-15.2-8.7 0-15.5 6.8-15.5 19.6v29.5h-10.1a3.009 3.009 0 0 1 -3-3zm95.9 10.7c-10.7 0-17.9 8.4-17.9 19.2s7.2 19.2 17.9 19.2 17.9-8.4 17.9-19.2-7.2-19.2-17.9-19.2m-2.4-11.9c8.6 0 15.8 4.4 19.2 9.2v-38h13.2v89.9h-10.1a3.009 3.009 0 0 1 -3-3v-5c-3.4 4.8-10.5 9.2-19.2 9.2-16.4 0-28.9-14-28.9-31.1s12.4-31.2 28.8-31.2m47.4 1.2h13.2v10.7a16.961 16.961 0 0 1 15.8-11.3 22.063 22.063 0 0 1 5.1.5v13.5a21.243 21.243 0 0 0 -6.6-1.1c-7.5 0-14.4 6.4-14.4 18.3v29.2h-10.1a3.009 3.009 0 0 1 -3-3zm69.6 48.8c10.5 0 18-8.3 18-18.9 0-10.7-7.4-18.9-18-18.9-10.7 0-18.1 8.3-18.1 18.9.1 10.7 7.4 18.9 18.1 18.9m0 12.3a31.151 31.151 0 1 1 31.4-31.1 30.948 30.948 0 0 1 -31.4 31.1m42.1-61.1h13.2v59.9h-10.1a3.009 3.009 0 0 1 -3-3zm6.6-13.1a8.985 8.985 0 0 1 -8.9-8.9 8.88 8.88 0 0 1 8.9-8.7 8.8 8.8 0 0 1 0 17.6m48.7 23.8c-10.7 0-17.9 8.4-17.9 19.2s7.2 19.2 17.9 19.2 17.9-8.4 17.9-19.2c-.2-10.8-7.2-19.2-17.9-19.2m-2.4-11.9c8.6 0 15.8 4.4 19.2 9.2v-38h13.2v89.9h-10.1a3.009 3.009 0 0 1 -3-3v-5c-3.4 4.8-10.5 9.2-19.2 9.2-16.4 0-28.9-14-28.9-31.1s12.4-31.2 28.8-31.2" fill="#3ddc84" /><path d="m341.5 129.185 34.5-59.7a7.17 7.17 0 0 0 -12.4-7.2l-34.9 60.4a216.078 216.078 0 0 0 -177.2 0l-34.9-60.4a7.17 7.17 0 0 0 -12.4 7.2l34.5 59.7c-59.5 32.2-99.9 92.1-105.8 162.8h414c-5.9-70.7-46.4-130.6-105.4-162.8zm-196.8 103.8a17.2 17.2 0 1 1 17.2-17.2 17.2 17.2 0 0 1 -17.2 17.2zm190.6 0a17.2 17.2 0 1 1 17.2-17.2 17.2 17.2 0 0 1 -17.2 17.2z" fill="#3ddc84"/></svg>
  ),
  ios: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 196 196">
    <defs>
    <linearGradient id="d" x1="50%" x2="50%" y1="50%" y2="100%">
    <stop stop-color="#fff" offset="0"/>
    <stop stop-color="#E9E5E5" offset="1"/>
    </linearGradient>
    <linearGradient id="c" x1="50%" x2="50%" y2="87.052%">
    <stop stop-color="#0339F1" offset="0"/>
    <stop stop-color="#01ADE5" offset="1"/>
    </linearGradient>
    <linearGradient id="b" x1="14.011%" x2="73.603%" y1="9.5347%" y2="75.34%">
    <stop stop-color="#0756EE" offset="0"/>
    <stop stop-color="#00A3F5" offset=".37448"/>
    <stop stop-color="#18B5B6" offset=".71708"/>
    <stop stop-color="#80DF43" offset="1"/>
    </linearGradient>
    <linearGradient id="a" x1="13.017%" x2="86.649%" y1="3.0728%" y2="90.776%">
    <stop stop-color="#20BBA6" offset="0"/>
    <stop stop-color="#9BEC23" offset=".4988"/>
    <stop stop-color="#D9EF35" offset="1"/>
    </linearGradient>
    </defs>
    <g fill-rule="evenodd">
    <rect x="1" y="1" width="194" height="194" rx="45" fill="url(#d)" stroke="#D9D9D9"/>
    <path d="m32.882 137.54h-4.5633v-60.979h4.5633v60.979zm-2.3466-75.927c-1.9244 0-3.5158-1.5265-3.5158-3.4509 0-1.9812 1.5833-3.5158 3.5158-3.5158 1.9812 0 3.5564 1.5265 3.5564 3.5158 0 1.9244-1.5752 3.4509-3.5564 3.4509z" fill="url(#c)"/>
    <path d="m77.205 138.73c-22.313 0-36.409-16.248-36.409-42.076 0-25.699 14.161-42.011 36.409-42.011s36.401 16.313 36.401 42.011c0 25.829-14.096 42.076-36.401 42.076zm0-79.89c-19.422 0-31.821 14.664-31.821 37.813 0 23.166 12.456 37.887 31.821 37.887 19.422 0 31.821-14.721 31.821-37.887 0-23.157-12.399-37.813-31.821-37.813z" fill="url(#b)"/>
    <path d="m146.1 138.73c-16.751 0-28.76-9.4595-29.442-22.987h4.474c0.68206 11.092 11.1 18.854 25.309 18.854 13.868 0 23.547-7.8761 23.547-18.513 0-8.5582-5.7731-13.479-19.471-16.93l-9.6787-2.3791c-15.111-3.8569-21.972-9.971-21.972-20.21 0-12.74 11.895-21.915 26.787-21.915 15.395 0 26.892 9.0616 27.404 21.063h-4.474c-0.62522-9.7924-10.19-16.93-23.044-16.93-12.293 0-22.086 7.3646-22.086 17.668 0 8.1603 6.0005 12.854 19.13 16.134l9.1184 2.3222c15.793 3.9056 22.873 9.971 22.873 20.835 0 13.527-11.376 22.987-28.476 22.987z" fill="url(#a)"/>
    </g>
    </svg>
  ),
  flutter: (props: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g transform="matrix(.061615 0 0 .061615 -1.430818 -1.2754)">
    <defs>
      <path id="A" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="B">
      <use href="#A"/>
    </clipPath>
    <g clip-path="url(#B)">
      <path d="M360.3 779.7L520 939.5 959.4 500H639.9z" fill="#39cefd"/>
    </g>
    <defs>
      <path id="C" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="D">
      <use href="#C"/>
    </clipPath>
    <path clip-path="url(#D)" d="M639.9 20.7h319.5l-679 679.1L120.6 540z" fill="#39cefd"/>
    <defs>
      <path id="E" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="F">
      <use href="#E"/>
    </clipPath>
    <path clip-path="url(#F)" d="M520 939.5l119.9 119.8h319.5L679.8 779.7z" fill="#03569b"/>
    <defs>
      <path id="G" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="H">
      <use href="#G"/>
    </clipPath>
    <linearGradient id="I" gradientUnits="userSpaceOnUse" x1="566.635" y1="970.339" x2="685.65" y2="851.324">
      <stop offset="0" stop-color="#1a237e" stop-opacity=".4"/>
      <stop offset="1" stop-color="#1a237e" stop-opacity="0"/>
    </linearGradient>
    <path clip-path="url(#H)" d="M757 857.4l-77.2-77.7L520 939.5z" fill="url(#I)"/>
    <defs>
      <path id="J" d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="K">
      <use href="#J"/>
    </clipPath>
    <g clip-path="url(#K)">
      <path d="M360.282 779.645L520.086 619.84 679.9 779.645 520.086 939.45z" fill="#16b9fd"/>
    </g>
    <radialGradient id="L" cx="7824.659" cy="-2855.979" r="5082.889" gradientTransform="matrix(0.25,0,0,-0.25,-1812,-622.5)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff" stop-opacity=".1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <path d="M959.4 500L679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7L120.6 540l159.8 159.8 679-679.1H639.9z" fill="url(#L)"/>
  </g>
</svg>

  ),
  native: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="2005" width="2500" viewBox="670.088 32.46226489559854 2224.1720000000005 2666.4877351044024"><g fill="#61dafb"><path d="M2870 1250.22c0-145.34-182.01-283.079-461.07-368.495 64.4-284.424 35.78-510.711-90.34-583.159-29.07-16.994-63.05-25.044-100.17-25.044v99.728c20.57 0 37.12 4.025 50.98 11.627 60.82 34.882 87.21 167.703 66.63 338.536-4.91 42.038-12.96 86.311-22.8 131.479-87.66-21.466-183.36-38.012-283.98-48.745-60.37-82.734-122.98-157.865-186.04-223.604 145.79-135.504 282.64-209.741 375.66-209.741v-99.727c-122.99 0-283.98 87.653-446.76 239.703-162.79-151.156-323.78-237.914-446.76-237.914v99.727c92.57 0 229.86 73.79 375.65 208.399-62.61 65.74-125.22 140.423-184.7 223.157-101.07 10.733-196.77 27.279-284.42 49.192-10.29-44.72-17.89-88.1-23.26-129.69-21.01-170.833 4.92-303.654 65.3-338.983 13.41-8.05 30.85-11.627 51.43-11.627v-99.728c-37.57 0-71.56 8.05-101.07 25.044-125.67 72.447-153.84 298.287-89 581.817C857.119 968.036 676 1105.33 676 1250.22c0 145.35 182.013 283.09 461.07 368.5-64.4 284.43-35.78 510.71 90.34 583.16 29.07 16.99 63.05 25.04 100.62 25.04 122.98 0 283.98-87.65 446.76-239.7 162.78 151.16 323.78 237.92 446.76 237.92 37.56 0 71.55-8.05 101.07-25.05 125.66-72.45 153.84-298.29 88.99-581.81 277.27-85.42 458.39-223.16 458.39-368.06zm-582.26-298.284c-16.55 57.694-37.12 117.164-60.38 176.644-18.33-35.77-37.56-71.55-58.58-107.33-20.57-35.773-42.49-70.655-64.4-104.643 63.5 9.391 124.77 21.019 183.36 35.329zm-204.83 476.274c-34.88 60.38-70.65 117.62-107.77 170.84-66.64 5.81-134.16 8.94-202.14 8.94-67.53 0-135.06-3.13-201.24-8.5-37.12-53.22-73.35-110.01-108.23-169.94-33.99-58.58-64.84-118.06-93.02-177.98 27.73-59.93 59.03-119.86 92.58-178.44 34.88-60.37 70.65-117.616 107.77-170.834 66.64-5.814 134.16-8.944 202.14-8.944 67.53 0 135.06 3.13 201.24 8.497 37.12 53.218 73.35 110.011 108.23 169.941 33.99 58.58 64.84 118.06 93.02 177.99-28.18 59.92-59.03 119.85-92.58 178.43zm144.45-58.13a1918.154 1918.154 0 0 1 61.72 177.98c-58.59 14.31-120.3 26.39-184.25 35.78 21.91-34.43 43.82-69.76 64.4-105.99 20.57-35.77 39.8-72 58.13-107.77zm-453.47 477.17c-41.59-42.94-83.18-90.79-124.32-143.11 40.25 1.79 81.39 3.13 122.98 3.13 42.04 0 83.63-.89 124.33-3.13a1746.499 1746.499 0 0 1-122.99 143.11zm-332.72-263.41c-63.5-9.39-124.77-21.02-183.35-35.33 16.54-57.69 37.12-117.17 60.37-176.65 18.34 35.78 37.57 71.56 58.58 107.33 21.02 35.78 42.49 70.66 64.4 104.65zm330.49-930.638c41.59 42.931 83.18 90.783 124.32 143.106-40.25-1.789-81.39-3.13-122.98-3.13-42.04 0-83.63.894-124.32 3.13a1746.3 1746.3 0 0 1 122.98-143.106zm-330.94 263.405c-21.91 34.435-43.82 69.764-64.39 105.983-20.57 35.78-39.8 71.56-58.14 107.33a1914.757 1914.757 0 0 1-61.71-177.984c58.58-13.863 120.29-25.938 184.24-35.329zM1036 1476.51c-158.309-67.53-260.72-156.07-260.72-226.29 0-70.21 102.411-159.2 260.72-226.28 38.46-16.55 80.5-31.308 123.88-45.171 25.49 87.651 59.03 178.881 100.62 272.351-41.14 93.02-74.24 183.8-99.28 271.01-44.27-13.87-86.31-29.07-125.22-45.62zm240.6 639.06c-60.82-34.88-87.21-167.7-66.63-338.54 4.92-42.03 12.96-86.31 22.8-131.48 87.66 21.47 183.36 38.02 283.98 48.75 60.37 82.73 122.98 157.86 186.04 223.6-145.79 135.51-282.64 209.74-375.66 209.74-20.12-.44-37.11-4.47-50.53-12.07zm1060.78-340.77c21.01 170.83-4.92 303.65-65.3 338.98-13.41 8.05-30.85 11.63-51.43 11.63-92.57 0-229.86-73.79-375.65-208.4 62.61-65.74 125.22-140.42 184.7-223.16 101.07-10.73 196.77-27.28 284.42-49.19 10.29 45.17 18.34 88.55 23.26 130.14zm172.17-298.29c-38.46 16.55-80.5 31.31-123.88 45.17-25.49-87.65-59.03-178.88-100.62-272.35 41.15-93.02 74.24-183.8 99.28-271.009 44.28 13.864 86.31 29.069 125.67 45.619 158.31 67.52 260.72 156.07 260.72 226.28-.45 70.22-102.86 159.21-261.17 226.29z"/><path d="M1772.55 1454.6c112.88 0 204.38-91.5 204.38-204.38 0-112.87-91.5-204.37-204.38-204.37-112.87 0-204.37 91.5-204.37 204.37 0 112.88 91.5 204.38 204.37 204.38zM775.625 2578.81H708.16V2695h-38.072v-287.22h95.082c32.351 0 57.207 7.37 74.566 22.1 17.491 14.72 26.237 36.16 26.237 64.3 0 17.89-4.866 33.47-14.598 46.76-9.6 13.28-23.014 23.21-40.242 29.78l67.465 121.91v2.37h-40.637zm-67.465-30.97h58.194c18.806 0 33.732-4.87 44.779-14.6 11.178-9.73 16.767-22.75 16.767-39.06 0-17.75-5.326-31.36-15.978-40.83-10.521-9.47-25.776-14.27-45.766-14.4H708.16zm293.93 151.11c-28.936 0-52.477-9.47-70.625-28.41-18.149-19.07-27.223-44.52-27.223-76.34v-6.71c0-21.17 4.011-40.04 12.033-56.61 8.154-16.71 19.464-29.73 33.93-39.06 14.598-9.47 30.379-14.21 47.344-14.21 27.751 0 49.321 9.14 64.701 27.42 15.39 18.28 23.08 44.45 23.08 78.51v15.19H940.736c.526 21.05 6.642 38.08 18.346 51.1 11.836 12.88 26.828 19.33 44.978 19.33 12.89 0 23.8-2.63 32.74-7.89 8.95-5.26 16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.71 41.23-80.48 41.23zm-4.541-191.35c-14.729 0-27.091 5.39-37.086 16.17-9.995 10.66-16.176 25.65-18.543 44.98h106.92v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.95-10.25-21.05-15.38-36.301-15.38zM1259.52 2695c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.33-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.42-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.44-30.38-7.63-7.63-18.88-11.44-33.74-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.6 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm234.15 1.97c13.02 0 24.4-3.95 34.13-11.84s15.12-17.75 16.17-29.59h34.53c-.66 12.23-4.87 23.87-12.63 34.92s-18.15 19.86-31.17 26.43c-12.89 6.58-26.56 9.87-41.03 9.87-29.06 0-52.21-9.67-69.44-29-17.09-19.47-25.64-46.03-25.64-79.7v-6.11c0-20.78 3.81-39.26 11.44-55.43 7.63-16.18 18.54-28.74 32.75-37.68 14.33-8.95 31.23-13.42 50.69-13.42 23.94 0 43.8 7.17 59.58 21.51 15.91 14.33 24.39 32.94 25.45 55.82h-34.53c-1.05-13.81-6.31-25.12-15.78-33.93-9.33-8.94-20.91-13.41-34.72-13.41-18.54 0-32.94 6.7-43.2 20.12-10.12 13.28-15.19 32.55-15.19 57.8v6.9c0 24.59 5.07 43.53 15.19 56.81 10.13 13.29 24.6 19.93 43.4 19.93zm175.37-239.28v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.35-2.37V2695c-9.6 2.63-18.93 3.95-28.01 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.87v-28.21h38.87v-51.68zM2017.81 2695h-38.08l-144.59-221.33V2695h-38.07v-287.22h38.07l144.99 222.32v-222.32h37.68zm193.32 0c-2.11-4.21-3.82-11.7-5.13-22.49-16.97 17.62-37.22 26.44-60.76 26.44-21.04 0-38.34-5.92-51.88-17.76-13.41-11.97-20.12-27.09-20.12-45.37 0-22.22 8.41-39.45 25.25-51.68 16.96-12.37 40.77-18.55 71.41-18.55h35.51v-16.76c0-12.76-3.82-22.89-11.45-30.38-7.62-7.63-18.87-11.44-33.73-11.44-13.02 0-23.93 3.28-32.74 9.86-8.81 6.57-13.22 14.53-13.22 23.87h-36.69c0-10.65 3.75-20.91 11.24-30.78 7.63-9.99 17.89-17.88 30.78-23.67 13.02-5.78 27.28-8.68 42.8-8.68 24.59 0 43.86 6.18 57.8 18.55 13.94 12.23 21.17 29.13 21.7 50.69v98.24c0 19.6 2.5 35.18 7.5 46.75v3.16zm-60.56-27.81c11.44 0 22.29-2.96 32.55-8.88 10.25-5.92 17.68-13.61 22.29-23.08v-43.79h-28.61c-44.71 0-67.07 13.08-67.07 39.25 0 11.44 3.82 20.39 11.44 26.83 7.63 6.44 17.43 9.67 29.4 9.67zm198.05-237.31v51.68h39.85v28.21h-39.85v132.36c0 8.55 1.78 14.99 5.33 19.33 3.55 4.21 9.6 6.32 18.15 6.32 4.2 0 9.99-.79 17.36-2.37V2695c-9.61 2.63-18.94 3.95-28.02 3.95-16.3 0-28.6-4.94-36.89-14.8-8.28-9.86-12.42-23.87-12.42-42.02v-132.36h-38.86v-28.21h38.86v-51.68zM2470.93 2695h-36.5v-213.44h36.5zm-39.46-270.06c0-5.91 1.78-10.91 5.33-14.99 3.68-4.08 9.07-6.11 16.17-6.11 7.11 0 12.5 2.03 16.18 6.11s5.52 9.08 5.52 14.99c0 5.92-1.84 10.85-5.52 14.8-3.68 3.94-9.07 5.92-16.18 5.92-7.1 0-12.49-1.98-16.17-5.92-3.55-3.95-5.33-8.88-5.33-14.8zm168.47 220.55l52.86-163.93h37.29L2613.55 2695h-27.82l-77.32-213.44h37.28zm211.07 53.46c-28.93 0-52.47-9.47-70.62-28.41-18.15-19.07-27.22-44.52-27.22-76.34v-6.71c0-21.17 4.01-40.04 12.03-56.61 8.15-16.71 19.46-29.73 33.93-39.06 14.6-9.47 30.38-14.21 47.34-14.21 27.75 0 49.32 9.14 64.71 27.42 15.38 18.28 23.08 44.45 23.08 78.51v15.19h-144.6c.53 21.05 6.64 38.08 18.35 51.1 11.83 12.88 26.83 19.33 44.97 19.33 12.89 0 23.81-2.63 32.75-7.89s16.77-12.23 23.48-20.91l22.29 17.36c-17.89 27.48-44.72 41.23-80.49 41.23zm-4.54-191.35c-14.72 0-27.09 5.39-37.08 16.17-10 10.66-16.18 25.65-18.54 44.98h106.91v-2.76c-1.05-18.54-6.05-32.88-14.99-43.01-8.94-10.25-21.04-15.38-36.3-15.38z"/></g></svg>
  ),
  // whatsapp: (props: IconProps) => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     viewBox="0 0 175.216 175.552"
  //     {...props}
  //   >
  //     <defs>
  //       <linearGradient
  //         id="b"
  //         x1="85.915"
  //         x2="86.535"
  //         y1="32.567"
  //         y2="137.092"
  //         gradientUnits="userSpaceOnUse"
  //       >
  //         <stop offset="0" stopColor="#57d163" />
  //         <stop offset="1" stopColor="#23b33a" />
  //       </linearGradient>
  //       <filter
  //         id="a"
  //         width="1.115"
  //         height="1.114"
  //         x="-.057"
  //         y="-.057"
  //         colorInterpolationFilters="sRGB"
  //       >
  //         <feGaussianBlur stdDeviation="3.531" />
  //       </filter>
  //     </defs>
  //     <path
  //       fill="#b3b3b3"
  //       d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
  //       filter="url(#a)"
  //     />
  //     <path
  //       fill="#fff"
  //       d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
  //     />
  //     <path
  //       fill="url(#linearGradient1780)"
  //       d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
  //     />
  //     <path
  //       fill="url(#b)"
  //       d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
  //     />
  //     <path
  //       fill="#fff"
  //       fillRule="evenodd"
  //       d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
  //     />
  //   </svg>
  // ),
};
