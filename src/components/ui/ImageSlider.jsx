import React from 'react'

const ImageSlider = () => {
    return (
<div className="relative h-full rounded-lg overflow-hidden translate-x-[-50%]  translate-y-[-0%] bottom-0 xl:bottom-2 lg:top-20 xl:top-0 left-1/2">
                <div className="flex w-full animate-slide">
                  <img
                    src="https://demo.bosathemes.com/educator/wp-content/uploads/sites/29/2022/06/educator-img12.jpg"
                    alt="Tree"
                    className="flex-[0_0_100%] object-cover xl:h-80"
                  />
                  <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"

                    alt="Tree"
                    className="flex-[0_0_100%] object-cover xl:h-80"
                  />
                  <img
                    src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"

                    alt="Tree"
                    className="flex-[0_0_100%] object-cover xl:h-80"
                  />
                  <img
                    src="https://media.istockphoto.com/id/505239248/photo/humayun-tomb-new-delhi-india.jpg?s=612x612&w=0&k=20&c=UQTU6YOnVsSklzHi34cOhNW5AhsACDxKLiD9--T-3Kg="

                    alt="Tree"
                    className="flex-[0_0_100%] object-cover xl:h-80"
                  />
                </div>
              </div>
    )
}

export default ImageSlider