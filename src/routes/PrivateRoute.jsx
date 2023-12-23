import PropTypes from  'prop-types'
import useAuth from '../hooks/useAuth';
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    if(loading){
        return <div className="min-h-[86vh] flex justify-center items-center"><span className=""> loading....</span></div>
    }
    if(!user){
        return <Navigate to={'/login'} replace={true}/>
    }
    return children;
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}
export default PrivateRoute;