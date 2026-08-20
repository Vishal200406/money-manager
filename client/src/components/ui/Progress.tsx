interface Props {

  value:number;

}



export default function Progress({

  value

}:Props){


  const progressValue = Math.min(

    Math.max(value, 0),

    100

  );



  return (

    <div

      className="
      w-full
      h-3
      bg-gray-200
      rounded-full
      overflow-hidden
      "

    >


      <div

        style={{

          width: `${progressValue}%`,

          backgroundColor: "#2563eb",

          height: "100%",

          transition: "width 500ms ease"

        }}


        className="
        rounded-full
        "

      />


    </div>

  );

}