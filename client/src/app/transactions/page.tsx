"use client";


import {
  useEffect,
  useState
} from "react";


import {
  createTransaction,
  getTransactions,
  deleteTransaction
} from "@/lib/transactionApi";


import {
  getCategories
} from "@/lib/categoryApi";


import PageAnimation
from "@/components/PageAnimation";


import Card
from "@/components/ui/Card";


import Button
from "@/components/ui/Button";


import Input
from "@/components/ui/Input";


import Select
from "@/components/ui/Select";


import TransactionCard
from "@/components/transactions/TransactionCard";



export default function TransactionsPage(){


  const [
    transactions,
    setTransactions
  ] = useState<any[]>([]);



  const [
    categories,
    setCategories
  ] = useState<any[]>([]);



  const [
    loading,
    setLoading
  ] = useState(true);



  const [
    submitting,
    setSubmitting
  ] = useState(false);



  const [
    form,
    setForm
  ] = useState({

    type:"expense",

    amount:"",

    currency:"USD",

    description:"",

    date:
    new Date()
    .toISOString()
    .substring(0,10),

    categoryId:"",

  });





  const loadData =
  async()=>{


    try{


      setLoading(true);



      const [

        transactionData,

        categoryData

      ] = await Promise.all([

        getTransactions(),

        getCategories()

      ]);



      setTransactions(

        transactionData

      );



      setCategories(

        categoryData

      );



    }

    catch(error){


      console.error(

        "Failed loading transactions",

        error

      );


    }

    finally{


      setLoading(false);


    }


  };






  useEffect(()=>{


    loadData();


  },[]);








  const handleSubmit =
  async(

    e:React.FormEvent

  )=>{


    e.preventDefault();



    if(

      !form.amount ||

      !form.categoryId

    ){


      alert(

        "Please select category and enter amount"

      );


      return;


    }





    try{


      setSubmitting(true);



      await createTransaction({

        ...form,

        amount:

        Number(form.amount)


      });





      setForm({


        type:"expense",


        amount:"",


        currency:"USD",


        description:"",


        date:

        new Date()

        .toISOString()

        .substring(0,10),


        categoryId:"",


      });





      await loadData();



    }

    catch(error){


      console.error(

        "Failed creating transaction",

        error

      );


    }

    finally{


      setSubmitting(false);


    }


  };








  const removeTransaction =
  async(

    id:string

  )=>{


    try{


      await deleteTransaction(id);



      loadData();



    }

    catch(error){


      console.error(

        "Failed deleting transaction",

        error

      );


    }


  };







  return (

    <PageAnimation>


      <div

      className="
      space-y-8
      "

      >



        <div>


          <h1

          className="
          text-3xl
          font-bold
          tracking-tight
          "

          >

            Transactions

          </h1>



          <p

          className="
          text-gray-500
          mt-2
          "

          >

            Manage your income and expenses in one place.

          </p>


        </div>








        <Card>


          <h2

          className="
          text-xl
          font-bold
          mb-6
          "

          >

            Add New Transaction

          </h2>





          <form

          onSubmit={handleSubmit}

          className="
          grid
          gap-5
          md:grid-cols-2
          "

          >





            <Select


            value={form.type}


            onChange={(e)=>

              setForm({

                ...form,

                type:e.target.value

              })

            }


            >


              <option value="expense">

                Expense

              </option>



              <option value="income">

                Income

              </option>



            </Select>







            <Select


            value={form.categoryId}


            onChange={(e)=>

              setForm({

                ...form,

                categoryId:e.target.value

              })

            }


            >


              <option value="">


                Select Category


              </option>





              {

                categories.map(

                  (category)=>(


                    <option

                    key={category._id}

                    value={category._id}

                    >


                      {category.icon}

                      {" "}

                      {category.name}


                    </option>


                  )


                )

              }


            </Select>









            <Input


            type="number"


            placeholder="Amount"


            value={form.amount}


            onChange={(e)=>

              setForm({

                ...form,

                amount:e.target.value

              })

            }


            />









            <Select


            value={form.currency}


            onChange={(e)=>

              setForm({

                ...form,

                currency:e.target.value

              })

            }


            >


              <option value="USD">

                USD - Dollar

              </option>



              <option value="CAD">

                CAD - Canadian Dollar

              </option>



              <option value="GBP">

                GBP - Pound

              </option>



              <option value="INR">

                INR - Rupee

              </option>



            </Select>









            <Input


            type="date"


            value={form.date}


            onChange={(e)=>

              setForm({

                ...form,

                date:e.target.value

              })

            }


            />









            <Input


            placeholder="Description"


            value={form.description}


            onChange={(e)=>

              setForm({

                ...form,

                description:e.target.value

              })

            }


            className="
            md:col-span-2
            "


            />









            <Button

            className="
            md:col-span-2
            "

            >

              {

                submitting

                ?

                "Saving..."

                :

                "Save Transaction"

              }


            </Button>





          </form>



        </Card>









        <Card>


          <div

          className="
          flex
          justify-between
          items-center
          mb-6
          "

          >


            <h2

            className="
            text-xl
            font-bold
            "

            >

              Transaction History

            </h2>



            <span

            className="
            text-sm
            text-gray-500
            "

            >

              {transactions.length}

              {" "}

              records

            </span>


          </div>









          {

            loading && (

              <p

              className="
              text-gray-500
              "

              >

                Loading transactions...

              </p>

            )

          }









          {

            !loading &&

            transactions.length===0 && (


              <div

              className="
              text-center
              py-12
              "

              >


                <div

                className="
                text-5xl
                "

                >

                  💰

                </div>



                <h3

                className="
                text-xl
                font-bold
                mt-4
                "

                >

                  No transactions yet

                </h3>



                <p

                className="
                text-gray-500
                mt-2
                "

                >

                  Start tracking your income and expenses.

                </p>



              </div>


            )

          }









          <div

          className="
          space-y-4
          "

          >



            {

              transactions.map(

                (transaction)=>(


                  <TransactionCard


                  key={transaction._id}


                  transaction={transaction}


                  onDelete={removeTransaction}


                  />


                )


              )

            }



          </div>





        </Card>






      </div>


    </PageAnimation>

  );


}