const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-svh'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight'>Something went wrong with your request</h1>
            <p className='leading-7 not-first:mt-6'>Please contact the website owner.</p>
        </div>
    );
};

export default ErrorPage;
