"use client";


import Link from "next/link";


import {
  usePathname
} from "next/navigation";


import {
  navigation
} from "@/config/navigation";


import Avatar
from "@/components/ui/Avatar";


import {
  useAuth
} from "@/context/AuthContext";



export default function Sidebar(){


  const pathname =
  usePathname();



  const {
    user
  } = useAuth();




  return (

    <aside

      className="
      hidden
      md:flex
      flex-col
      w-72
      min-h-screen
      bg-white
      border-r
      p-6
      "

    >



      {/* Logo */}

      <div

        className="
        flex
        items-center
        gap-3
        mb-10
        "

      >


        <div

          className="
          w-12
          h-12
          rounded-xl
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          text-2xl
          "

        >

          💰

        </div>



        <div>


          <h1

            className="
            font-bold
            text-xl
            "

          >

            Money Manager

          </h1>



          <p

            className="
            text-xs
            text-gray-500
            "

          >

            Finance Dashboard

          </p>



        </div>


      </div>







      {/* Navigation */}

      <nav

        className="
        space-y-2
        flex-1
        "

      >


        {

          navigation.map(

            (item)=>{


              const Icon =
              item.icon;



              const active =
              pathname === item.href;



              return (

                <Link

                  key={item.href}

                  href={item.href}

                  className={`

                  flex

                  items-center

                  gap-3

                  px-4

                  py-3

                  rounded-xl

                  transition

                  ${
                    active

                    ?

                    "bg-blue-600 text-white shadow-md"

                    :

                    "text-gray-600 hover:bg-gray-100"

                  }

                  `}

                >


                  <Icon

                    size={20}

                  />


                  <span>

                    {item.name}

                  </span>


                </Link>

              );


            }

          )

        }


      </nav>








      {/* User Profile */}

      <div

        className="
        border-t
        pt-5
        mt-5
        "

      >



        <div

          className="
          flex
          items-center
          gap-3
          mb-4
          "

        >


          <Avatar

            name={
              user?.name || "User"
            }

          />



          <div>


            <p

              className="
              font-semibold
              "

            >

              {
                user?.name || "User"
              }


            </p>



            <p

              className="
              text-sm
              text-gray-500
              "

            >

              {
                user?.currency || "USD"
              }

              {" "}

              Account

            </p>



          </div>


        </div>





        <button

          className="
          w-full
          rounded-xl
          border
          py-2
          text-sm
          hover:bg-gray-100
          transition
          "

        >

          Logout

        </button>



      </div>




    </aside>

  );

}