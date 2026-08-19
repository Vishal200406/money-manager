"use client";


interface Props {

  notification:any;

  onDelete:(id:string)=>void;

}



export default function NotificationCard({

  notification,

  onDelete

}:Props){



  const typeStyles:Record<string,string>={


    warning:

    "bg-red-100 text-red-700",


    success:

    "bg-green-100 text-green-700",


    info:

    "bg-blue-100 text-blue-700",


    default:

    "bg-gray-100 text-gray-700"


  };




  const style =

    typeStyles[notification.type]

    ||

    typeStyles.default;







  const icon =

    notification.type === "warning"

    ?

    "🔴"

    :

    notification.type === "success"

    ?

    "🟢"

    :

    "🔵";







  return (

    <div

      className="
      bg-white
      rounded-2xl
      border
      shadow-card
      p-5
      flex
      justify-between
      gap-5
      hover:shadow-lg
      transition
      "

    >



      <div

        className="
        flex
        gap-4
        "

      >



        <div

          className={`
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          ${style}
          `}

        >

          {icon}

        </div>





        <div>


          <h3

            className="
            font-bold
            "

          >

            {

              notification.title

            }

          </h3>




          <p

            className="
            text-gray-500
            mt-1
            "

          >

            {

              notification.message

            }

          </p>





          <p

            className="
            text-sm
            text-gray-400
            mt-2
            "

          >

            {

              notification.createdAt

              ?

              new Date(

                notification.createdAt

              )

              .toLocaleDateString()

              :

              "Today"

            }

          </p>




        </div>


      </div>







      <button

        onClick={()=>onDelete(notification._id)}

        className="
        text-red-600
        text-sm
        hover:underline
        "

      >

        Delete

      </button>



    </div>

  );

}