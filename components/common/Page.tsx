import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

interface pageProps {
    title?: String;
}

const Page = (props: pageProps) => {
    
    return(
        <Grid container>
            <Grid xs={12}>
                <div className='h-screen flex items-center'>
                    {props?.title}
                </div>
            </Grid>
        </Grid>
    )
}

export default Page;