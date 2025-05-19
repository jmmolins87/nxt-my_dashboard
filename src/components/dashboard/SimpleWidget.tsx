


import Link from "next/link";

interface SimpleWidgetProps {
    title: string;
    subTitle?: string;
    label?: string;
    icon?: React.ReactNode;
    href?: string;
}


export const SimpleWidget = ({ title, subTitle, label, icon, href }: SimpleWidgetProps) => {
    return (
        <div className="bg-white shadow-xl p-3 rounded-2xl border-1 border-gray-50 mx-2">
            <div className="flex flex-col">
                <div>
                    <h2 className="text-2xl font-bold text-gray-600 text-center">{ label }</h2>
                </div>
                <div className="my-3">
                    <div className="flex flex-col items-center justify-center space-x-1 ">
                        <div id="icon">{ icon }</div>
                        <div id="temp" className="flex flex-col items-center gap-2 text-center mt-2">
                            {
                                subTitle && (<p className="text-gray-500">{ subTitle }</p>)
                            }
                            <h4 className="text-4xl">{ title }</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2 pt-2">
                    { 
                        href && (<Link href={href} className="text-blue-500 font-medium">Cambiar nº de productos</Link>)
                    }
                </div>
            </div>
        </div>
    )
}