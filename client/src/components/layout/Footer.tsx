const Footer = () => {
    return (
        <footer className='flex py-5 w-full'>
            <p className='leading-7 [&:not(:first-child)]:mt-6 w-full text-center text-sm'>
                &copy;{new Date().getFullYear()}. Teknologi &amp; Komunikasi - RS Ernaldi Bahar.
            </p>
        </footer>
    );
};
export default Footer;
