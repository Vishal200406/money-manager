interface Props {

  value:number;

}



export default function Progress({

  value

}:Props){



  const progressValue = Math.min(

    Math.max(value,0),

    100

  );



  return (


    <div

      className="
      w-full
      bg-gray-200
      rounded-full
      h-3
      overflow-hidden
      "

    >



      <div


        className="
        bg-blue-600
        h-full
        rounded-full
        transition-all
        duration-500
        "

        style={{

          width:`${progressValue}%`

        }}


      />



    </div>


  );


}