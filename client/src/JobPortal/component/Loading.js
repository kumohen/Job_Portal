import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div style={{marginTop:"200px"}}>
            
            <Spinner animation="border" variant="danger" />
        </div>
    );
};



export default Loading;