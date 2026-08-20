"use client";


import {

  PieChart,

  Pie,

  Cell,

  Tooltip,

  Legend,

  ResponsiveContainer

} from "recharts";



interface Props {

  data:any[];

}





const COLORS = [

  "#2563eb",

  "#16a34a",

  "#dc2626",

  "#f59e0b",

  "#9333ea",

  "#0891b2",

];







export default function ExpensePieChart({

  data

}:Props){





  return (



    <div

      className="
      bg-white
      border
      rounded-xl
      p-6
      h-96
      "

    >





      <h2

        className="
        text-xl
        font-semibold
        mb-4
        "

      >

        Expenses By Category


      </h2>









      <ResponsiveContainer

        width="100%"

        height="85%"

      >




        <PieChart>





          <Pie

            data={data}

            dataKey="amount"

            nameKey="name"

            cx="50%"

            cy="50%"

            outerRadius={100}

            label


          >





            {


              data.map(


                (entry,index)=>(



                  <Cell


                    key={`cell-${index}`}


                    fill={

                      COLORS[

                        index %

                        COLORS.length

                      ]

                    }


                  />



                )


              )


            }






          </Pie>







          <Tooltip />



          <Legend />





        </PieChart>





      </ResponsiveContainer>





    </div>



  );


}