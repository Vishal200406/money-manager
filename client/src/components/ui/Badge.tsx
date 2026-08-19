interface Props {

children:React.ReactNode;

type?:
"success"
|
"warning"
|
"danger"
|
"default";

}



export default function Badge({

children,

type="default"

}:Props){



const styles={


success:

"bg-green-100 text-green-700",


warning:

"bg-orange-100 text-orange-700",


danger:

"bg-red-100 text-red-700",


default:

"bg-gray-100 text-gray-700",


};



return (

<span

className={`
px-3
py-1
rounded-full
text-sm
font-medium
${styles[type]}
`}

>

{children}

</span>

);

}