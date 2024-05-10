import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { IconProps } from "radix-ui";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "lib/utils";

export function TechStack() {
  return (
    <>
      <div className="container">
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

Backend: We engineer robust backend solutions, ensuring optimal performance and scalability, tailored to meet your project's needs.
            </p>
          </div>
        </div>
        <div className="m-2 hidden items-center justify-center rounded-sm border pr-4 align-middle dark:border-[#b4fbff38] dark:hover:shadow-2xl dark:hover:shadow-[#62818263] lg:inline-flex">
          <div className="bg-transparent p-6 lg:p-10">
            <h1 className="text-balance from-white from-30% to-white/40 py-6 text-center text-5xl font-medium leading-none tracking-tighter text-black dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
            Mobile Technologies
            </h1>
            <p className="text-justify font-mono text-lg font-medium text-gray-600 dark:text-gray-400">
            We leverage cutting-edge mobile technologies to create custom apps that drive business growth and success.
            </p>
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
            <div className="flex justify-items-start mt-4">
            {/* <Icons.node
            className="h-5 w-5 sm:h-16 sm:w-16 md:h-10 md:w-10" />
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24" viewBox="0 0 64 64" fill="currentColor">
      <path d="M27.724 0H38.2v48.44c-5.368 1.02-9.3 1.427-13.6 1.427-12.776 0-19.435-5.776-19.435-16.853 0-10.67 7.068-17.6 18.008-17.6 1.7 0 3 .135 4.553.543zm0 24.383c-1.223-.407-2.242-.543-3.533-.543-5.3 0-8.36 3.262-8.36 8.97 0 5.573 2.922 8.63 8.3 8.63 1.155 0 2.106-.068 3.6-.27zm27.113-8.223v24.26c0 8.36-.612 12.368-2.446 15.833-1.7 3.33-3.942 5.436-8.562 7.747l-9.718-4.62c4.62-2.174 6.863-4.076 8.3-7 1.495-3 1.97-6.456 1.97-15.56V16.16zM44.372.056h10.465v10.737H44.372z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24" viewBox="0 0 64 64" fill="currentColor">
      <path d="M27.724 0H38.2v48.44c-5.368 1.02-9.3 1.427-13.6 1.427-12.776 0-19.435-5.776-19.435-16.853 0-10.67 7.068-17.6 18.008-17.6 1.7 0 3 .135 4.553.543zm0 24.383c-1.223-.407-2.242-.543-3.533-.543-5.3 0-8.36 3.262-8.36 8.97 0 5.573 2.922 8.63 8.3 8.63 1.155 0 2.106-.068 3.6-.27zm27.113-8.223v24.26c0 8.36-.612 12.368-2.446 15.833-1.7 3.33-3.942 5.436-8.562 7.747l-9.718-4.62c4.62-2.174 6.863-4.076 8.3-7 1.495-3 1.97-6.456 1.97-15.56V16.16zM44.372.056h10.465v10.737H44.372z"/>
    </svg> */}
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
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24" viewBox="0 0 64 64" fill="currentColor">
      <path d="M27.724 0H38.2v48.44c-5.368 1.02-9.3 1.427-13.6 1.427-12.776 0-19.435-5.776-19.435-16.853 0-10.67 7.068-17.6 18.008-17.6 1.7 0 3 .135 4.553.543zm0 24.383c-1.223-.407-2.242-.543-3.533-.543-5.3 0-8.36 3.262-8.36 8.97 0 5.573 2.922 8.63 8.3 8.63 1.155 0 2.106-.068 3.6-.27zm27.113-8.223v24.26c0 8.36-.612 12.368-2.446 15.833-1.7 3.33-3.942 5.436-8.562 7.747l-9.718-4.62c4.62-2.174 6.863-4.076 8.3-7 1.495-3 1.97-6.456 1.97-15.56V16.16zM44.372.056h10.465v10.737H44.372z"/>
    </svg>
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
