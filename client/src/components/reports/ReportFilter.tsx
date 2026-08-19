interface Props {

period:string;

setPeriod:(value:string)=>void;

}



export default function ReportFilter({

period,

setPeriod

}:Props){



return (

<select

value={period}

onChange={(e)=>

setPeriod(e.target.value)

}

className="
rounded-xl
border
px-4
py-3
bg-white
"

>


<option value="month">

This Month

</option>


<option value="year">

This Year

</option>


<option value="all">

All Time

</option>


</select>

);

}