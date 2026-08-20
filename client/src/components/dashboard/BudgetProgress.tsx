"use client";


import Progress
from "@/components/ui/Progress";



interface Props {

  budgets:any[];

}





export default function BudgetProgress({

  budgets

}:Props){



  return (



    <div

      className="
      bg-white
      rounded-2xl
      border
      shadow-card
      p-6
      "

    >





      <h2

        className="
        text-xl
        font-bold
        mb-5
        "

      >

        Budget Overview


      </h2>







      <div

        className="
        space-y-5
        "

      >





        {


          budgets.map(


            (budget)=>(



              <div

                key={budget._id}

              >





                <div

                  className="
                  flex
                  justify-between
                  mb-2
                  "

                >





                  <span>

                    {
                      budget.categoryId?.name ||
                      "Category"
                    }


                  </span>







                  <span

                    className="
                    text-sm
                    text-gray-500
                    "

                  >



                    {

                      Math.round(

                        Number(

                          budget.percentage ||

                          (

                            budget.amount > 0

                            ?

                            (

                              budget.spent /

                              budget.amount

                            ) * 100

                            :

                            0

                          )

                        )

                      )

                    }%



                  </span>





                </div>









                <Progress


                  value={

                    Math.min(

                      Number(

                        budget.percentage ||

                        (

                          budget.amount > 0

                          ?

                          (

                            budget.spent /

                            budget.amount

                          ) * 100

                          :

                          0

                        )

                      ),

                      100

                    )

                  }


                />





              </div>



            )


          )



        }





      </div>





    </div>



  );


}