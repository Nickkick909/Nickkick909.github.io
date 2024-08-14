
import { Box } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

const MainLayout = ({ children }) => {
    const navigate = useNavigate()

    function goHome() {
        navigate('/');
    }
    return (
        <>
        <Box className="header" onClick={goHome}>
            <div className="headerName">
                Nicholas Knight
            </div>

            <div class="tagLine">Full Time Software Engineer / Aspiring Game Developer</div>

            {/* <div className='naviationLinks'>
                <div>
                    Projects
                </div>
                <div>
                    Education
                </div>
                <div>
                    Career
                </div>
            </div> */}
        </Box>

        <Box className="non-header">
           
            <Box component="main" sx={{ p: { xs: 2, sm: 3 } }} className="main-section">

                {children}
            </Box>
        </Box>
        </>
    );
}; 

export default MainLayout;