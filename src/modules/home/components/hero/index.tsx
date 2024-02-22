import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className=" bg-[url(/landing-pic.jpg)]  bg-cover bg-no-repeat relative w-full border-b h-[70vh] border-ui-border-base">
      <div className="bg-[hsla(0,0%,0%,0.5)]  flex absolute inset-0 z-10 flex-col gap-6 justify-center items-center text-center small:p-32">
        <span>
          <Heading
            level="h1"
            className="text-3xl font-normal leading-10 text-slate-100"
          >
            Welcome to ABATACRAFTS <br /> by Sally
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
