import Link from "next/link";

function NotFound (){

    return(
        <div className="bg-white flex items-center justify-center flex-col w-full h-[100vh]">
            <div className="flex-col flex text-center gap-5" >
                <h2 className="text-9xl text-[#dec39a]">404</h2>
                <b className="text-2xl text-gray-600">{"(:"} صفحه ی مورد نظر یافت نشد </b>
                <Link href={'/'} className="text-gray-400 ">بازگشت به خانه</Link>
                <span className="loading loading-infinity loading-xl"></span>
            </div>
        </div>
    )
}


export default NotFound;
