
export default function PageTitle({ name, imageUrl }) {
    return (
        <div
            className="object-cover w-full bg-center bg-cover h-[15rem]"
            style={{
                backgroundImage:
                    `url(${imageUrl}`,
            }}
        >
            <div className="flex items-center justify-center w-full h-full bg-blue-800 bg-opacity-50 ">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
                        {name}
                    </h1>
                </div>
            </div>
        </div>
    )
}