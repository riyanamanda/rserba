type DoctorProps = {
    name: string;
    specialist: string;
    image: string;
};

const DoctorCard = ({ name, specialist, image }: DoctorProps) => {
    return (
        <div className='flex flex-col text-center shrink-0 w-[200px] shadow rounded-lg pb-3'>
            <img src={image} alt={name} className='w-full h-[250px] rounded-t-lg aspect-auto object-cover' />
            <div className='p-1'>
                <h3 className='font-bold text-xs mt-5 text-wrap'>{name}</h3>
                <p className='text-muted-foreground text-xs mt-1'>{specialist}</p>
            </div>
        </div>
    );
};

export default DoctorCard;
